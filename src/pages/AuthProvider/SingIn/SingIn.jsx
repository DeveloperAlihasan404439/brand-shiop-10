import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import google from "../../../assets/google.png";
import github from "../../../assets/github.png";
import "./SingIn.css";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
const SingIn = () => {
  const { userLogin, googleUser,githubUser } = useContext(AuthContext);
  const [textError, setTextError] = useState("");
  const providerGoogle = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();
  const naviget = useNavigate()
  const location = useLocation()
  const hendelSingOut = (e) => {
    e.preventDefault();
    setTextError("");
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    userLogin(name, email)
      .then(() => {
        naviget(location?.state? location.state: '/')
      })
      .catch((error) => {
        setTextError(error.message);
      });
  };
  const hendelGoogle = () => {
    googleUser(providerGoogle)
      .then(() => {
        naviget(location?.state? location.state: '/')
      })
      .catch((error) => {
        setTextError(error.message);
      });
  };
  const hendelGithub = () => {
    githubUser(providerGithub)
      .then(() => {
        naviget(location?.state? location.state: '/')
      })
      .catch((error) => {
        setTextError(error.message);
      });
  };
  return (
    <div className="login-box w-[100%] md:w-[50%] lg:w-[30%] ">
      <h1 className="mb-10 text-white text-center text-2xl font-rancho">
        Sing In
      </h1>
      <form onSubmit={hendelSingOut}>
        <div className="user-box">
          <input type="email" name="email" required="" />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required="" />
          <label>Password</label>
        </div>
        {textError ? <p className="text-red-600 mb-4">{textError}</p> : ""}
        <div  onClick={hendelGoogle} className="flex w-full">
          <div className="grid h-20 flex-grow card bg-[#024EA0] rounded-box place-items-center">
            <img src={google} alt="" className="w-[50px]" />
          </div>
          <div className="divider divider-horizontal text-white">OR</div>
          <div
            onClick={hendelGithub}
            className="grid h-20 flex-grow card bg-[#024EA0] rounded-box place-items-center"
          >
            <img src={github} alt="" className="w-[50px]" />
          </div>
        </div>
        <div className="text-center">
          <button>
            Sing In
            <span></span>
          </button>
        </div>
        <p className="text-xl text-white pt-5">
            Do not have account{" "}
            <Link to="/registor" className="text-orange-500 hover:underline">
              <br />
              Please Registor
            </Link>
          </p>
      </form>
    </div>
  );
};

export default SingIn;
