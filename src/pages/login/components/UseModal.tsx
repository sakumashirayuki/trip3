import { Modal, Form, Input } from 'antd';

interface UseModalProps {
  closeModal: () => void;
  visible: boolean;
  record: any;
}

const UseModal = (props: UseModalProps) => {
  const { closeModal, visible, record } = props;

  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onCancel={closeModal}
      onOk={closeModal}
    >
      <Form initialValues={record}>
        <Form.Item
          label="name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default UseModal;
