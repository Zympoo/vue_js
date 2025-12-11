import { defineStore } from 'pinia'
function createInitialColumns() {
    return [
        {
            id: 'todo',
            title: 'To do',
            tasks: [
                {
                    id: 1,
                    title: 'Nieuwe cursusstructuur uitwerken',
                    description: 'Modules herzien en oefeningen toevoegen.'
                },
                {
                    id: 2,
                    title: 'Design voor dashboard maken',
                    description: 'Wireframes uitwerken en kleurenpalet bepalen.'
                }
            ]
        },
        {
            id: 'doing',
            title: 'Doing',
            tasks: [
                {
                    id: 3,
                    title: 'API koppeling testen',
                    description: 'Foutafhandeling en timeouts controleren.'
                }
            ]
        },
        {
            id: 'done',
            title: 'Done',
            tasks: [
                {
                    id: 4,
                    title: 'Vite project opgezet',
                    description: 'Basisconfiguratie met Vue en Tailwind.'
                },
                {
                    id: 5,
                    title: 'Component structuur bepaald',
                    description: 'BoardColumn en TaskCard gedefinieerd.'
                },
                {
                    id: 6,
                    title: 'Tailwind integratie getest',
                    description: 'Layout gecontroleerd in Nuxt.'
                }
            ]
        }
    ]
}
export const useBoardStore = defineStore('board', {
    state: () => ({
        columns: createInitialColumns(),
        nextTaskId: 7
    }),
    actions: {
        resetBoard() {
            this.columns = createInitialColumns()
            this.nextTaskId = 7
        },
        addTaskToColumn(payload) {
            const { columnId, title, description } = payload
            const column = this.columns.find(col => col.id === columnId)
            if (!column) {
                return
            }
            column.tasks.push({
                id: this.nextTaskId++,
                title,
                description
            })
        },
        moveTask(payload) {
            const { taskId, fromColumnId } = payload

            const fromColumnIndex = this.columns.findIndex(col => col.id ===
                fromColumnId)
            if (fromColumnIndex === -1) {
                return
            }

            const fromColumn = this.columns[fromColumnIndex]
            const taskIndex = fromColumn.tasks.findIndex(task => task.id === taskId)
            if (taskIndex === -1) {
                return
            }

            const task = fromColumn.tasks.splice(taskIndex, 1)[0]
            const toColumnIndex = fromColumnIndex + 1
            if (toColumnIndex >= this.columns.length) {
            // kan niet verder, zet taak terug
                fromColumn.tasks.splice(taskIndex, 0, task)
                return
            }

            const toColumn = this.columns[toColumnIndex]
            toColumn.tasks.push(task)
        },
        moveTaskBack(payload) {
            const { taskId, fromColumnId } = payload

            const fromColumnIndex = this.columns.findIndex(col => col.id === fromColumnId)
            if (fromColumnIndex === -1) {
                return
            }

            const fromColumn = this.columns[fromColumnIndex]
            const taskIndex = fromColumn.tasks.findIndex(task => task.id ===
                taskId)
            if (taskIndex === -1) {
                return
            }

            const task = fromColumn.tasks.splice(taskIndex, 1)[0]
            const toColumnIndex = fromColumnIndex - 1
            if (toColumnIndex < 0) {
                fromColumn.tasks.splice(taskIndex, 0, task)
                return
            }

            const toColumn = this.columns[toColumnIndex]
            toColumn.tasks.push(task)
        },
        deleteTask(payload) {
            const { taskId, fromColumnId } = payload
            const column = this.columns.find(col => col.id === fromColumnId)
            if (!column) {
                return
            }
            const taskIndex = column.tasks.findIndex(task => task.id === taskId)
            if (taskIndex === -1) {
                return
            }
            column.tasks.splice(taskIndex, 1)
        }
    }
})