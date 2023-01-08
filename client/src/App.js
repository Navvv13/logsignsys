//Library Import
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';

//Dependency Import

//Components Import
import Login from './components/Login';
import Booking from './components/Booking';
import AdminPanel from './components/AdminPanel';

//Css Import
import './App.css';

function App() {

  const logo = "https://www.freepnglogos.com/uploads/bus-png/image-bus-scribblenauts-wiki-39.png"


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element = {
            <>
              <Login logo ={logo}/>
            </>
          } />
          <Route path='/booking' element = {
            <>
              <Booking/>   
            </>
          } />
          <Route path='/adminPanel' element = {
            <>
              <AdminPanel/>   
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;