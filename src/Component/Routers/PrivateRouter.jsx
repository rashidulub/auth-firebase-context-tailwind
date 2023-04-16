import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    if(loading){
        <progress className="progress w-56"></progress>
    }

    if(user){
        return children;

    }
    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRouter;