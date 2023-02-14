import create from 'zustand'
import { persist } from 'zustand/middleware'
import axios from 'axios'

import { BASE_URL } from '../utils'

// set function is provied by zustand
const authStore = (set: any) => ({
    allUsers: null,
    userProfile: null,
    addUser: (user: any) => set({ userProfile: user}),
    removeUser: () => set({userProfile: null}),

    // FETCH ALL USERS
    fetchAllUsers: async () => {
    const response = await axios.get(`${BASE_URL}/api/users`)
    set({ allUsers: response.data })
}

})


const useAuthStore = create(
    persist(authStore, {
        name: 'auth'
    })
)

export default useAuthStore
// call useAuthStore as a hook from inside of any components