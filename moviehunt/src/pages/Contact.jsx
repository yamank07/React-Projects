import axios from "axios";
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

  // const handleOnSubmitContact = (e) => {
  //   e.preventDefault();
  //   console.log(contact);
  //   setContact({ username: "", email: "", message: "" });
  // };
  const handleOnSubmitContact = (formData) => {
    const contactData = Object.fromEntries(formData.entries());
    console.log("Contact details are getting fetched...");
    axios
      .post("http://localhost:3000/contact", contactData)
      .catch((err) => console.log(err));
    console.log("Contact details has been added.");
    setContact({ username: "", email: "", message: "" });
  };

  return (
    <>
      <main className="w-vw h-195 p-10 bg-gray-700">
        <div className="w-[70%] h-[100%] m-auto flex">
          <section className="register w-[50%] h-[90%] mt-10 flex flex-col justify-center items-center bg-gray-500/50 text-white">
            <h1 className="text-5xl my-10">Get in Touch</h1>
            <form
              // onSubmit={handleOnSubmitContact}
              action={handleOnSubmitContact}
              className="flex flex-col p-5 gap-2"
            >
              <input
                type="text"
                name="username"
                placeholder="Name"
                value={contact.username}
                onChange={handleInputCont}
                //   {<CiUser />}
                className="w-120 px-6 py-4 mb-3 bg-gray-300 text-black focus:outline-none focus:bg-gray-400 focus:text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={contact.email}
                onChange={handleInputCont}
                //   <MdOutlineLock />
                className="w-120 px-6 py-4 mb-3 bg-gray-300 text-black focus:outline-none focus:bg-gray-400 focus:text-white"
              />
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Message"
                input={contact.message}
                onChange={handleInputCont}
                required
                className="w-120 px-6 py-4 mb-3 bg-gray-300 text-black focus:outline-none focus:bg-gray-400 focus:text-white"
              ></textarea>
              <button
                className="w-50 m-auto px-5 py-3 mb-10 text-lg text-white bg-gray-700 border border-white rounded-4xl hover:cursor-pointer hover:bg-gray-800 hover:text-white"
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
