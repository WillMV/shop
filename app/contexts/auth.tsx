import React, { createContext, ReactNode, useState } from 'react';

const defaultState = {
    isSignedIn: false,
    signIn: async (email: string, password: string) => { },
}

export const AuthContext = createContext(defaultState);

type AuthProviderProps = {
    children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
    const [isSignedIn, setSignedIn] = useState(false)
    const [attemps, setAttemps] = useState(0);

    const signIn = async (email: string, password: string) => {
        if (!email.includes("@") || !email.includes(".") || email.length < 5) {
            throw new Error("Invalid email address");

        }
        if (password.length < 6) {
            throw new Error("Invalid password");

        }

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (attemps < 1) {
                    setAttemps(1);
                    return reject("Invalid credentials, please try again");
                }
                setSignedIn(true);
                console.log("Logged");
                return resolve("OK");
            }, 3000);
        });
    }

    return (
        <AuthContext.Provider value={{ signIn, isSignedIn }}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;

