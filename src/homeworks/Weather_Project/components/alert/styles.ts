import styled from "@emotion/styled"

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

export const ModalCard = styled.div`
  width: 420px;
  min-height: 240px;
  padding: 32px 24px;
  border-radius: 24px;
  background: linear-gradient(
    135deg,
    rgba(47, 72, 111, 0.95),
    rgba(11, 27, 52, 0.95)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 28px;
  color: white;
`

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
  color: #dbe7ff;
  text-align: center;
`

export const CloseButton = styled.button`
  width: 160px;
  height: 48px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 18px;
`
