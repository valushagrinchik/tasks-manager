import { TaskFullCard, useTasksStore } from '@/entities/tasks';
import { Task } from "@/shared/types";
import { router, useLocalSearchParams } from "expo-router";

export default function ViewTaskScreen() {
    const { id } = useLocalSearchParams()
    const {tasks} = useTasksStore()
    const task = tasks.find(task => task.id === id)

    if(!task){
        router.back()
    }

    return <TaskFullCard task={task as Task}/>
}