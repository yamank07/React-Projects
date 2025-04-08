import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

export const Header = () => {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
    };
  };

  const cartLink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "white",
    };
  };
  return (
    <>
      <nav className="w-vw flex flex-col bg-gray-900">
        <div className="w-[75%] m-auto">
          <section className="flex justify-between p-2">
            <p className=" py-3 text-lg text-white">
              Free shipping 30-days return or refund guarantee
            </p>
            <div className="flex justify-evenly text-red-500">
              {/* <NavLink to="/signin" className="px-5 py-3 mr-3">
              SIGN IN
            </NavLink>
            <NavLink to="/signup" className="px-5 py-3">
              SIGN UP
            </NavLink> */}
              <NavLink to="/signin" className="px-5 py-3  hover:underline">
                SIGN OUT
              </NavLink>
            </div>
          </section>
        </div>
        <div className="bg-gray-300">
          <section className="w-[75%] m-auto flex justify-between p-2">
            <NavLink className="border-2 border-black px-2 py-2 text-xl font-bold">
              <span className="text-white bg-black px-1">MOVIE</span>
              <span className="ml-1">HUNT</span>
            </NavLink>
            <div className="mr-4 flex shrink-1 gap-1 justify-evenly items-center text-lg text-black">
              <div>
                <NavLink
                  to="/movie"
                  className="px-5 py-2 tracking-wider hover:underline"
                  style={activeLink}
                >
                  MOVIE
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/about"
                  className="px-5 py-2 tracking-wider hover:underline"
                  style={activeLink}
                >
                  ABOUT
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/contact"
                  className="px-5 py-2 tracking-wider hover:underline"
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
        </div>
      </nav>
    </>
  );
};
