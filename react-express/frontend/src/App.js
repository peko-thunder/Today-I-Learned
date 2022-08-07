import { useState, useEffect } from "react";
import './App.css';


export default function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  },[]);
  return (
    <div className="App">
      <h1>フロントエンド</h1>
      <p>{ message }</p>
    </div>
  );
}
