import React from "react";
import { connect } from "react-redux";
import { Table, Divider, Tag, Button } from 'antd';

import { GROUP_USERS } from "constants/index";

// actions 
import {
  get as getUserBase
} from "actions/admin/users";

const data = [
  {
    "id": 41,
    "groupUser": 1,
    "email": "tired@gmail.com",
    "is_superuser": false,
    "last_login": null,
    "first_name": "hai",
    "last_name": "z",
    "date_joined": "10:30:12 - 05/11/2018",
    "is_active": true,
    "avatar": null,
    "is_staff": false,
    "groups": [],
    "user_permissions": []
  },
  {
    "id": 42,
    "groupUser": 2,
    "email": "tired1@gmail.com",
    "is_superuser": false,
    "last_login": null,
    "first_name": "abc",
    "last_name": "zwd",
    "date_joined": "10:30:12 - 05/11/2018",
    "is_active": true,
    "avatar": null,
    "is_staff": false,
    "groups": [],
    "user_permissions": []
  },
];

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
            {/* <Divider type="vertical" /> */}
            {/* <a onClick={this.onClickAction("activation")(record)} href="javascript:;">Disable</a> */}
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