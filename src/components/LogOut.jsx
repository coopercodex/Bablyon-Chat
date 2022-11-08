import React from 'react'
import { auth } from '../firebase';

const style = {
  button: `bg-grey200 px-4 py-2 hover:bg-gray-600`
}


const LogOut = () => {
  const signOut = () => {
    signOut(auth)
  }
  return (
    <button className={style.button} onClick={() => auth.signOut()}>
      LogOut
    </button>
  )
}



export default LogOut;