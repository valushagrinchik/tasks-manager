import { Icon, IconElement } from "@ui-kitten/components";

export const EditIcon = (props: any): IconElement => (
    <Icon
        width={24} 
        height={24}
        {...props}
        name='edit'
    />
);

export const DeleteIcon = (props: any): IconElement => (
    <Icon
        width={24} 
        height={24}
        {...props}
        name='trash-2-outline'
    />
);

export const CalendarIcon = (props: any): IconElement => (
    <Icon
        width={24} 
        height={24}
        {...props}
        name='calendar'
    />
);


    export const SortIcon = ({sortAsc, ...props}: any): IconElement => (
        <Icon  
            width={24} 
            height={24} 
             {...props}
            name={sortAsc ?  'arrow-downward-outline' : 'arrow-upward-outline' }
        />
    );
