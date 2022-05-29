
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddReview from './components/AddReview/AddReview';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import ProceedOrder from './components/ProceedOrder/ProceedOrder';
import Register from './components/Register/Register';
import Reviews from './components/Reviews/Reviews';
import ToolsDetails from './components/ToolsDetails/ToolsDetails';

function App() {
  return (
    <>
    <div className='max-w-7xl mx-auto lg:px-12'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/tool/:toolId' element={<ToolsDetails></ToolsDetails>}></Route>
        <Route path='/proceedorder/:toolId' element={<ProceedOrder></ProceedOrder>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/addreview' element={<AddReview></AddReview>}></Route>
        <Route path='/order' element={<Orders></Orders>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
    <Footer/>
    </>
  );
}

export default App;
