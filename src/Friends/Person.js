import React from "react";
import FriendList from "./FriendList";
import "../App.css";

class Person extends React.Component{
  state = {showMenu: false}

  showMenuhandler= (e)=> {
    e.preventDefault();

    this.setState({showMenu:true}, ()=> {
      document.addEventListener('click', this.closeMenuHandler);
    });
  }
  closeMenuHandler= (event)=> {
    if (!this.dropdownMenu.contains(event.target)) {
    this.setState({ showMenu:false}, ()=> {
      document.removeEventListener ('click', this.closeMenuHandler);
    });
  }
}
//onClick={(e) =>{e.preventDefault(); this.setState({showMenu: !showMenu})}
  render() {
    const showMenu = this.state.showMenu
    const person = this.props.person
    return (
      <div>
          <button onClick= {this.showMenuhandler} className="Person" key={person.id}>
            {person.first_name} {person.last_name}
          </button>
          <div>
          <div ref= {element=> { 
              this.dropdownMenu = element;
          }}>
            {this.state.showMenu ? (
            <FriendList friends={person.friends} />) : null
            }
          </div>
          </div>
      </div>)
  }
}


export default Person;
