import logo from './logo.svg';
import './App.scss';
import MyCpnTest from './examples/MyCpnTest';
import ListToDo from './Todos/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './examples/Home';
import ListUsers from './Users/ListUsers';
import DetailUser from './Users/DetailUser';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path='/' exact={'true'} element={<Home />} />
            <Route path='/todo' element={<ListToDo />} />
            <Route path='/about' element={<MyCpnTest> </MyCpnTest>} />
            <Route path='/user' exact={'true'} element={<ListUsers />} />
            <Route path='/user/:id' exact={'true'} element={<DetailUser />} />
          </Routes>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
