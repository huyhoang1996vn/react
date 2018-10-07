import React from "react";

import { Table, Divider, Tag, Button } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">View</a>
      <Divider type="vertical" />
      <a href="javascript:;">Edit</a>
      <Divider type="vertical" />
      <a href="javascript:;">Disable</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['teacher'],
}];

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Users">
                <h1>Users Table</h1>
                <Button onClick={() => this.props.history.push("/admin/user/add")} type="primary" shape="circle" icon="plus" size="large" />
                <br/>
                <br/>
                <br/>
                <Table 
                    columns={columns}
                    dataSource={data}
                />
            </div>
        )
    }
}

export default Users;