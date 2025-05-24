import { TaskFullCard, useTasksStore } from '@/entities/task';
import { Task } from "@/shared/types";
import { router, useLocalSearchParams } from "expo-router";

export default function ViewTaskScreen() {
    const { id } = useLocalSearchParams()
    const {tasks} = useTasksStore()
    const task = tasks.find(task => task.id === id)

    if(!task){
        router.navigate('/tasks')
    }

    return <TaskFullCard task={task as Task}/>
}