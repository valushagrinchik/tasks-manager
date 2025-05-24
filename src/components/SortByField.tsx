import { SortFields } from "@/shared/constants";
import { useTasksStore } from "@/shared/stores/useTasksStore";
import { Button, IndexPath, Select, SelectItem, Text } from "@ui-kitten/components";
import { View } from "react-native";
import { SortIcon } from "./icons";

export const SortByField = () => {
    const sortFields = Object.values(SortFields)
    const {sortBy, setSortBy} = useTasksStore()

    const toggleSortDirection = () => {
        setSortBy({...sortBy, asc: !sortBy.asc});
    };

    const handleSortFieldChange = (index: IndexPath) => {
          setSortBy({...sortBy, field: sortFields[index.row]});
    };
    
    return <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, height: 40 }}>
        <Text category="label">Sort by:</Text>
        <Select
            style={{ flex: 1 }}
            selectedIndex={new IndexPath(sortFields.findIndex(field => field === sortBy.field))}
            onSelect={index => handleSortFieldChange(index as IndexPath)}
            value={sortBy.field}
        >
            {sortFields.map((field, i) =>
                (<SelectItem key={i} title={field} />)
            )}
        </Select>
        <Button style={{ height: '100%' }} accessoryLeft={<SortIcon sortAsc={sortBy.asc} width="18" height="18" />} onPress={toggleSortDirection} />
    </View>
}