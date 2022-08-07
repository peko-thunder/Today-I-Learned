import { useState, useEffect } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
/* layouts */
import { DefaultLayout } from "./layouts/DefaultLayout";
/* components */
import { Home } from "./components/Home";
import { Page1 } from "./components/Page1";
import { Page1DetailA } from "./components/Page1DetailA";
import { Page1DetailB } from "./components/Page1DetailB";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";
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
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <br />
          <Link to="/page1">Page1</Link>
          <br />
          <Link to="/page2">Page2</Link>
          <br />
          <Link to="/page3">Page3</Link>
          <br />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<DefaultLayout><Page1 /></DefaultLayout>} >
              <Route path="detailA" element={<Page1DetailA />} />
              <Route path="detailB" element={<Page1DetailB />} />
            </Route>
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
