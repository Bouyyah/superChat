import React from 'react';

function ChatMessage({ message, uid, currentUser, photoURL}) {

    const messageClass = uid === currentUser.Uid ? 'sent' : 'received'; 

    return (
        <div className= { `message ${messageClass}` }>
            <img src= { photoURL }/>
            <p>{ message }</p>
        </div>
    )
}

export default ChatMessage;
