import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate();

    const generateImage = async (prompt) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/image/generate-image', { prompt }, { headers: { token } });

            if (data.success) {
                return data.resultImage;
            } else {
                toast.error(data.message || "Gagal generate gambar.");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setUser(null);
    };

    useEffect(() => {
        const loadUser = async () => {
            try {
                const { data } = await axios.get(backendUrl + '/api/user/info', { headers: { token } });
                if (data.success) {
                    setUser(data.user);
                }
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        };

        if (token) {
            loadUser();
        }
    }, [token]);

    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
        backendUrl,
        token,
        setToken,
        logout,
        generateImage,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
