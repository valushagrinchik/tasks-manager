import { DeleteIcon, EditIcon } from "@/shared/components";
import { taskStatusMap } from "@/shared/constants";
import { Task } from "@/shared/types";
import { Card, Text } from "@ui-kitten/components";
import dayjs from 'dayjs';
import { router } from "expo-router";
import { Pressable, View } from "react-native";

export const TaskCard = ({ task, onDeleteBtnClick }: { task: Task, onDeleteBtnClick: () => void }) => {
    return <Card onPress={() => {
        router.push({
            pathname: '/tasks/[id]',
            params: { id: task.id },
        })
    }

    } style={{ height: 'auto' }}>
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
                <Text>
                    {task.title}
                </Text>
                <Text category="c1" appearance='hint'>
                    {dayjs(task.date).format('DD.MM.YYYY HH:mm')}
                </Text>
            </View>
            <Text status={taskStatusMap[task.status]}>
                {task.status}
            </Text>
            <View style={{ height: '100%', flexDirection: 'row', gap: 8, alignItems: 'center' }} >
                <Pressable onPress={(e) => {
                    e.stopPropagation();
                    router.push({
                        pathname: '/tasks/[id]/edit',
                        params: { id: task.id },
                    });
                }}>
                    <EditIcon />
                </Pressable>

                <Pressable onPress={(e) => {
                    e.stopPropagation();
                    onDeleteBtnClick()
                }}>
                    <DeleteIcon />
                </Pressable>

            </View>
        </View>
    </Card>
}