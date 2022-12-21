import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home"
import About from './pages/About'
import Data from "./pages/Data";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/data' element={<Data></Data>}></Route>
      </Routes>
    </div>
  );
}

export default App;
