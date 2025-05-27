import { mockedData } from '@/shared/data';
import { SortFields, Task } from '@/shared/types';
import { sortTasks } from '@/shared/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';


type TasksStore = {
    sortBy: {
        field: SortFields,
        asc: boolean
    },
    tasks: Task[],
    setSortBy: (sort: {
        field: SortFields,
        asc: boolean
    }) => void,
    getTasks: () => Task[],
    addTask: (task: Task) => void,
    deleteTask: (id: string) => void,
    updateTask: (task: Task) => void,
    clearTasks: () => void
}

export const useTasksStore = create<TasksStore>()(
    persist(
        (set, get) => ({
            sortBy: {
                field: SortFields.Status,
                asc: true
            },
            tasks: mockedData,
            setSortBy: (sortBy: {
                field: SortFields,
                asc: boolean
            }) => set((state) => {
                return { sortBy: { ...state.sortBy, ...sortBy } }
            }),
            getTasks: () => sortTasks(get().tasks, get().sortBy.field, get().sortBy.asc),
            addTask: (task: Omit<Task, 'id'>) => set((state) => {
                return { tasks: [...state.tasks, { ...task, id: uuidv4(), createdAt: new Date() }] }
            }),
            updateTask: (task: Task) => set((state) => {
                return { tasks: state.tasks.map(t => t.id === task.id ? task : t) }
            }),
            deleteTask: (id: string) => set((state) => {
                return { tasks: state.tasks.filter(task => task.id !== id) }
            }),
            clearTasks: () => set(() => {
                return { tasks: [] }
            }),
        }),
        {
            name: 'tasksStore',
            storage: createJSONStorage(() => AsyncStorage),
            merge: (persistedState: any, currentState) => ({
                ...currentState,
                ...persistedState,
                tasks: persistedState.tasks?.map((task: any) => ({
                    ...task,
                    date: new Date(task.date),
                    createdAt: new Date(task.createdAt),
                })) || [],
            }),
        },
    ),
)



