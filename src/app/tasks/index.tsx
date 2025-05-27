import { TasksList, TasksSort } from "@/features/tasks";
import { Button, Text } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function TaskListScreen() {
    const router = useRouter()

    const createNewTask = async () => {
        router.push('/tasks/new')
    }

    return <View   style={{ flex: 1,gap: 16 , justifyContent: 'space-between' }}>
        <Text category='h1' style={{ textAlign: 'center' }}>Tasks manager</Text>
        <TasksSort />
        <TasksList/>
        <Button onPress={createNewTask} size="large">New Task</Button>
    </View>
}