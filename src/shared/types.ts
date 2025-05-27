export type Task = {
    id: string
    title: string
    description: string
    date: Date | null
    location: string
    status: TaskStatus
    createdAt: Date
}

export enum SortFields {
    Status = "Status",
    CreatedAt = "CreatedAt"
}

export enum TaskStatus {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed",
    Cancelled = "Cancelled"
}