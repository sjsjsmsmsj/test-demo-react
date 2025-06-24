import React, { useState } from "react";


// class AddUserInfor extends React.Component {
//         state = {
//         name: 'Thinh', 
//         address: 'Binh dinh', 
//         age: 20
//     }; 
    
//     handleClick = (event) => {
//         // console.log("Random: ", Math.floor(Math.random() * 100 + 1))
//         this.setState({
//             name: "Lam gia thinh",
//             age: Math.floor(Math.random() * 100 + 1)
//         })
//     }

//     handleOnMoreOver(event) {
//         // console.log(event.pageX)
//     }

//     handleOnChangeInput = (event) => {
//         console.log(event, event.target.value)
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => { 
//         event.preventDefault();
//         this.props.handleAddUser({
//             id: Math.floor((Math.random() * 100) + 1) + 'random',
//             name: this.state.name, 
//             age: this.state.age
//         })
//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and I'm from {this.state.age}
//                 {/* <button onMouseOver={this.handleOnMoreOver}>Hover me</button> */}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <input type="text"
//                         value= {this.state.name}
//                     onChange={(event) => {this.handleOnChangeInput(event)}}
//                     />
//                                         <input type="text"
//                         value= {this.state.age}
//                     onChange={(event) => {this.handleOnChangeAge(event)}}
//                     />
//                     <button>Submit</button>

//                 </form>
//             </div>
//         );
//     }
// }

const AddUserInfor = (props) => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('Lam gia thinh') 
    const [age, setAge] = useState('')
 
    const handleClick = (event) => {
        // console.log("Random: ", Math.floor(Math.random() * 100 + 1))
        // this.setState({
        //     name: "Lam gia thinh",
        //     age: Math.floor(Math.random() * 100 + 1)
        // })
        setName("Lam gia thinh") 
        setAge(Math.floor(Math.random() * 100) + 1)
    }



    const handleOnChangeInput = (event) => {

        setName(event.target.value)
    }

    const handleOnSubmit = (event) => { 
        event.preventDefault();
        props.handleAddUser({
            id: Math.floor((Math.random() * 100) + 1) + 'random',
            name: name, 
            age: age
        })
    }

    const handleOnChangeAge = (event) => {
        // this.setState({
        //     age: event.target.value
        // })
        setAge(
            event.target.value
        )
    }

    
    return (
                    <div>
                My name is {name} and I'm from {age}
                {/* <button onMouseOver={this.handleOnMoreOver}>Hover me</button> */}
                <form onSubmit={(event) => handleOnSubmit(event)}>
                    <input type="text"
                        value= {name}
                    onChange={(event) => {handleOnChangeInput(event)}}
                    />
                                        <input type="text"
                        value= {age}
                    onChange={(event) => {handleOnChangeAge(event)}}
                    />
                    <button>Submit</button>

                </form>
            </div>
    )
}

export default AddUserInfor;