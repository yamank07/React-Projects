import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  // const [mail, setMail] = useState("");

  const handleNewsLetter = (formData) => {
    const sentTo = Object.fromEntries(formData.entries());
    console.log(sentTo);
  };
  // const handleNewsLetter = (e) => {
  //   e.preventDefault();
  //   console.log(mail);
  //   setMail("");
  // };
  return (
    <>
      <footer className="w-vw bg-gray-800">
        <section className="w-[75%] m-auto flex gap-15 text-gray-300 text-left">
          <div className="flex flex-col w-[35%] px-2 py-5">
            <NavLink className="max-w-34 mt-8 border-2 border-white p-1">
              <span className="text-gray-900 text-lg font-bold bg-white px-1">
                MOVIE
              </span>
              <span className="text-lg text-white font-bold ml-1">HUNT</span>
            </NavLink>
            <p className="mt-7 mb-5">
              Welcome to Yaman EcomStore, Your ultimate destination for
              cutting-edge gadgets!
            </p>
            <div className="flex shrink-1 gap-2">
              <img
                src="/mastercard.svg"
                alt="masterCard"
                style={{ height: 20 }}
              />
              <img src="visa.png" alt="visa" style={{ height: 20 }} />
              <img
                src="/mastercard.svg"
                alt="masterCard"
                style={{ height: 20 }}
              />
              <img src="visa.png" alt="visa" style={{ height: 20 }} />
            </div>
          </div>
          <div className="p-12 ">
            <h1 className="font-semibold mb-5">SHOPPING</h1>
            <p className="mb-3">Computer Store</p>
            <p className="mb-3">Laptop Store</p>
            <p className="mb-3">Accessories</p>
            <p>Sale & Discount</p>
          </div>
          <div className="p-12">
            <h1 className="font-semibold mb-5">EXPERIENCE</h1>
            <p className="mb-3">Contact Us</p>
            <p className="mb-3">Payment Method</p>
            <p className="mb-3">Delivery</p>
            <p>Return & Exchange</p>
          </div>
          <div className="p-12">
            <h1 className="font-semibold mb-6">NEWSLETTER</h1>
            <p>
              Be the first to know about new <br /> arrival, sales and promos!
            </p>
            <form
              action={handleNewsLetter}
              // onSubmit={handleNewsLetter}
            >
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                autoComplete="false"
                className="p-3 mt-5 border-2 border-x-transparent border-t-transparent border-b-gray-300 bg-gray-900  focus:outline-none"
                // value={mail}
                // value="text@gmail.com"
                // onChange={(e) => setMail(e.target.value)}
              />
              <button type="submit"></button>
            </form>
          </div>
        </section>
        <hr className="text-gray-700" />
        <h1 className="p-4 text-xl text-gray-600 text-center">
          Design and Code by Yaman
        </h1>
      </footer>
    </>
  );
};
