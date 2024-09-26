import { Modal, ModalProps } from "antd";

export type TModalCore = ModalProps & {
  isOpen: boolean,
  isLoading: boolean,
  handleOk?: () => void,
  handleCancel?: () => void,
}

export function ModalCore({ ...props }: TModalCore) {
  return (
    <Modal
      open={props.isOpen}
      onOk={props.handleOk}
      confirmLoading={props.isLoading}
      onCancel={props.handleCancel}
    />
  )
}