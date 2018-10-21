import React from "react";

import { Table, Divider, Tag, Button } from 'antd';


const data = [
  {
    key: '1',
    id: '1',
    email: 'email@.gcom',
    first_name: 'John',
    last_name: 'Brown',
    address: 'New York No. 1 Lake Park',
    status: 1,
  },
  {
    key: '2',
    id: '2',
    email: 'email@.gcom',
    first_name: 'John',
    last_name: 'Brown',
    address: 'New York No. 1 Lake Park',
    status: 0,
  },
];

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [{
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    }, {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    }, {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: is_active => (
        <span>
          {
            is_active ?
              <Tag color="blue">Active</Tag>
              :
              <Tag color="red">In Active</Tag>
          }
        </span>
      ),
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a onClick={this.onClickAction("detail")(record)} href="javascript:;">View</a>
          <Divider type="vertical" />
          <a onClick={this.onClickAction("detail")(record)} href="javascript:;">Edit</a>
          <Divider type="vertical" />
          <a onClick={this.onClickAction("activation")(record)} href="javascript:;">Disable</a>
        </span>
      ),
    }];
  }

  onClickAction = (type) => record => () => {
    switch (type) {
      case "detail": {
        return this.props.history.push(`/admin/user/${record.id}`);
      }
      case "activation": {
        return;
      }
      default: return;
    }
  }

  render() {
    return (
      <div className="Users">
        <h1>Users Table</h1>
        <Button onClick={() => this.props.history.push("/admin/user/add")} type="primary" shape="circle" icon="plus" size="large" />
        <br />
        <br />
        <br />
        <Table
          columns={this.columns}
          dataSource={data}
        />
      </div>
    )
  }
}

export default Users;