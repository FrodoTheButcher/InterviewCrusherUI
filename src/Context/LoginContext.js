import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const CustomAuth = createContext();

export const useAuth = () => useContext(CustomAuth)

export const CustomAuthProvider = ({children})=>{
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user") || null);
    const [user, setUser] = useState(userFromLocalStorage);
    const [firstLogin,setFirstLogin]=useState(true)

    const getNewToken = async ()=>{
        try{
            const response = await axios.post('/api/users/token/refresh/', { "refresh": localStorage.getItem('refresh') });
            var decoded = jwt_decode(response.data.access);
            const updatedUser = {
                email: decoded?.username,
                name: decoded?.name,
                userId: decoded?.user_id,
                image:decoded?.image,
                isPremium:decoded?.isPremium
            };
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
            localStorage.setItem('refresh', response.data.refresh);
            localStorage.setItem('access', response.data.access)
        }
        catch(error)
        {
            console.error(error)
        }
    }

    const login = async (email,password)=>{
        const data={
            "username":email,
            "password":password
        }
        try {
            console.log('datele bolovanului', data)
            const response = await axios.post(`/api/users/token/`,data)
            console.log('response',response)
            localStorage.setItem('refresh',response.data.refresh);
            localStorage.setItem('access',response.data.access)
            var decoded = jwt_decode(response.data.access);
            const updatedUser = {
                email: decoded?.username,
                name: decoded?.name,
                userId: decoded?.user_id,
                isPremium:decoded?.isPremium
            };
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
        }
        catch (error) {
            console.error(error);
        }
    }

    const logout = ()=>{
        localStorage.removeItem('user');
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        setUser(null)
    }   

    useEffect(()=>{

        if(firstLogin)
            getNewToken();

        const interval = setInterval(()=>{
                getNewToken();
        }, 14400)
        setFirstLogin(false)
        return ()=>{
            clearInterval(interval)
        }
    },[])

    const value = {
        login: login,
        logout:logout,
        user:user,
    }

    return (
        <CustomAuth.Provider value={value}>
            {children}
        </CustomAuth.Provider>
    )
}