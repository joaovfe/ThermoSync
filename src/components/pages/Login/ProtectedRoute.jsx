import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    return isAuthenticated ? children : <Navigate to="/" state={{fromProtectedRoute: true}} />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
