export const Footer = () => {
  return (
    <>
      <footer className="w-vw bg-gray-800">
        <section className="w-vw flex gap-5 bg-gray-800 text-gray-300 text-left">
          <div className="flex flex-col w-[35%] p-10 ml-60 ">
            <img src="/" alt="logo" />
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
            <input
              type="mail"
              placeholder="Your Email"
              className="p-3 mt-5 border-2 border-x-transparent border-t-transparent border-b-gray-300 bg-gray-900  focus:outline-none"
            />
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
