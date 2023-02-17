import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {

    const [username, setUsername] = useState('')
    const [followers, setFollowers] = useState([])
    const [followings, setFollowings] = useState([])

    // verify Number Of Follwers And Run Code For Each Page
    async function fetchFollowers() {
        const response = await fetch(`https://api.github.com/users/${username}`, {
            cache: 'no-store'
        })
        const data = await response.json()
        const numberOfFollowers = data.followers

        let page = numberOfFollowers / 30 + 1
        for (let i = 1; i < page; i++) {
            runFetchFollowers(i)
        }
    }

    async function fetchFollowing() {
        const response = await fetch(`https://api.github.com/users/${username}`, {
            cache: 'no-store'
        })
        const data = await response.json()
        const numberOfFollowings = data.following

        let page = numberOfFollowings / 30 + 1
        for (let i = 1; i < page; i++) {
            runFetchFollowings(i)
        }
    }

    async function runFetchFollowers(page) {
        const response = await fetch(`https://api.github.com/users/${username}/followers?page=${page}`, {
            cache: 'no-store'
        })
        const data = await response.json()
        setFollowers([...followers, data])
    }

    async function runFetchFollowings(page) {
        const response = await fetch(`https://api.github.com/users/${username}/following?page=${page}`, {
            cache: 'no-store'
        })
        const data = await response.json()
        setFollowings([...followings, data])
    }


    return (
        <UserContext.Provider value={{
            username,
            setUsername,
            followers,
            setFollowers,
            followings,
            setFollowings,
            fetchFollowers,
            fetchFollowing
        }} >
            {children}
        </UserContext.Provider>
    )
}