import { taskStatusMap } from "@/shared/constants";
import { Task } from "@/shared/types";
import { Button, Card, Text } from "@ui-kitten/components";
import dayjs from 'dayjs';
import { router } from "expo-router";
import { View } from "react-native";

export const TaskFullCard = ({ task }: { task: Task }) => {
    return <Card style={{ height: '100%', width: '100%' }}>
        <View style={{ height: '100%', justifyContent: 'space-between' }}>
            <View style={{ gap: 8 }}>
                <Text>
                    Title: {task.title}
                </Text>
                <Text>
                    Description: {task.description}
                </Text>
                <Text>
                    Date: {dayjs(task.date).format('DD.MM.YYYY HH:mm')}
                </Text>
                <Text>
                    Status:  <Text status={taskStatusMap[task.status]}>
                        {task.status}
                    </Text>
                </Text>
                <Text>
                    Location: {task.location}
                </Text>
                <Text>
                    Created at:  {dayjs(task.createdAt).format('DD.MM.YYYY HH:mm')}
                </Text>
            </View>

            <Button
                size="large"
                onPress={() => {
                    router.back()
                }} appearance="outline">
                Ok
            </Button>

        </View>
    </Card>
}
