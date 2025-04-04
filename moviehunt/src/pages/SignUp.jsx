import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";

export const SignUp = () => {
  const [userReg, setUserReg] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputReg = (e) => {
    const { name, value } = e.target;
    setUserReg((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmitReg = (e) => {
    e.preventDefault();
    const regData = {
      username: userReg.username,
      email: userReg.email,
      password: userReg.password,
    };
    console.log(regData);
    setUserReg({ username: "", email: "", password: "" });
  };

  //   let signIn = false;
  //   let signUp = true;
  //   const handleSignIn = () => {
  //     if (!signIn) {
  //       signIn = true;
  //       signUp = false;
  //       const signInCont = document.querySelector(".signIn");
  //       const registerCont = document.querySelector(".register");
  //       const signUpCont = document.querySelector(".signUp");
  //       const loginCont = document.querySelector(".login");
  //       signInCont.style.transform = "translateX(90%)";
  //         signInCont.style.display = "none";
  //         signInCont.style.zIndex = "0";
  //       signUpCont.style.transform = "translateX(0%)";
  //         signInCont.style.display = "block";
  //     }
  //   };
  //   const handleSignUp = () => {
  //     if (!signIn) {
  //       signIn = false;
  //       signUp = true;
  //       const signInContainer = document.querySelector(".signIn");
  //       const signUpContainer = document.querySelector(".signUp");
  //       signInContainer.style.transform = "translateX(0%)";
  //       signInContainer.style.display = "block";
  //       signUpContainer.style.transform = "translateX(185.5%)";
  //       signInContainer.style.display = "none";
  //     }
  //   };
  return (
    <>
      <div className="w-vw h-wh bg-gray-700 p-15">
        <div className="w-[80%] h-170 m-auto">
          <section className="w-[100%] h-[100%] flex relative">
            <div className="absolute z-3 top-3 left-3 border-2 border-gray-600 p-1">
              <span className="text-white text-lg font-bold bg-gray-600 px-1">
                MOVIE
              </span>
              <span className="text-lg text-gray-600 font-bold ml-1">HUNT</span>
            </div>
            <section
              className="signIn w-[35%] h-[100%] flex flex-col justify-center items-center bg-gray-100 transition duration-500 ease-in-out"
              //   style={{
              //     transform: "translateX(0)",
              //     display: "block",
              //     zIndex: "2",
              //   }}
            >
              <h1 className="text-3xl font-bold mt-50 my-5">Welcome Back!</h1>
              <p className="text-md text-gray-700 text-center my-5">
                To keep connected with us please <br />
                login with the personal info
              </p>
              <NavLink to="/signin">
                <button
                  className="px-15 py-3 my-5 mb-50 text-lg border rounded-4xl hover:cursor-pointer hover:bg-gray-700 hover:text-white"
                  // onClick={handleSignIn}
                >
                  SIGN IN
                </button>
              </NavLink>
            </section>
            <section
              className="register w-[65%] z-0 h-[100%] flex flex-col justify-center items-center bg-gray-500 text-white"
              // style={{transform: "translateX(0)", display: "block", zIndex: "2"}}
            >
              <h1 className="text-5xl my-10 font-bold">Create Account</h1>
              <div className="my-5 flex gap-2">
                <NavLink className="p-3 border-1 border-gray-200 rounded-4xl ">
                  <FaFacebookF className="size-6" />
                </NavLink>
                <NavLink className="p-3 border-1 border-gray-200 rounded-4xl">
                  <FaGooglePlusG className="size-6" />
                </NavLink>
                <NavLink className="p-3 border-1 border-gray-200 rounded-4xl">
                  <FaLinkedinIn className="size-6" />
                </NavLink>
              </div>
              <p className="text-md text-gray-100 my-2">
                or use your email for registration
              </p>
              <form onSubmit={handleOnSubmitReg} className="flex flex-col p-5">
                <input
                  type="text"
                  name="username"
                  placeholder="Name"
                  value={userReg.username}
                  onChange={handleInputReg}
                  required
                  //   {<CiUser />}
                  className="w-120 px-10 py-4 mb-3 bg-gray-300 text-black font-semisolid focus:outline-none focus:bg-gray-400 focus:text-white"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={userReg.email}
                  onChange={handleInputReg}
                  //   <MdOutlineEmail />
                  className="w-120 px-10 py-4 mb-3 bg-gray-300 text-black font-semisolid focus:outline-none focus:bg-gray-400 focus:text-white"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={userReg.password}
                  onChange={handleInputReg}
                  required
                  //   <MdOutlineLock />
                  className="w-120 px-10 py-4 mb-3 bg-gray-300 text-black font-semisolid focus:outline-none focus:bg-gray-400 focus:text-white"
                />
                <button
                  className="w-50 m-auto px-5 py-3 my-6 mb-10 text-lg text-white bg-gray-700 border border-white rounded-4xl hover:bg-red-600 hover:border-none hover:cursor-pointer"
                  type="submit"
                >
                  SIGN UP
                </button>
              </form>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};
