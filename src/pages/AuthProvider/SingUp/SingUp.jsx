import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import "./SingUp.css";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
const SingUp = () => {
  const [textError, setTextError] = useState("");
  const { userCreate, userLogOut } = useContext(AuthContext);
  const auth = getAuth(app);
  const location = useLocation();
  const naviget = useNavigate();
  const hendelSingup = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    const confirm = target.confirm.value;
    const photo = target.photo.value;
    setTextError("");
    if (password !== confirm) {
      return setTextError("Password and confirm don't match ");
    } else if (!/[A-Z]/.test(password)) {
      return setTextError("Password most be one uppercase ");
    } else if (!/[0-9]/.test(password)) {
      return setTextError("Password most be one Number ");
    } else if (!/[!@#$%^&*]/.test(password)) {
      return setTextError("Password most be one Spaciel ");
    }
    userCreate(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
           
            e.target.reset();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "User Seccessfull Register",
              showConfirmButton: false,
              timer: 1500,
            });
            userLogOut();
            naviget(location?.state ? location.state : "/singin");
          })
          .catch((error) => {
            setTextError(error.message);
          });
      })
      .catch((error) => {
        setTextError(error.message);
      });
  };

  return (
    <div>
      <div className="w-11/12 mx-auto py-4">
        <form
          onSubmit={hendelSingup}
          className="form w-full md:w-[50%] mx-auto border-4 mt-5 md:mt-0 border-gradient-to-r from-red-600 to-orange-500"
        >
          <h1 className="text-white text-2xl">Sing Up</h1>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <input
            className="input"
            type="password"
            name="confirm"
            placeholder="confirm"
          />
          
          <input
            className="input"
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
          />
          
        {textError ? <p className="text-red-600 mb-4">{textError}</p> : ""}
          <center>
            <button className="button">Sing Up</button>
          </center>
          <p className="text-xl text-white pt-5">
            Already have an account{" "}
            <Link to="/singin" className="text-orange-500 hover:underline">
              {" "}
              <br /> Please Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
