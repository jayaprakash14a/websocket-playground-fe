import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [socket, setSocket] = useState();
  
  const inputRef = useRef();

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    
    ws.onmessage = (e)=>{
      alert(e.data);
    }
  }, [])

  function sendMessage(){
    if(!socket) return

    const message = inputRef.current.value;

    //@ts-ignore
    socket.send(message);
    
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='message...' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
