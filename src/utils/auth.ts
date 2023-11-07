import axios from "axios"
import { baseUrl } from "./constant"
import cookie from 'js-cookie'

export const setCookie = (key: string, value: string) => {
    cookie.set(key, value, { expires: 1})
}

export const removeCookie = (key: string) => {
    cookie.remove(key)
}

export const getCookie = (key: string) => {
    return cookie.get(key)
}

export const setAuthentication = (token: string) => {
    setCookie("token", token)
}

export const logout = () => {
    removeCookie("token")
}

export const isLogin = async () => {

    const token = getCookie("token")

    if(token) {
        const res = await axios.post(`${baseUrl}/auth`, { token })
        return res.data
    }

    return false
}