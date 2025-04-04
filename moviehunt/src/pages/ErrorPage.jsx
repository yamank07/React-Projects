import { NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  // const err = useRouteError();
  // console.log(err);
  // if (err.status === 404) {
  //   console.log(err.statusText);
  // } else {
  //   console.log("Unknown Error");
  // }
  // return <h1 className="text-5xl">404 Page Error</h1>;

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-8xl absolute top-20 err-font">404</h1>
        <figure>
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="404error"
          />
        </figure>
        <h2 className="absolute top-115 text-6xl err-font">
          Looks like you're lost
        </h2>
        <p className="absolute top-135 text-3xl err-font">
          the page you're looking for is'nt available!
        </p>    
        <div className="flex gap-5">
          <button
            className="w-50 text-center text-lg p-3 rounded-xl text-white bg-red-500 hover:bg-red-700"
            onClick={handleGoBack}
          >
            Go Back
          </button>
          <NavLink
            className="w-50 text-center text-lg p-3 rounded-xl text-white bg-red-500 hover:bg-red-700"
            to="/"
          >
            Go To Home
          </NavLink>
        </div>
      </div>
    </>
  );
};
