import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;

  if (!isAuthenticated || !loggedInUser) {
    return <Navigate to="/" state={{ fromProtectedRoute: true }} />;
  }

  
  if (adminOnly && loggedInUser.permissao !== "admin") {
    return <Navigate to="/Dashboard" />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  adminOnly: PropTypes.bool,
};

export default ProtectedRoute;
