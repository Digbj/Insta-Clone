import './App.css';
import Home from './component/HomeP';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Wrapper from './component/wrapper';
import User from './component/New';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/posts' element={<Wrapper/>} />
        <Route path='/new' element={<User/>} />
        <Route path='*' element={"404-page not found"}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
