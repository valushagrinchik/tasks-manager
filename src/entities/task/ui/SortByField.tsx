import { SortFields } from "@/shared/constants";
import { Button, IndexPath, Select, SelectItem } from "@ui-kitten/components";
import { View } from "react-native";
import { SortIcon } from "../../icons";
import { useTasksStore } from '../store/useTasksStore';

export const SortByField = () => {
    const sortFields = Object.values(SortFields)
    const {sortBy, setSortBy} = useTasksStore()

    const toggleSortDirection = () => {
        setSortBy({...sortBy, asc: !sortBy.asc});
    };

    const handleSortFieldChange = (index: IndexPath) => {
          setSortBy({...sortBy, field: sortFields[index.row]});
    };

    return <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
        <Select
            style={{ flex: 1 }}
            selectedIndex={new IndexPath(sortFields.findIndex(field => field === sortBy.field))}
            onSelect={index => handleSortFieldChange(index as IndexPath)}
            value={sortBy.field}
            label="Sort by"
        >
            {sortFields.map((field, i) =>
                (<SelectItem key={i} title={field} />)
            )}
        </Select>
        <Button style={{ height: 36, width: 36 }} accessoryLeft={<SortIcon sortAsc={sortBy.asc} width="18" height="18" />} onPress={toggleSortDirection} />
    </View>
}