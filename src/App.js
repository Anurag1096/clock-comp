
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'

import DataTable from './components/dataTable';
function App() {

  return (<>
  
  
    {/* <BrowserRouter basename="/index.html">
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </BrowserRouter> */}
  {/* Changed For deployment purpose  */}
  {/* <div><Home/></div> */}
  <div className=''>
  <DataTable/>
</div>
  
  </>
  );
}

export default App;
