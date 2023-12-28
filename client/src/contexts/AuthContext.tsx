import { ReactElement, createContext, useContext, useState } from "react";
import { IUserData } from "../interfaces";
type AuthContextProps = {
    loginHandler: (data: { email: string, password: string }) => void,
    registerHandler: (data: { email: string, password: string }) => void,
    logoutHandler: () => void,
    userData: IUserData
}

const userDataInit = { isAuth: false };
const mockUserData = {
    isAuth: true,
    id: '4',
    firstName: 'Iliyan',
    lastName: 'Nikolaev',
    coverPic: 'https://media.wired.com/photos/5ca648a330f00e47fd82ae77/master/pass/Culture_Matrix_Code_corridor.jpg',
    profilePic: 'https://avatars.githubusercontent.com/u/121745595?v=4'
}

const AuthContextPropsInit = {
    loginHandler: (data: { email: string, password: string }) => { console.log(data) },
    registerHandler: (data: { email: string, password: string }) => { console.log(data) },
    logoutHandler: () => { },
    userData: userDataInit
}

const AuthContext = createContext<AuthContextProps>(AuthContextPropsInit);

export const AuthContextProvider = ({ children }: { children: ReactElement | ReactElement[] }) => {

    const [userData, setUserData] = useState<IUserData>(() => {
        const userData = sessionStorage.getItem('tempAuth');
        if (userData) {
            return JSON.parse(userData);
        }
        return userDataInit;
    })

    const loginHandler = (data: { email: string, password: string }) => {
        console.log(data);
        sessionStorage.setItem('tempAuth', JSON.stringify({ isAuth: true }));
        setUserData(mockUserData);
    }

    const registerHandler = (data: { email: string, password: string }) => {
        console.log(data);
        sessionStorage.setItem('tempAuth', JSON.stringify({ isAuth: true }));
        setUserData(mockUserData);
    }

    const logoutHandler = () => {
        sessionStorage.removeItem('tempAuth');
        setUserData({isAuth: false});
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