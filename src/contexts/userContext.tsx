import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {

    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState({})

    const [followers, setFollowers] = useState([])
    const [followings, setFollowings] = useState([])


    const allFollowers = []
    const allFollowing = []

    async function fetchUserProfileData() {
        // const response = await fetch(`https://api.github.com/users/${username}`, {
        //     cache: 'no-store'
        // })
        // const data = await response.json()
        // setUserData(data)

        // fetchFollowers(data.followers || 1)
        // fetchFollowing(data.following || 1)


        await fetchFollowers(230)
        await fetchFollowing(230)


        console.log(allFollowers)
        console.log(allFollowing)

        setFollowers([...allFollowers])
        setFollowings([...allFollowing])

    }

    async function fetchFollowers(numberOfFollowers: number) {

        let page = numberOfFollowers / 30 + 1

        console.log(page)

        for (let i = 1; i < page; i++) {
            // runThisFunc(i)
            await runFetchFollowersForEachPage(i)
        }
    }

    async function fetchFollowing(numberOfFollowings: number) {

        let page = numberOfFollowings / 30 + 1

        for (let i = 1; i < page; i++) {
            // runThisFunc(i)
            await runFetchFollowingsForEachPage(i)
        }
    }

    // async function runThisFunc(page: number) {
    //     console.log('run at page => ', page)
    // }

    async function runFetchFollowersForEachPage(page: number) {
        const response = await fetch(`https://api.github.com/users/${username}/followers?page=${page}`, {
            cache: 'no-store'
        })
        const data = await response.json()
        // setFollowers(data)
        // setFollowers([...followers, data])
        // console.log(followers)

        // let data = { name: page + ' - followers' }

        allFollowers.push(await data)
    }

    async function runFetchFollowingsForEachPage(page: number) {
        const response = await fetch(`https://api.github.com/users/${username}/following?page=${page}`, {
            cache: 'no-store'
        })
        const data = await response.json()
        // setFollowings(data)
        // setFollowings([...followings, data])
        // console.log(followings)

        // let data = { name: page + ' - followings' }

        allFollowing.push(await data)
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