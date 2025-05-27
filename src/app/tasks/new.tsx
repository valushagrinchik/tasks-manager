import { useTasksStore } from '@/entities/tasks';
import { EditTaskForm } from '@/features/tasks';
import { useRouter } from 'expo-router';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export default function NewTaskScreen() {
    const router = useRouter()
    const { addTask } = useTasksStore()

    const onSubmit = (data: any) => {
        addTask(data)
        router.back()
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
