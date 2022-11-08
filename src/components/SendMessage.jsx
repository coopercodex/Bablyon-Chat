import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, {useState} from 'react'
import {auth, db} from '../firebase'

const style = {
  sendForm: `h-14 w-full max-w-[728px] flex-xl absolute bottom-5`,
  input: `w-full text-xl p-3 bg-gray-700 text-white outline-none border-none`,
  button: ` h-7 w-[25%] bg-[#395dff] text-white`
}

const SendMessage = ({scroll}) => {
  const [input, setInput]  = useState('');

  const sendMessage = async (event) => {
    event.preventDefault();
    if (input === '') {
      alert('Please enter a valid message')
      return 
    }
    const {uid, displayName} = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName, 
      uid,
      timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <form className={style.sendForm} onSubmit={sendMessage}>
      <input className={style.input}
      onChange={(event) => setInput(event.target.value)}
        value={input}
        type='text'
        placeholder='Message' />
      <button className={style.button}>Send</button>
    </form>
  )
}



export default SendMessage;