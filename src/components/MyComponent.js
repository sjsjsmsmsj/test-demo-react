import React from 'react'
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor'

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "thinh", age: 20 }, 
            { id: 2, name: "Thu", age: 16}
        ]
    }

    // JSX
    render() {
        return (
            <div>
                <UserInfor />
                <DisplayInfor listUsers={ this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;