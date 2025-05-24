import { useTasksStore } from '@/entities/task';
import { EditTaskForm } from '@/features/task';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';

export default function NewTaskScreen() {
    const router = useRouter()
    const { addTask } = useTasksStore()
    
    const onSubmit = (data: any) => {
        addTask(data)
        router.navigate('/tasks')
    };

    const onCancel = () => {
        router.back()
    }
    
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            <EditTaskForm onSubmit={onSubmit} onCancel={onCancel}/>
        </ScrollView>
    );
}
