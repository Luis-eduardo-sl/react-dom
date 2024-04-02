import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Sobre from './components/pages/Sobre';


function App() {
  return (
    <Router>
      <Navbar/> 

      <Container customClass="min-heigth">
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/sobre' element={<Sobre/>}/>
            <Route  path='/contato' element={<Contato/>}/>    
        </Routes>
      </Container>
      <Footer/>
    </Router>
  
  );
}

export default App;
