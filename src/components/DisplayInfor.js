import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'


// class DisplayInfor extends React.Component {

//     state = {
//         isShowListUser: true
//     }

//     handleShowHide = () => {
//         this.setState({
//             isShowListUser: !this.state.isShowListUser
//         })
//     }
    
//     render() {
//         const { listUsers } = this.props;

//         return (
//             <>
//             <div>
//                     <span onClick={() => this.handleShowHide()}> 
//                         {this.state.isShowListUser ? "Hide list user": "Show list user"}
//                 </span>
//                 </div>
//                 <img src={ logo } />
//             <div> 
//                 { this.state.isShowListUser &&
//                     listUsers.map((user) => {
// return (
//     <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//         <div>
//                                 <div>My name is {user.name}</div>
//                                 <div>Age: {user.age}</div>
//         </div>
//         <div>
//             <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//         </div>
//     </div>
                            
//                         );


//                     })
//                     }
                        
//                 </div>
//                 </>
//         );
//     }
// }
const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true); 
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    useEffect(
        () => {
            if (listUsers.length === 0) {
               alert('me')
           }
        }, [listUsers]
    )

    return (
            <>
                <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list user": "Show list user"};
                    </span>
                </div>
                <div>
                    { isShowHideListUser &&
                        listUsers.map((user) => {
    return (
            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                                        <div>My name is {user.name}</div>
                                        <div>Age: {user.age}</div>
                </div>
                <div>
                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                </div>
            </div>
                                
                            );


                        })
                        }
                            
                    </div>
                    </>
            );
    }

export default DisplayInfor;
