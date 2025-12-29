import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const userAuth = {}
    return (
        <AuthContext value={userAuth}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;