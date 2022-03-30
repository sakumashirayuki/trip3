import { useState } from 'react';
import { connect } from 'umi';
import { Table } from 'antd';
import { useDispatch, useSelector, Dispatch } from 'umi';

import UseModal from './components/UseModal';

const Login = () => {
  const dispatch = useDispatch<Dispatch>();
  
  const { login } = useSelector((state:any) =>{
    return state;
  })

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [record, setRecord] = useState<any>({});

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // inject the value to the form record
  const handlerRecord = (value:any) => {
      setRecord(value);
  }

  const onSubmit = async(values: any) => {
    const { id } =record;
    dispatch({
      type:'login/asyncEditName',
      payload: {id: id, ...values}
    });
    toggleModal();
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record:any) => (
        <a
          onClick={() => {
            toggleModal();
            handlerRecord(record);
            // record is the whole information of the row
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'create_time',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: 'update_time',
      key: 'update_time',
      dataIndex: 'update_time',
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={login.listData} rowKey="id" />
      <UseModal visible={isModalVisible} closeModal={toggleModal} record={record}/>
    </>
  );
};
const mapStateToProps = (state: any) => {
  const { login } = state;
  return { login };
};

export default connect(mapStateToProps)(Login);
