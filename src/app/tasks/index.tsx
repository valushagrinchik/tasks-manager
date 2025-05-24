import { SortByField } from "@/entities/task/ui/SortByField";
import { TaskList } from "@/features/task";
import { Button, Text } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function TaskListScreen() {
    const router = useRouter()

    const createNewTask = async () => {
        router.navigate('/tasks/new')
    }

    return <View   style={{ flex: 1,gap: 16 , justifyContent: 'space-between' }}>
        <Text category='h1' style={{ textAlign: 'center' }}>Tasks manager</Text>
        <SortByField />
        <TaskList/>
        <Button onPress={createNewTask} size="large">New Task</Button>
    </View>
}