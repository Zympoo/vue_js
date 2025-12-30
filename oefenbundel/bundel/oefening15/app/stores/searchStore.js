import { defineStore } from "pinia";

export const useSearchStore = defineStore('search', {
    state: () => ({
        items: [
            { id: 1, naam: "Appel"},
            { id: 2, naam: "Banaan"},
            { id: 3, naam: "Aardbei"},
            { id: 4, naam: "Broccoli"},
            { id: 5, naam: "Wortel"},
            { id: 6, naam: "Komkommer"},
            { id: 7, naam: "Melk"},
            { id: 8, naam: "Kaas"},
            { id: 9, naam: "Yoghurt"},
            { id: 10, naam: "Brood"},
            { id: 11, naam: "Rijst"},
            { id: 12, naam: "Pasta"}
        ],
        filter: '',
        filteredItems: []
    }),
    actions: {
        filterItems(){
            this.filteredItems = this.items.filter(item => item.naam.toLowerCase().includes(this.filter.toLowerCase()));
        }
    }
})