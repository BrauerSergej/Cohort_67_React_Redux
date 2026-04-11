// import { CheckCircle2 } from "lucide-react"
import {
  Overlay,
  ModalCard,
  IconWrapper,
  Title,
  Text,
  CloseButton,
} from "./styles"

interface SuccessModalProps {
  onClose: () => void
}

function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <Overlay>
      <ModalCard>
        <IconWrapper>
          {/* <CheckCircle2 size={52} /> */}
        </IconWrapper>

        <Title>Успешно</Title>
        <Text>Данные успешно сохранены</Text>

        <CloseButton onClick={onClose}>Закрыть</CloseButton>
      </ModalCard>
    </Overlay>
  )
}

export default SuccessModal
