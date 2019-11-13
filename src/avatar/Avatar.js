import React from 'react';
// import ReactDOM from 'react-dom';
import './Avatar.css';
import AvatarList from './AvatarList';
// import 'tachyons';

// props will work same define below - (HINT provided by Maximilian Schwarzmüller - AcadeMind)
// const DemoFunctionComponent = (props) => {

//     const {name} = props;

//     return (
//         <div className="maindiv_style">
//             <h1> {name} </h1>
//             <p> 123456 </p>
//         </div>
//     )
// }

const Avatar = (props) => {

    const list_avatar = [
        { id: 1, name: "name 1", profession: "work 1"},
        { id: 2, name: "name 2", profession: "work 2"},
        { id: 3, name: "name 3", profession: "work 3"},
        { id: 4, name: "name 4", profession: "work 4"},
    ]
    
    const new_avatarArray = list_avatar.map( (currentValue, index) => {
        return <AvatarList name={list_avatar[index].name} profession={list_avatar[0].profession} />
    })
    
    return (
        <div className="mainpage">
            <h1>This is Heading.</h1>
            {/* <AvatarList name={list_avatar[0].name} profession={list_avatar[0].profession} />
            <AvatarList name={list_avatar[1].name} profession={list_avatar[1].profession}/>
            <AvatarList name={list_avatar[2].name} profession={list_avatar[2].profession}/>
            <AvatarList name={list_avatar[3].name} profession={list_avatar[3].profession}/> */}
            {new_avatarArray}
            <button>This is Button</button>
        </div>
    )
}

// props will work same define above
// const DemoFunctionComponent = ({name}) => {
//     return (
//         <div className="maindiv_style">
//             <h1> {name} </h1>
//             <p> 123456 </p>
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));

export default Avatar;