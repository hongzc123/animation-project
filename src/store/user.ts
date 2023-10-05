import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
    state: () => ({
        count: 0,
        isLogin: false
    }),
    getters: {},
    actions: {
        add() {
            this.count++
        }
    }
})

export default useUserStore