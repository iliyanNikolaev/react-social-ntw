import { FormEvent, FormEventHandler, ReactElement, createContext, useContext, useState } from "react";

type AuthContextProps = {
    loginHandler: FormEventHandler<HTMLFormElement>,
    registerHandler: FormEventHandler<HTMLFormElement>,
    logoutHandler: () => void,
    userData: UserDataType
}

type UserDataType = {
    isAuth: boolean
}

const userDataInit = { isAuth: false };

const AuthContextPropsInit = {
    loginHandler: (e: FormEvent) => { e.preventDefault() },
    registerHandler: (e: FormEvent) => { e.preventDefault() },
    logoutHandler: () => {},
    userData: userDataInit
}

const AuthContext = createContext<AuthContextProps>(AuthContextPropsInit);

export const AuthContextProvider = ({ children }: { children: ReactElement | ReactElement[] }) => {

    const [userData, setUserData] = useState<UserDataType>(() => {
        const userData = sessionStorage.getItem('tempAuth');
        if(userData) {
            return JSON.parse(userData);
        }
        return userDataInit;
    })

    const loginHandler = (e: FormEvent) => {
        e.preventDefault();
        sessionStorage.setItem('tempAuth', JSON.stringify({isAuth: true}));
        setUserData({ isAuth: true });
    }

    const registerHandler = (e: FormEvent) => {
        e.preventDefault();

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