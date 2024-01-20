import { useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthLoaded, setAuthStatus, setAuthToken } from './authReducer';

export const Token = () => {
    const { authLoaded, authToken } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    const handleAuth = async () => {
        let token = await SecureStore.getItemAsync("token");
        dispatch(setAuthToken(JSON.parse(token)));
        if (token) {
            dispatch(setAuthStatus(true))
        }
        dispatch(setAuthLoaded(true));
    };

    useEffect(() => {
        handleAuth();
    }, []);

    if (!authLoaded) {
        return null;
    }
    return authToken
}
