import { defineStore } from "pinia";
import { useNotificationsStore } from "~/stores/notificationStore";

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        username: "",
        email: "",
        text_size: "small",
        emailnotifications: false,
        pushnotifications: false
    }),
    actions: {
        submitChanges(username, email, text_size, emailnotifications, pushnotifications) {
            const notificationsStore = useNotificationsStore()

            if (!username || !email) {
                notificationsStore.addNotification('Vul alstublieft alle verplichte velden in.')
                return
            }

            this.username = username
            this.email = email
            this.text_size = text_size
            this.emailnotifications = emailnotifications
            this.pushnotifications = pushnotifications

            notificationsStore.addNotification('Instellingen succesvol opgeslagen!')
        }
    }
})