import React from 'react'

class MyComponent extends React.Component {
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

    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMoreOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>

            </div>
        );
    }
}

export default MyComponent;