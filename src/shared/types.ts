export enum TaskStatus {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed",
    Cancelled = "Cancelled"
}

export type Task = {
    id: string
    title: string
    description: string
    date: Date | null
    location: string
    status: TaskStatus
    createdAt: Date
}
