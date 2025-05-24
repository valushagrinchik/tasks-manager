import { SortByField } from "@/components/SortByField";
import { TaskList } from "@/entities/task/TaskList";
import { Button } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function TaskListScreen() {
    const router = useRouter()

    const createNewTask = async () => {
        router.navigate('/tasks/new')
    }

    return <View   style={{ flex: 1,gap: 4 , justifyContent: 'space-between' }}>
        <SortByField />
        <TaskList/>
        <Button onPress={createNewTask} size="large">New Task</Button>
    </View>
}