
import ReactDOM from 'react-dom';
import Notes from './Notes';
import Task from './Task';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState} from "react";

import { DataProvider } from './Context';
function App() {
  const [text, setText] = useState("");
  return (
    
    <DataProvider>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </div>
    </DataProvider>
  );
}

export default App;
