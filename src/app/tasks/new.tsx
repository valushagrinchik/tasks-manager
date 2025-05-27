import { useTasksStore } from '@/entities/task';
import { EditTaskForm } from '@/features/task';
import { useRouter } from 'expo-router';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

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
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', padding: 16 }}>
                <EditTaskForm onSubmit={onSubmit} onCancel={onCancel} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
