import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {

    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState({})

    const [followers, setFollowers] = useState([])
    const [followings, setFollowings] = useState([])

    const [notReciprocate, setNotReciprocate] = useState([])
    const [iNotReciprocate, setINotReciprocate] = useState([])

    let allFollowers = []
    let allFollowings = []

    async function fetchUserProfileData() {

        // setFollowers([])
        // setFollowings([])

        setINotReciprocate([])
        setNotReciprocate([])

        const response = await fetch(`https://api.github.com/users/${username}`, {
            cache: 'no-store'
        })
        const data = await response.json()
        setUserData(data)

        // await fetchFollowers(30)
        // await fetchFollowing(30)
        await fetchFollowers(data.followers || 30)
        await fetchFollowing(data.following || 30)

        setFollowers(allFollowers)
        setFollowings(allFollowings)

        // await getNotReciprocate()
        // await getINotReciprocate()

        setINotReciprocate(await compareLists(followers, followings))
        setNotReciprocate(await compareLists(followings, followers))

        console.log('iNotReciprocate: ', iNotReciprocate)
        console.log('notReciprocate: ', notReciprocate)

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
        // const response = await fetch(`/db11.json`, {
        const response = await fetch(`https://api.github.com/users/${username}/followers?page=${page}`, {
            cache: 'no-store'
        })
        const data = await response.json()
        allFollowers.push(...data)
    }

    async function runFetchFollowingsForEachPage(page: number) {
        // const response = await fetch(`/db21.json`, {
        const response = await fetch(`https://api.github.com/users/${username}/following?page=${page}`, {
            cache: 'no-store'
        })
        const data = await response.json()
        allFollowings.push(...data)
    }

    async function compareLists(followers: any, followings: any) {

        const uniqueItems = await followers.filter(follower => {
            return !followings.some(following => follower.id === following.id)
        });

        return (await uniqueItems)
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
            userData,
            iNotReciprocate,
            notReciprocate
        }} >
            {children}
        </UserContext.Provider>
    )
}