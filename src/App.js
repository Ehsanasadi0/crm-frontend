import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TicketDetails from './pages/Ticket';
import Tickets from './pages/Tickets';
import Testjs from './pages/newj';
import './App.scss';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
function App() {
  return (
    <>
    <Sidebar>
  <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link to="/Home" />}> Home</MenuItem>
    <MenuItem component={<Link to="/tickets" />}> Tickets</MenuItem>
    <MenuItem component={<Link to="/new-ticket" />}> new Tickets</MenuItem>
  </Menu>
</Sidebar>

      <Router>
        <div className='container'>
 
          <Routes>
            <Route path='/' element='' />
            <Route path="/ticket/:id" element={<TicketDetails />} />
              <Route path='/new-ticket' element={<Testjs />} />
              <Route path='/tickets' element={<Tickets />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
