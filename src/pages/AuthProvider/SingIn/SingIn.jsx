import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import google from "../../../assets/google.png";
import github from "../../../assets/github.png";
import "./SingIn.css";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
const SingIn = () => {
  const { userLogin, googleUser, githubUser } = useContext(AuthContext);
  const [textError, setTextError] = useState("");
  const providerGoogle = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();
  const naviget = useNavigate();
  const location = useLocation();
  const hendelSingOut = (e) => {
    e.preventDefault();
    setTextError("");
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;
    userLogin( email,password)
      .then(() => {
        naviget(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setTextError(error.message);
      });
  };
  const hendelGoogle = () => {
    googleUser(providerGoogle)
      .then(() => {
        naviget(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setTextError(error.message);
      });
  };
  const hendelGithub = () => {
    githubUser(providerGithub)
      .then(() => {
        naviget(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setTextError(error.message);
      });
  };
  return (
    <div className="w-11/12 mx-auto py-4">
      <form
        onSubmit={hendelSingOut}
        className="form w-full md:w-[50%] mx-auto border-4 mt-5 md:mt-0 border-gradient-to-r from-red-600 to-orange-500"
      >
        <h1 className="text-white text-2xl">Sing In </h1>
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
        {textError ? <p className="text-red-600 mb-4">{textError}</p> : ""}
        <center>
          <button className="button">SingIn</button>
        </center>
        <div className="flex w-full text-white py-5">
          <div onClick={hendelGoogle} className="grid h-20 flex-grow card bg-[#022150] rounded-box place-items-center">
            <img src={google} alt="" className="w-[50px]"/>
          </div>
          <div className="divider divider-horizontal">OR</div>
          <div onClick={hendelGithub} className="grid h-20 flex-grow card bg-[#022150] rounded-box place-items-center">
            <img src={github} alt="" className="w-[50px]"/>
          </div>
        </div>
        <p className="text-xl text-white">
          Donot have Account{" "}
          <Link to="/singup" className="text-orange-500 hover:underline">
            {" "}
            <br /> Please Sing Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SingIn;
