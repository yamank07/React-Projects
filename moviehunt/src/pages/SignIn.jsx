import { useEffect, useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export const SignIn = () => {
  const [userDB, setUserDB] = useState([]);
  const [user, setUser] = useState({ signInUsername: "", signInPassword: "" });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/loginCred")
      .then((res) => setUserDB(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleInputIn = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const credCheck = (user, userDB) => {
    const { signInUsername, signInPassword } = user;
    const matchCred = userDB.filter((curCred) => {
      return curCred.username === signInUsername;
    });
    if (matchCred.length === 0) {
      setUser({ signInUsername: "", signInPassword: "" });
      alert("Username is incorrect, Try again!!");
    } else if (matchCred[0].password === signInPassword) {
      console.log("Login Cred matched, directing to the home page.");
      navigate("/");
      setUser({ signInUsername: "", signInPassword: "" });
    } else {
      setUser({ signInUsername: "", signInPassword: "" });
      alert("Password is incorrect, Try again!!");
    }
  };

  const handleOnSubmitIn = (e) => {
    e.preventDefault();
    console.log(userDB);
    console.log("Login Cred by user: ", user);
    credCheck(user, userDB);
  };

  return (
    <>
      <main className="w-vw h-lvh bg-gray-700 p-15">
        <div className="w-[80%] h-195 m-auto flex flex-col justify-center items-center">
          <section className="w-[100%] h-[100%] flex relative">
            <div className="absolute z-3 top-3 left-3 border-2 border-white p-1">
              <span className="text-gray-600 text-lg font-bold bg-white px-1">
                MOVIE
              </span>
              <span className="text-lg text-white font-bold ml-1">HUNT</span>
            </div>
            <section
              className="register w-[65%] z-0 h-[100%] flex flex-col justify-center items-center bg-gray-500/50 text-white"
              // style={{transform: "translateX(0)", display: "block", zIndex: "2"}}
            >
              <h1 className="text-6xl my-10 font-bold">Sign in to YamCode</h1>
              <div className="my-5 flex gap-4">
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
                or use your email account
              </p>
              <form
                onSubmit={handleOnSubmitIn}
                className="flex flex-col p-5 gap-3"
              >
                <input
                  type="text"
                  name="signInUsername"
                  placeholder="Name"
                  value={user.signInUsername}
                  onChange={handleInputIn}
                  required
                  //   {<CiUser />}
                  className="w-120 px-10 py-4 mb-3 bg-gray-300 text-black font-semibold focus:outline-none focus:bg-gray-400 focus:text-white"
                />
                <input
                  type="password"
                  name="signInPassword"
                  placeholder="Password"
                  value={user.signInPassword}
                  onChange={handleInputIn}
                  required
                  //   <MdOutlineLock />
                  className="w-120 px-10 py-4 mb-3 bg-gray-300 text-black font-semibold focus:outline-none focus:bg-gray-400 focus:text-white"
                />
                <p className="text-lg text-gray-200 text-center my-4">
                  Forgot your password?
                </p>
                <button
                  className="w-50 m-auto px-5 py-3 mb-10 text-lg text-white bg-gray-700 border border-white rounded-4xl hover:bg-red-600 hover:border-none hover:cursor-pointer"
                  type="submit"
                >
                  SIGN IN
                </button>
              </form>
            </section>
            <section
              className="signIn w-[35%] h-[100%] flex flex-col justify-center items-center bg-gray-100 transition duration-500 ease-in-out"
              //   style={{
              //     transform: "translateX(0)",
              //     display: "block",
              //     zIndex: "2",
              //   }}
            >
              <h1 className="text-3xl font-bold mt-50 my-5">Hello, Friend!</h1>
              <p className="text-md text-gray-700 text-center my-5">
                Enter your personal details <br />
                and start journey with us
              </p>
              <NavLink to="/signup">
                <button
                  className="px-15 py-3 my-5 mb-50 text-lg border rounded-4xl hover:cursor-pointer hover:bg-gray-700 hover:text-white"
                  // onClick={handleSignIn}
                >
                  SIGN UP
                </button>
              </NavLink>
            </section>
          </section>
        </div>
      </main>
    </>
  );
};
