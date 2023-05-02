import { useEffect, useLayoutEffect, useState } from "react";
import { login as loginService } from "../services/auth"
import { handleTokenUpdate } from "../services/utils";
import { useLocalStorage } from "./useLocalStorage";

const initialAuth = {
    user: null,
}
export function useAuth() {
    // utilizatorul curent
    const [{ user, token }, setUser] = useLocalStorage("itschool-library-user", initialAuth);

    useLayoutEffect(() => {
        handleTokenUpdate(token);
    }, [token]);


    // interactionare cu starea
    async function login(credentials) {
        try {
            const userInfo = await loginService(credentials);
            setUser(userInfo);
        } catch (error) {
            throw error.data.message || "Error"
        }

    }

    function logout() {
        setUser(initialAuth);
    }

    return {
        user,
        login,
        logout
    }

}