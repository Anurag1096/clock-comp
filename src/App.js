
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
function App() {
  return (<>
  
  
    <BrowserRouter basename="/index.html">
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  <div>hi</div>
  </>
  );
}

export default App;
