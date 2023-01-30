import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();

    return (
        <div>
            <h2>Details About :{friend.name}</h2>
            <h4>Cell Number: {friend.phone}</h4>
            <p>City: {friend.address.city}</p>
        </div>
    );
};

export default FriendDetails;