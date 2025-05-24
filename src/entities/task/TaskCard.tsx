import { taskStatusMap } from "@/shared/constants";
import { Task } from "@/shared/types";
import { Card, Text } from "@ui-kitten/components";
import dayjs from 'dayjs';
import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { DeleteIcon, EditIcon } from "../../components/icons";

export const TaskCard = ({ task, onDeleteBtnClick }: { task: Task, onDeleteBtnClick: () => void }) => {
    return <Pressable onPress={() => {
        router.push({
            pathname: '/tasks/[id]',
            params: { id: task.id },
        });
    }}><Card style={{ height: 'auto' }}>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text>
                        {task.title}
                    </Text>
                    <Text category="c1" appearance='hint'>
                        {dayjs(task.date).format('DD.MM.YYYY hh:mm')}
                    </Text>
                </View>
                <Text status={taskStatusMap[task.status]}>
                    {task.status}
                </Text>
                <View style={{ height: '100%', flexDirection: 'row', gap: 8, alignItems: 'center' }} >
                    <Pressable onPress={() => {
                        router.push({
                            pathname: '/tasks/[id]/edit',
                            params: { id: task.id },
                        });
                    }}>
                        <EditIcon />
                    </Pressable>

                    <Pressable onPress={onDeleteBtnClick}>
                        <DeleteIcon />
                    </Pressable>

                </View>
            </View>
        </Card></Pressable>
}