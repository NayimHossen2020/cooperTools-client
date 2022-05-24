import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../Shared/Loading";
import auth from './../../Firebase/firebase.init';
import { signOut } from "firebase/auth";

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();


    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default RequireAdmin;
