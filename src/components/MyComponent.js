import React from 'react'
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor'

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "thinh", age: 20 }, 
            { id: 2, name: "Thu", age: 16}
        ]
    }
    handleAddUser = (userObject) => {
        this.setState({
            listUsers: [...this.state.listUsers, userObject]

        })
    }
    handleDeleteUser = (userObject) => {
        let listUsersClone = this.state.listUsers; 
        listUsersClone = listUsersClone.filter((item) => item.id !== userObject); 
        this.setState({
            listUsers: listUsersClone
        })
    }
    // JSX
    render() {
        return (
            <div>
                <AddUserInfor
                handleAddUser={this.handleAddUser}
                />
                <DisplayInfor listUsers={this.state.listUsers}
                handleDeleteUser = {this.handleDeleteUser}
                />
            </div>
        );
    }
}

export default MyComponent;