import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

export const Header = () => {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  const cartLink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "white",
    };
  };
  return (
    <>
      <nav className="w-vw flex flex-col">
        <section className="flex justify-between p-2 bg-gray-900">
          <p className="ml-40 py-3 text-lg text-white">
            Free shipping 30-days return or refund guarantee
          </p>
          <div className="flex justify-evenly mr-40 text-red-500">
            <NavLink to="/signin" className="px-5 py-3 mr-3">
              SIGN IN
            </NavLink>
            <NavLink to="/signup" className="px-5 py-3">
              SIGN UP
            </NavLink>
          </div>
        </section>
        <section className="flex justify-between p-2 bg-gray-300">
          <div className="border-2 border-black px-2 py-2 ml-39">
            <NavLink to="/" className="text-xl font-bold">
              <span className="text-white bg-black px-1">MOVIE</span>
              <span className="ml-1">HUNT</span>
            </NavLink>
          </div>
          <div className="w-[400px] flex shrink-1 gap-2 justify-evenly items-center text-lg mr-48 text-black">
            {/* <div>
              <NavLink
                to="/"
                className="px-5 py-2 tracking-wider"
                style={textColor}
              >
                HOME
              </NavLink>
            </div> */}
            <div>
              <NavLink
                to="/movie"
                className="px-5 py-2 tracking-wider"
                style={activeLink}
              >
                MOVIE
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/about"
                className="px-5 py-2 tracking-wider"
                style={activeLink}
              >
                ABOUT
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/contact"
                className="px-5 py-2 tracking-wider"
                style={activeLink}
              >
                CONTACT
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/cart"
                className="flex px-5 py-2 bg-black rounded-md"
              >
                <IoMdCart
                  className="mt-1 text-xl text-white"
                  style={cartLink}
                />
                <span className="ml-[3px] text-xl text-white">0</span>
              </NavLink>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};
