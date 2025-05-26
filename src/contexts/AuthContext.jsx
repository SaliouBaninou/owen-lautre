import { createContext, useContext, useEffect, useState } from "react";
import Axios from "../api/Axios";
Axios.defaults.withCredentials = true;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Vérifie si l'utilisateur est connecté
    const checkAuth = async () => {
        try {
        const res = await Axios.get("me");
        setUser(res.data.user);
        } catch {
        setUser(null);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = async (username, password) => {
        const res = await Axios.post("login", { username, password });
        setUser(res.data.user);
    };

    const logout = async () => {
        await Axios.post("logout");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
