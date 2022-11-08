import React, { useState, useEffect, useRef } from 'react'
import Message from './Message'
import SendMessage from './SendMessage'
import { db } from '../firebase'
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore'

const style = {
  chat: `flex flex-col p-[10px] relative`,
}
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = []
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id});
      })
      setMessages(messages);
    })
    return () => unsubscribe();
  }, []);

  console.log(messages)
  return (
    <>
      <div className={style.chat}>
        {messages && 
        messages.map((message) => {
          return <Message key={message.id} message={message} />
        })}
        
        </div>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  )
}


export default Chat;