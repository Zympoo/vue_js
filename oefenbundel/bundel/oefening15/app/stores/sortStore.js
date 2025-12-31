import { defineStore } from "pinia";

export const useSortStore = defineStore('sort', {
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
        sort: '',
        sortedItems: []
    }),
    actions: {
        sortItems(){
            if (this.sort === 'alfa') {
                this.sortedItems = this.items.slice().sort((a, b) => a.naam.localeCompare(b.naam));
            } else if (this.sort === 'reverse_alfa') {
                this.sortedItems = this.items.slice().sort((a, b) => b.naam.localeCompare(a.naam));
            } else {
                this.sortedItems = this.items;
            }
        }
    }
})