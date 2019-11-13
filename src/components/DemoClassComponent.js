import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import './DemoClassComponent.css';

class DemoClassComponent extends Component {
    render() {
        return (
            <div className="maindiv_style">
                <h1> {this.props.name} </h1>
                <p> 123456 </p>
            </div>
        )
    }
}
// ReactDOM.render(<App />, document.getElementById('root'));

export default DemoClassComponent;