import React from 'react';
import { Link } from 'react-router-dom';
import'./Friend.css'
const Friend = ({friend}) => {
    const {id,name, username,email} =friend;
    return (
        <div className='friend'>
            <h3>Friend name :{name}</h3>
            <p>Email: {email}</p>
            <p><span>UserName: <Link to={`/friend/${id}`}>{username}</Link> </span></p>
          
            
        </div>
    );
};

export default Friend;