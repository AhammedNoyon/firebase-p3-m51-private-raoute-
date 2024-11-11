import React, { useContext } from "react";
import { AuthContext } from "../../provider/ContextProvider";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateParent = ({ children }) => {
  const { user, reload } = useContext(AuthContext);
  // const navigate = useNavigate();
  if (reload) {
    return <span className="loading loading-spinner text-success"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
  // return navigate("/login");
};

export default PrivateParent;
