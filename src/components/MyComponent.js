import React from 'react'

class MyComponent extends React.Component {
    state = {
        name: 'Thinh', 
        address: 'Binh dinh', 
        age: 20
    }; 
    
    handleClick(event) {
        console.log(event.target)
        console.log("My name is ", this.state.name)
    }

    handleOnMoreOver(event) {
        console.log(event.pageX)
    }

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMoreOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>

            </div>
        );
    }
}

export default MyComponent;