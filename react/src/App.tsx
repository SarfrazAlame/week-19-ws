import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
  }, []);

  return <></>;
}

export default App;
