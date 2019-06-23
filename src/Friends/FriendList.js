import React from "react";


class FriendList extends React.Component{
    
    render() {
    return (
        <ul>
        {this.props.friends.map(friend => {
            return (
            <div >
                <li
                    className="Friends" >
                {friend.firstName} {friend.lastName}
                </li>
            </div>
            );
        })}
        </ul>
    );
    }
}

export default FriendList;
