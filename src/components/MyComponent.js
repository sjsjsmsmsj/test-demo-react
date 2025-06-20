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
    // JSX
    render() {
        return (
            <div>
                <AddUserInfor
                handleAddUser={this.handleAddUser}
                />
                <DisplayInfor listUsers={ this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;