import { create } from 'zustand'
import axios from 'axios'

const API_URL = 'https://680d177bc47cb8074d8f887e.mockapi.io/api/users'

export const useDataStore = create((set,get) => ({
    loading: false,
    error: null,
    data: [],
    loaded: false,

    fetchData: async () => {
        if (get().loaded) return
        set({loading: true, error: null, loaded: false})
        try{
            const response = await axios.get(API_URL)
            // Ordenamos los datos por fecha de creación, más recientes primero
            const sortedData = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            set({data: sortedData, loaded: true, loading: false})
        }catch(error){
            set({error: error, loading: false, loaded: false})
        }finally{
            set({loading: false})
        }
    },

   
    createPeople: async ({payload, onSuccess, onError}) => {
        set({loading: true, error: null})
        try{
            await axios.post(API_URL, payload)
            if (onSuccess) onSuccess()
            const response = await axios.get(API_URL)
            // Ordenamos los datos después de crear uno nuevo también
            const sortedData = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            set({data: sortedData, loaded: true, loading: false})
        }catch(error){
            if (onError) onError()
            set({error: error, loading: false, loaded: false})
        }finally{
            set({loading: false})
        }
    }


}))


export default useDataStore
