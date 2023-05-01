import { Navigate, Outlet } from "react-router-dom";

const FireWall = () => {
	const isLogged = localStorage.getItem("comic-corner-user") ? true : false;

	return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default FireWall;
