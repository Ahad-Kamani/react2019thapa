import React from 'react';
// import ReactDOM from 'react-dom';
import './Avatar.css';
import 'tachyons';

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

const AvatarList = (props) => {
    return (
        <div className="avatarstyle ma4 bg-light-purple dib pa3 grow shadow-4 tc">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
            <h1 className=""> {props.name} </h1>
            <p> {props.profession} </p>
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

export default AvatarList;