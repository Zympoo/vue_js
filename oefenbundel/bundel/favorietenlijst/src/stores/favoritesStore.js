import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
    state: () => ({
        articles: ([
            {
                id: 1,
                title: "Artikel 1",
                beschrijving: "Inhoud van artikel 1",
                favorite: true
            },
            {
                id: 2,
                title: "Artikel 2",
                beschrijving: "Inhoud van artikel 2",
                favorite: false
            },
            {
                id: 3,
                title: "Artikel 3",
                beschrijving: "Inhoud van artikel 3",
                favorite: false
            }
        ]),
        favorites: ([
            {
                id: 1,
                title: "Artikel 1",
                beschrijving: "Inhoud van artikel 1",
                articleId: 1
            }
        ])
    }),
    actions: {
        toggleFavorite(articleId, title, beschrijving){
            const index = this.favorites.findIndex(f => f.articleId === articleId)
        
            if(index !== -1){
                this.favorites.splice(index, 1)
            } else {
                this.favorites.push({
                    id: this.favorites.length + 1,
                    title,
                    beschrijving,
                    articleId
                })
            }

            const article = this.articles.find(a => a.id === articleId)
            if(article) article.favorite = !article.favorite
        }
    }
})