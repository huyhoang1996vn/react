import React from "react";
import { connect } from "react-redux";
import { Table, Divider, Tag, Button, Popconfirm } from 'antd';

import { GROUP_USERS } from "constants/index";

// actions 
import {
  get as getUserBase,
  deleteOne
} from "actions/admin/users";

// components
import { SearchInput } from "components/common"


class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "all",
      allUsers: [],
    }

    this.columns = [
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'first_name',
      },
      {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'last_name',
      },
      {
        title: 'Group',
        dataIndex: 'groupUser',
        key: 'groupUser',
        render: text => GROUP_USERS[text]
      },

      {
        title: 'Status',
        key: 'is_active',
        dataIndex: 'is_active',
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
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a onClick={this.onClickAction("detail")(record)} href="javascript:;">View</a>
            <Divider type="vertical" />
            <a onClick={this.onClickAction("detail")(record)} href="javascript:;">Edit</a>
            <Divider type="vertical" />
            <Popconfirm title="Are you sure delete this record?" onConfirm={this.onClickAction("delete")(record)} okText="Yes" cancelText="No">
              <a href="javascript:;">Delete</a>
            </Popconfirm>
            {/* <a onClick={this.onClickAction("delete")(record)} href="javascript:;">Delete</a> */}
          </span>
        ),
      }
    ];
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.allUsers.length >= 0) {
      this.setState({
        allUsers: nextProps.allUsers
      })
    }
  }

  componentWillMount() {
    this.props.dispatch(getUserBase());
  }

  onClickAction = (type) => record => () => {
    switch (type) {
      case "detail": {
        return this.props.history.push(`/admin/user/${record.id}`);
      }
      case "activation": {
        return;
      }
      case "delete": {
        return this.props.dispatch(deleteOne(record.id));
      }
      default: return;
    }
  }

  filterTable = group_id => () => {
    this.setState({
      filter: group_id,
      allUsers: this.props.allUsers.filter(user => group_id == "all" ? true : user.groupUser == group_id)
    })
  }

  render() {
    return (
      <div className="Users">
        <h1>Users Table</h1>
        <Button onClick={() => this.props.history.push("/admin/user/add")} type="primary" shape="circle" icon="plus" size="large" />
        <div className="text-right">

          {
            Object.entries({
              "all": "All",
              ...GROUP_USERS,
            }).map(([id, name]) => (
              <Tag
                key={id}
                color={this.state.filter == id ? "green" : "grey"}
                onClick={this.filterTable(id)}
              >
                {name}
              </Tag>
            ))
          }
        </div>
        <br />
        <br />
        <br />
        <SearchInput
          setState={this.setState.bind(this)}
          meta={{
            all: this.props.allUsers,
            key: 'allUsers'
          }}
        />
        <Table
          columns={this.columns}
          dataSource={this.state.allUsers}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  allUsers: state.admin.users.all,
}))(Users);