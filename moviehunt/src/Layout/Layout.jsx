import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") return <h1>Loading...</h1>;

  return (
    <>
      <div className="w-vw h-vh">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
