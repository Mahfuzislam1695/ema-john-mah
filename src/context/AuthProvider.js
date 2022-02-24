// import React, { createContext } from 'react';
// import useFirebase from './../hooks/useFirebase';

// export const AuthContext = createContext();

// const AuthProvider = (props) => {
//     const { children } = props;
//     const allContexts = useFirebase();
//     return (
//         <AuthContext.Provider value={allContexts}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;