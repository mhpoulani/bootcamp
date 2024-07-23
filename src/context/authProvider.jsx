import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const initialValues = {
    register: async () => { },
    login: async () => { },
    uploadImage:async()=>{},
}
const AuthContext = createContext(initialValues)

const AuthProvider = ({ children }) => {
    axios.defaults.baseURL = 'https://bootcamp.vitruvianshield.com/api'
    const register = async (params) => {
        try {
           return axios.post(`/register`, params).then((res) => {
                return res.data
            }).catch((err)=>err)
        } catch (error) {
            console.log(error.response);
        }

    }
    const login = async (params) => {
        try {
          return  axios.get(`login?q=${params}`).then((res) => {
                return res
            }).catch((err)=>err)
        } catch (error) {
            return error
        }
    }
    const uploadImage = async (params) => {
        try {
          return  axios.post(`upload`,{user_id:params.id,image:params.image}).then((res) => {
                return res
            })
        } catch (error) {
            return error
        }
    }
    return (
        <AuthContext.Provider
            value={{
                register, login,uploadImage
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)