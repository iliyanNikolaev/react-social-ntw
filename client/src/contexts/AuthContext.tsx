import { ReactElement, createContext, useContext, useState } from "react";

type AuthContextProps = {
    loginHandler: (data: { email: string, password: string }) => void,
    registerHandler: (data: { email: string, password: string }) => void,
    logoutHandler: () => void,
    userData: UserDataType
}

type UserDataType = {
    isAuth: boolean
}

const userDataInit = { isAuth: false };

const AuthContextPropsInit = {
    loginHandler: (data: { email: string, password: string }) => { console.log(data) },
    registerHandler: (data: { email: string, password: string }) => { console.log(data) },
    logoutHandler: () => { },
    userData: userDataInit
}

const AuthContext = createContext<AuthContextProps>(AuthContextPropsInit);

export const AuthContextProvider = ({ children }: { children: ReactElement | ReactElement[] }) => {

    const [userData, setUserData] = useState<UserDataType>(() => {
        const userData = sessionStorage.getItem('tempAuth');
        if (userData) {
            return JSON.parse(userData);
        }
        return userDataInit;
    })

    const loginHandler = (data: { email: string, password: string }) => {
        console.log(data);
        sessionStorage.setItem('tempAuth', JSON.stringify({ isAuth: true }));
        setUserData({ isAuth: true });
    }

    const registerHandler = (data: { email: string, password: string }) => {
        console.log(data);
        sessionStorage.setItem('tempAuth', JSON.stringify({ isAuth: true }));
        setUserData({ isAuth: true });
    }

    const logoutHandler = () => {
        sessionStorage.removeItem('tempAuth');
        setUserData({ isAuth: false });
    }

    const ctx = {
        loginHandler,
        registerHandler,
        logoutHandler,
        userData
    }

    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const ctx = useContext(AuthContext);
    return ctx;
}