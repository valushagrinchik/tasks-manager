import { useTasksStore } from "@/shared/stores/useTasksStore";
import { Task } from "@/shared/types";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { ConfirmationModal } from "../../components/ConfirmationModal";
import { TaskCard } from "./TaskCard";

export const TaskList = () => {
    const router = useRouter()

    const { getTasks, deleteTask, sortBy, tasks: storedTasks } = useTasksStore()

    const [tasks, setTasks] = useState<Task[]>(getTasks())
    const [currentTask, setCurrentTask] = useState<Task | null>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setTasks(getTasks())
    },[sortBy, storedTasks])

    const handleDeleteTask = () => {
        if (!currentTask) {
            return
        }
        deleteTask(currentTask.id)
        setCurrentTask(null)
        setVisible(false)
        router.navigate('/tasks')
    }

    const openConfirmationModal = (task: Task) => {
        setCurrentTask(task)
        setVisible(true)
    }


    return <ScrollView >
        <View style={{ gap: 4 }}>
            {tasks.map(task => (
                <TaskCard task={task} key={task.id} onDeleteBtnClick={() => openConfirmationModal(task)} />
            ))}
            <ConfirmationModal
                question="Please confirm to delete"
                open={visible}
                onClose={() => {
                    setCurrentTask(null)
                    setVisible(false)
                }}
                onConfirm={handleDeleteTask}
            />
        </View>
    </ScrollView>
}


