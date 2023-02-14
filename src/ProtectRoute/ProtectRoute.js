import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  let type = localStorage.getItem("type");

  const user = {
    loggedIn: false,
  };
  if (type == "admin") {
    user.loggedIn = true;
  }
  return user && user.loggedIn;
};

const ProtectRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectRoute;
