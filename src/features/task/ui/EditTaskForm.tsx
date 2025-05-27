import { useTasksStore } from '@/entities/task';
import { Task, TaskStatus } from '@/shared/types';
import { Button, Datepicker, IndexPath, Input, Select, SelectItem, Text } from "@ui-kitten/components";
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { CalendarIcon } from '../../../entities/icons';

type EditTaskFormProps = {
    id?: string,
    onCancel: () => void,
    onSubmit: (data: any) => void
}
export const EditTaskForm = ({ id, onSubmit, onCancel }: EditTaskFormProps) => {
    const editMode = !!id

    const { tasks } = useTasksStore()

    const task: Omit<Task, 'id' | 'createdAt'> = id && tasks.find(task => task.id === id) || {
        title: '',
        description: '',
        date: null,
        location: '',
        status: TaskStatus.Pending,
    }

    const { control, handleSubmit, formState: { errors }, reset } = useForm<Task & { statusIndex: IndexPath }>({
        defaultValues: {
            ...task,
            statusIndex: new IndexPath(Object.values(TaskStatus).findIndex(status => status === task?.status))
        }
    });

    const _onCancel = () => {
        onCancel()
        reset(); 
    }
    const _onSubmit = (data: Task & { statusIndex: IndexPath }) => {
        onSubmit({ ...data, status: Object.values(TaskStatus)[data.statusIndex.row] })
        reset(); 
    }

    return <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View >
            <Text category='h1' style={{ textAlign: 'center' }}>{id ? "Edit Task" : "New Task"}</Text>
            <View style={{ marginBottom: 10 }}>
                <Text appearance={editMode ? 'hint' : undefined}>Title:</Text>
                <Controller
                    control={control}
                    name="title"

                    rules={{ required: 'Title is required' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            disabled={editMode}
                        />
                    )}
                />
                {errors.title && <Text style={{ color: 'red' }}>{errors.title.message}</Text>}
            </View>

            <View style={{ marginBottom: 10 }}>
                <Text appearance={editMode ? 'hint' : undefined}>Description:</Text>
                <Controller
                    control={control}
                    name="description"
                    rules={{ required: 'Description is required' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            multiline
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            disabled={editMode}
                            textStyle={{
                                minHeight: 64,
                            }}
                        />
                    )}
                />
                {errors.description && <Text style={{ color: 'red' }}>{errors.description.message}</Text>}
            </View>

            {editMode && <View style={{ marginBottom: 10 }}>
                <Text>Status:</Text>
                <Controller
                    control={control}
                    name="statusIndex"
                    rules={{ required: 'Status is required' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Select
                            selectedIndex={value}
                            onSelect={(index) => onChange(index)}
                            value={Object.values(TaskStatus)[value?.row || 0]}
                        >
                            {Object.values(TaskStatus).map(status =>
                                (<SelectItem key={status} title={status} />)
                            )}
                        </Select>
                    )}
                />
                {errors.statusIndex && <Text style={{ color: 'red' }}>{errors.statusIndex.message}</Text>}
            </View>}

            <View style={{ marginBottom: 10 }}>
                <Text appearance={editMode ? 'hint' : undefined}>Date:</Text>
                <Controller
                    control={control}
                    name="date"
                    rules={{ required: 'Date is required' }}
                    render={({ field: { value, onChange, onBlur } }) => (
                        <Datepicker
                            accessoryRight={CalendarIcon}
                            onBlur={onBlur}
                            onSelect={onChange}
                            min={new Date()}
                            date={value}
                            disabled={editMode}
                        />
                    )}
                />
                {errors.date && <Text style={{ color: 'red' }}>{errors.date.message}</Text>}
            </View>

            <View style={{ marginBottom: 10 }}>
                <Text appearance={editMode ? 'hint' : undefined}>Location:</Text>
                <Controller
                    control={control}
                    name="location"
                    rules={{ required: 'Location is required' }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            disabled={editMode}
                        />
                    )}
                />
                {errors.location && <Text style={{ color: 'red' }}>{errors.location.message}</Text>}
            </View>
        </View>
        <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'space-between' }}>
            <Button style={{ flex: 1 }} size="large" onPress={_onCancel} appearance="outline">Cancel</Button>
            <Button style={{ flex: 1 }} size="large" onPress={handleSubmit(_onSubmit)}>Submit</Button>
        </View>
    </View>
}

