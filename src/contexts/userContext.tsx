import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import useUser from '../hooks/useUser';

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {

    const [username, setUsername] = useState()
    const [followers, setFollowers] = useState()
    const [followings, setFollowings] = useState()

    async function fetchFollowers() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${username}`, {
        // const response = await fetch(`https://api.github.com/users/${username}/followers`, {
            cache: 'no-store'
        })
        const data = await response.json()
        setFollowers(data)
        console.log(data)
    }


    return (
        <UserContext.Provider value={{
            username,
            setUsername,
            followers,
            setFollowers,
            followings,
            setFollowings,
            fetchFollowers
        }} >
            {children}
        </UserContext.Provider>
    )
}