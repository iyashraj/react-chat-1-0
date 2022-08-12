import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: "h-14 w-full max-w-[728px] flex text-xl relative bottom-0",
  input: "w-full text-xl p-3 bg-gray-900 text-white outline-none border-none",
  submitBtn: "w-[20%] bg-green-500",
};

const SendMessage = ({scroll}) => {

  const [input, setInput] = useState("");
  
  const sendMessage = async (e) => {
    e.preventDefault();
    if(alert === ''){
        alert('Please enter a valid message')
        return
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(
      collection(db, "messages"), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      })
    setInput("")
    scroll.current.scrollIntoVeiw({behavior: 'smooth'})
  };
  return (
    <form className={style.form} onSubmit={sendMessage}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Send Message"
        className={style.input}
      />
      <button type="submit" className={style.submitBtn}>
        Send
      </button>
    </form>
  );
};

export default SendMessage;
