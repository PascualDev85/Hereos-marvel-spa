import { useContext, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }) => {
  // destructuramos
  const { logged } = useContext(AuthContext);

  // destructuramos para cuando user se logue de nuevo vuelva al mismo lugar
  const { pathname, search } = useLocation();

  const lastPath = useMemo(() => pathname + search, [pathname, search]);

  localStorage.setItem("lastPath", lastPath);

  return logged ? children : <Navigate to="/login" />;
};
