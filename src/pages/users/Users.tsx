import { connect } from 'umi';
import { Table, Tag, Space } from 'antd';

const Users = (props: any) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: string[]) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={props.users.listData}/>;
};

const mapStateToProps = (state: any) => {
  const { users } = state;
  return { users };
  // transmit the data of state to the component
};

export default connect(mapStateToProps)(Users);
