import { useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInputCont = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmitContact = (e) => {
    e.preventDefault();
    const data = {
      username: contact.username,
      email: contact.email,
      message: contact.message,
    };
    console.log(data);
    setContact({ username: "", email: "", message: "" });
  };
  return (
    <>
      <main className="w-vw h-195 p-10 bg-gray-700">
        <div className="w-[70%] h-[100%] m-auto flex">
          <section className="register w-[50%] z-0 h-[100%] flex flex-col justify-center items-center bg-gray-500 text-white">
            <h1 className="text-5xl my-10 font-bold">Get in Touch</h1>
            <form
              onSubmit={handleOnSubmitContact}
              className="flex flex-col p-5 gap-5"
            >
              <input
                type="text"
                name="username"
                placeholder="Name"
                value={contact.username}
                onChange={handleInputCont}
                //   {<CiUser />}
                className="w-120 px-10 py-4 mb-3 bg-gray-300 text-black font-semibold focus:outline-none focus:bg-gray-400 focus:text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={contact.password}
                onChange={handleInputCont}
                //   <MdOutlineLock />
                className="w-120 px-10 py-4 mb-3 bg-gray-300 text-black font-semibold focus:outline-none focus:bg-gray-400 focus:text-white"
              />
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Message"
                input={contact.username}
                onChange={handleInputCont}
                required
                className="w-120 px-10 py-4 mb-3 bg-gray-300 text-black font-semibold focus:outline-none focus:bg-gray-400 focus:text-white"
              ></textarea>
              <button
                className="w-50 m-auto px-5 py-3 my-6 mb-10 text-lg text-white bg-gray-700 border border-white rounded-4xl hover:cursor-pointer active:bg-gray-800 active:text-white"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </section>
          <section className="w-[50%] m-auto">
            <figure>
              <img
                src="/contact-img.png"
                alt="contact-form-img"
                className="w-300"
              />
            </figure>
          </section>
        </div>
      </main>
    </>
  );
};
