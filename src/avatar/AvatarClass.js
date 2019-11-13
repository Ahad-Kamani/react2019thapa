import React, {Component} from 'react';
import './Avatar.css';
import AvatarList from './AvatarList';


class AvatarClass extends Component {

    constructor(){
        super();
        
        this.state = {
            title: "This is Heading."
        }
    }

    changeTitle() {
        this.setState(
            {
               title : 'Update Title'
            }
        )
    }

    render()
    {
        const list_avatar = [
            { id: 1, name: "name 1", profession: "work 1"},
            { id: 2, name: "name 2", profession: "work 2"},
            { id: 3, name: "name 3", profession: "work 3"},
            { id: 4, name: "name 4", profession: "work 4"},
        ]
    
        const new_avatarArray = list_avatar.map( (currentValue, index) => {
            return <AvatarList key={index} name={list_avatar[index].name} profession={list_avatar[index].profession} />
        })

        return (
            <div className="mainpage">
                <h1>{this.state.title}</h1>
                {/* <AvatarList name={list_avatar[0].name} profession={list_avatar[0].profession} />
                <AvatarList name={list_avatar[1].name} profession={list_avatar[1].profession}/>
                <AvatarList name={list_avatar[2].name} profession={list_avatar[2].profession}/>
                <AvatarList name={list_avatar[3].name} profession={list_avatar[3].profession}/> */}
                {new_avatarArray}
                <button onClick={() => this.changeTitle()}>This is Button</button>
            </div>
        )
    }
}

export default AvatarClass;