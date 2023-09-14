import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import jwt_decode from "jwt-decode";


export const CustomAuth = createContext();




export const CustomAuthProvider = ({children})=>{
    const [user, setUser] = useState(localStorage.getItem("user") === null ? null : localStorage.getItem("user"));
    const [firstLogin,setFirstLogin]=useState(true)

    const getNewToken = async ()=>{

        try{

            const response = await axios.post('http://127.0.0.1:8000/api/users/token/refresh/', { "refresh": localStorage.getItem('refresh') });
            var decoded = jwt_decode(response.data.access);
            const updatedUser = {
                email: decoded?.username,
                name: decoded?.name,
                userId: decoded?.user_id
            };

            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
            localStorage.setItem('refresh', response.data.refresh);
            localStorage.setItem('access', response.data.access)

        }
        catch(e)
        {
            console.error(e)
        }
    }

    const register = async(email,password,password2)=>{
        const data ={
            "username":email,
            "password":password,
            "password2":password2
        }
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/users/",data);
            if(response.status===200)
            {
                login(email,password);
            }
        }
        catch(e){
            console.error(e);
        }

    }

    const login = async (email,password)=>{

        const data={
            "username":email,
            "password":password
        }
        
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/users/token/`,data)
            localStorage.setItem('refresh',response.data.refresh);
            localStorage.setItem('access',response.data.access)
            var decoded = jwt_decode(response.data.access);
            const updatedUser = {
                email: decoded?.username,
                name: decoded?.name,
                userId: decoded?.user_id
            };

            setUser(updatedUser);
            
            localStorage.setItem("user", JSON.stringify(updatedUser));
        }
        catch (e) {
            console.error(e);
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{

            if(firstLogin===false)
            {
                getNewToken();
            }
        }, 14400)
        setFirstLogin(false)
        return ()=>{
            clearInterval(interval)
        }
    },[])


    const logout = ()=>{
        localStorage.removeItem('user');
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        setUser(null)

    }   
    const value = {
        login: login,
        logout:logout,
        user:user,
        register: register,
    }
    return (
        <CustomAuth.Provider value={value}>
            {children}
        </CustomAuth.Provider>
    )
}