import { Text } from "@ui-kitten/components";
import { useLocalSearchParams } from "expo-router";

export default function ViewTaskScreen() {
    const { id } = useLocalSearchParams()

    return <Text>{id}</Text>
}