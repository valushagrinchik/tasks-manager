import { Button, Card, Modal, Text } from "@ui-kitten/components"
import { View } from "react-native"
type ConfirmationModalProps = {
    question: string,
    open: boolean,
    onClose: () => void
    onConfirm: () => void
}
export const ConfirmationModal = ({ question, open, onClose, onConfirm }: ConfirmationModalProps) => {
    return <Modal
        visible={open}
        backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onBackdropPress={onClose}
    >
        <Card disabled={true}>
            <Text status='info' style={{ marginBottom: 10 }}>
                {question}
            </Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button onPress={onClose} appearance="outline"  status='basic'>
                    Cancel
                </Button>
                <Button onPress={onConfirm}>
                    OK
                </Button>
            </View>

        </Card>
    </Modal>
} 