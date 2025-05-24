import { TaskStatus } from "./types";

export const taskStatusMap = {
    [TaskStatus.Pending]: "basic",
    [TaskStatus.InProgress]: "info",
    [TaskStatus.Completed]: "primary",
    [TaskStatus.Cancelled]: "danger"
}

export enum SortFields {
    Status = "Status",
    CreatedAt = "CreatedAt"
}