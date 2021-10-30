import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import { useCollectionData} from 'react-firebase-hooks/firestore';
import { FiSend } from 'react-icons/fi';

function ChatRoom({ db, currentUser, timestamp }) {

    const messagesRef = db.collection('Messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [Messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] =  useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        
        const { uid, photoURL } = currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: timestamp,
            uid,
            photoURL
        })

        setFormValue('');
    }

    return (
        <>
            <div>
                {Messages && Messages.map( msg => <ChatMessage key = { msg.id } message = { msg.text } currentUser = { currentUser }/>)}
            </div>
            <form onSubmit={ sendMessage }>
                <input value={ formValue } onChange={(e) => setFormValue(e.target.value)}/>
                <button type="submit" ><FiSend /></button>
            </form>
        </>
    )
}

export default ChatRoom;
