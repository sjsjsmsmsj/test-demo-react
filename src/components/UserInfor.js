import React from "react";

class UserInfor extends React.Component {
        state = {
        name: 'Thinh', 
        address: 'Binh dinh', 
        age: 20
    }; 
    
    handleClick = (event) => {
        // console.log("Random: ", Math.floor(Math.random() * 100 + 1))
        this.setState({
            name: "Lam gia thinh",
            age: Math.floor(Math.random() * 100 + 1)
        })
    }

    handleOnMoreOver(event) {
        // console.log(event.pageX)
    }

    handleOnChangeInput = (event) => {
        console.log(event, event.target.value)
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => { 
        event.preventDefault();
        console.log(this.state)
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                {/* <button onMouseOver={this.handleOnMoreOver}>Hover me</button> */}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text"
                        value= {this.state.name}
                    onChange={(event) => {this.handleOnChangeInput(event)}}
                    />
                                        <input type="text"
                        value= {this.state.age}
                    onChange={(event) => {this.handleOnChangeAge(event)}}
                    />
                    <button>Submit</button>

                </form>
            </div>
        );
    }
}
export default UserInfor;