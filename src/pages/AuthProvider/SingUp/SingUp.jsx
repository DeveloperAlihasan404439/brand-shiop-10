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
  const location = useLocation()
  const naviget = useNavigate()
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
    }
    userCreate(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            userLogOut();
            e.target.reset();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "User Seccessfull Register",
              showConfirmButton: false,
              timer: 1500,
            });
          naviget(location?.state? location.state: '/singin')
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
      <div className="login-box w-[100%] md:w-[50%] lg:w-[30%] ">
        <h1 className="mb-10 text-white text-center text-xl font-rancho">
          Register on for Exclusive Access <br /> and Benefits Today{" "}
        </h1>
        <form onSubmit={hendelSingup}>
          <div className="user-box">
            <input type="text" name="name" required="" />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="email" name="email" required="" />
            <label>Email</label>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="user-box">
              <input type="password" name="password" required="" />
              <label>Password</label>
            </div>
              <div className="user-box">
                <input type="password" name="confirm" required="" />
                <label>confirm</label>
              </div>
          </div>
          <div className="user-box">
            <input type="text" name="photo" required="" />
            <label>Photo URL</label>
          </div>
          {textError ? <p className="text-red-600">{textError}</p> : ""}

          <div className="text-center">
            <button>
              Register
              <span></span>
            </button>
          </div>
          
        <p className="text-xl text-white pt-5">Already have an account <Link to="/login" className="text-orange-500 hover:underline"> <br /> Please Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
