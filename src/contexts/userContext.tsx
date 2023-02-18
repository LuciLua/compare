import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {

    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState({})

    const [followers, setFollowers] = useState([])
    const [followings, setFollowings] = useState([])

    async function fetchUserProfileData() {
        const response = await fetch(`https://api.github.com/users/${username}`, {
            cache: 'no-store'
        })
        const data = await response.json()
        setUserData(data)

        fetchFollowers(data.followers || 1)
        fetchFollowing(data.following || 1)
    }

    async function fetchFollowers(numberOfFollowers: number) {
        let page = numberOfFollowers / 30 + 1
        for (let i = 1; i < page; i++) {
            await runFetchFollowersForEachPage(i)
        }
    }

    async function fetchFollowing(numberOfFollowings: number) {

        let page = numberOfFollowings / 30 + 1

        for (let i = 1; i < page; i++) {
            await runFetchFollowingsForEachPage(i)
        }
    }

    async function runFetchFollowersForEachPage(page: number) {
        const response = await fetch(`https://api.github.com/users/${username}/followers?page=${page}`, {
            cache: 'no-store'
        })
        const data = await response.json()
        // setFollowers([...data])
        setFollowers(prev => { return [[...prev], [...data]] })

    }

    async function runFetchFollowingsForEachPage(page: number) {
        const response = await fetch(`https://api.github.com/users/${username}/following?page=${page}`, {
            cache: 'no-store'
        })
        const data = await response.json()
        setFollowings(prev => [[...prev], [...data]])
    }


    return (
        <UserContext.Provider value={{
            username,
            setUsername,
            followers,
            setFollowers,
            followings,
            setFollowings,
            fetchUserProfileData,
            userData
        }} >
            {children}
        </UserContext.Provider>
    )
}