import React, { useState } from 'react'
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor'

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "thinh", age: 20 }, 
//             { id: 2, name: "Thu", age: 16}
//         ]
//     }
//     handleAddUser = (userObject) => {
//         this.setState({
//             listUsers: [...this.state.listUsers, userObject]

//         })
//     }
//     handleDeleteUser = (userObject) => {
//         let listUsersClone = this.state.listUsers; 
//         listUsersClone = listUsersClone.filter((item) => item.id !== userObject); 
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
//     // JSX
//     render() {
//         return (
//             <div>
                // <AddUserInfor
                // handleAddUser={this.handleAddUser}
                // />
                // <DisplayInfor listUsers={this.state.listUsers}
                // handleDeleteUser = {this.handleDeleteUser}
                // />
//             </div>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState( [
            { id: 1, name: "thinh", age: 20 }, 
            { id: 2, name: "Thu", age: 16}
        ])

    const handleAddUser = (userObject) => {
        setListUsers([...listUsers, userObject])
    }
    const handleDeleteUser = (userObject) => {
        let listUsersClone = listUsers; 
        listUsersClone = listUsersClone.filter((item) => item.id !== userObject); 
        setListUsers(listUsersClone)
    }
    return (
        <div>
            <AddUserInfor
                handleAddUser={handleAddUser}
                />
                <DisplayInfor listUsers={listUsers}
                handleDeleteUser = {handleDeleteUser}
                />
        </div>
        

    )
}

export default MyComponent;