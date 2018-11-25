import React from "react";
import { connect } from "react-redux";
import { Table, Divider, Tag, Button } from 'antd';

// actions 
import {
  get as getUserBase
} from "actions/owners/storers";

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
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
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
        return this.props.history.push(`/owners/storer/${record.id}`);
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
        <h1>Storers</h1>
        <Button onClick={() => this.props.history.push("/owners/storer/add")} type="primary" shape="circle" icon="plus" size="large" />
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
  allUsers: state.owners.storers.all,
}))(Users);