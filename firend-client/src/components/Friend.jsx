import React from 'react';
import '../index.css'
const Friend = ({friend}) => {
    
    return (
        <div className='student'>
            <p>Name : {friend.name}</p>
            <p>Age : {friend.age}</p>
            <p>City : {friend.city}</p>
            <p>Hobby : {friend.hobby}</p>
        </div>
    );
};

export default Friend;