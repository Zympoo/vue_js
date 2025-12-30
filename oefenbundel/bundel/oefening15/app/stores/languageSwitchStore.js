import { defineStore } from 'pinia'

export const useLanguageSwitchStore = defineStore('switch', {
    state: () => ({
        enabled: false,
        taal: "nederlands"
    }),
    actions: {
        toggleSwitch() {
            this.enabled = !this.enabled
            this.taal = this.enabled ? 'english' : 'nederlands'
        }
    }
})