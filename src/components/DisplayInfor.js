import React from "react";

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    
    render() {
        const { listUsers } = this.props;

        return (
            <div>
            <div>
                    <span onClick={() => this.handleShowHide()}> 
                        {this.state.isShowListUser ? "Hide list user": "Show list user"}
                </span>
            </div>
            <div> 
                { this.state.isShowListUser &&
                    listUsers.map((user) => {
return (
                            <div key={user.id} className={+user.age > 18 ? "green": "red"}>
                                <div>My name is {user.name}</div>
                                <div>Age: {user.age}</div>
                            </div>
                        );


                    })
                    }
                        
                </div>
                </div>
        );
    }
}

export default DisplayInfor;
