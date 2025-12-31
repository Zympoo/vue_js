import { defineStore } from "pinia";

export const useNotificationsStore = defineStore("notifications", {
    state: () => ({
        notifications: ([])
    }),
    actions: {
        addNotification(message){
            const id = this.notifications.length + 1

            this.notifications.push({
                id,
                msg: message
            })

            setTimeout(() => this.closeNotification(id), 5000)
        },
        closeNotification(id){
            const index = this.notifications.findIndex(n => n.id === id)

            this.notifications.splice(index, 1)
        }
    }
})