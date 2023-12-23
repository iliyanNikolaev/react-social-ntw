import { ReactElement, createContext, useContext, useState } from "react";

type AuthContextProps = {
    loginHandler: (e: SubmitEvent) => void,
    registerHandler: (e: SubmitEvent) => void,
    logoutHandler: () => void,
    userData: UserDataType
}

const AuthContextPropsInit = {
    loginHandler: (e: SubmitEvent) => { e.preventDefault() },
    registerHandler: (e: SubmitEvent) => { e.preventDefault() },
    logoutHandler: () => {},
    userData: { isAuth: false } 
}

type UserDataType = {
    isAuth: boolean
}

const userDataInit = { isAuth: false };

const AuthContext = createContext<AuthContextProps>(AuthContextPropsInit);

export const AuthContextProvider = ({ children }: { children: ReactElement | ReactElement[] }) => {

    const [userData, setUserData] = useState<UserDataType>(userDataInit)

    const loginHandler = (e: SubmitEvent) => {
        e.preventDefault();

        setUserData({ isAuth: true });
    }

    const registerHandler = (e: SubmitEvent) => {
        e.preventDefault();


    }

    const logoutHandler = () => {

    }

    const ctx = {
        loginHandler,
        registerHandler,
        logoutHandler,
        userData,
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