import React from 'react';
// import ReactDOM from 'react-dom';
import './DemoFunctionComponent.css';

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

const DemoFunctionComponent = (props) => {
    return (
        <div className="maindiv_style">
            <h1> {props.name} </h1>
            <p> 123456 </p>
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

export default DemoFunctionComponent;