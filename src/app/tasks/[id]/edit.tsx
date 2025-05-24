import { useTasksStore } from '@/entities/task';
import { EditTaskForm } from '@/features/task';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView } from 'react-native';

export default function EditTaskScreen() {
    const { id } = useLocalSearchParams()
    const router = useRouter()
    const { updateTask } = useTasksStore()

    const onSubmit = (data: any) => {
        updateTask(data)
        router.navigate('/tasks')
    };
    const onCancel = () => {
        router.back()
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            <EditTaskForm id={id as string} onSubmit={onSubmit} onCancel={onCancel} />
        </ScrollView>
    );
}