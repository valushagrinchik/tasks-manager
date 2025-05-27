import { SortFields, Task } from "../types";

export const sortTasks = (tasks: Task[], field: SortFields, asc: boolean) => {
    return [...tasks].sort((a, b) => {
        let result = 0;

        if (field === SortFields.CreatedAt) {
            result = a.createdAt?.getTime() - b.createdAt?.getTime();
        } else if (field === SortFields.Status) {
            result = a.status.localeCompare(b.status);
        }

        return asc ? result : -result;
    });
};