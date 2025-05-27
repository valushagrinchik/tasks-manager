import { useTasksStore } from '@/entities/task';
import { EditTaskForm } from '@/features/task';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export default function EditTaskScreen() {
    const { id } = useLocalSearchParams()
    const router = useRouter()
    const { updateTask } = useTasksStore()

    const onSubmit = (data: any) => {
        updateTask(data)
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
                <EditTaskForm id={id as string} onSubmit={onSubmit} onCancel={onCancel} />

            </ScrollView>
        </KeyboardAvoidingView>
    );
}