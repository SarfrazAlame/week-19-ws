import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [message, setMassage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      setSocket(socket);
    };
    socket.onmessage = (message) => {
      setLatestMessage(message.data);
    };

    setSocket(socket);
  }, []);

  if (!socket) {
    return <div>Connecting to socket server...</div>;
  }

  return (
    <>
      <input onChange={(e) => setMassage(e.target.value)}></input>
      <button onClick={() => socket.send(message)}>send</button>
      {latestMessage}
    </>
  );
}

export default App;
