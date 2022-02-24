// import { useContext } from "react"
// import { AuthContext } from "../context/AuthProvider"

// const useAuth = () => {
//     return useContext(AuthContext);
// }

// export default useAuth;
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;