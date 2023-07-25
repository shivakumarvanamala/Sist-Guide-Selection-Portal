import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import Dashboard from './Dashboard';
import ErrorBoundary from './ErrorBoundary';
import Login from './Login';
import SelectTeam from './SelectTeam';
import SingleRegister from './SingleRegister';
import DuoRegister from './DuoRegister';
import SingleRegisterForm from './SingleRegisterForm';
import Success from './Success';

// import Login from './Login';
// import Footer from './shared/Footer'
function App() {

  return (
    <div>
    <Router>
    <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>

          <Route path="/login/selectteam" element={<SelectTeam />}></Route>

          <Route path="/login/selectteam/1" element={<SingleRegister />}></Route>
          <Route path="/login/selectteam/2" element={<DuoRegister />}></Route>
          
          <Route path='/login/selectteam/1/:id' element={<SingleRegisterForm />}></Route>
          <Route path='/login/selectteam/1/:id/success' element={<Success />}></Route>


    </Routes>
    </Router>
    </div>
  )
}

export default App