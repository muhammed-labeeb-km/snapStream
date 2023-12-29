import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './folder/Home';
import Main from './folder/Main';
import History from './pages/History';
import Pagenotfound from './pages/Pagenotfound';

function App() {
  return (
    <div className="App bg-black" style={{maxWidth:'100vw'}}>

    <Header/>
    
    <Routes>
    <Route path='/' element={<Main/>}></Route>
    <Route path='/second' element={<Home/>}></Route>
    <Route path='/history' element={<History/>}></Route>
    <Route path='*' element={<Pagenotfound/>}></Route> 
    </Routes>
    
    <Footer/>
    </div>
  );
}

export default App;
