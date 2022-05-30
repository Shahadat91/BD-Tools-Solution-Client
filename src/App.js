import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddReview from "./components/AddReview/AddReview";
import Blogs from "./components/Blogs/Blogs";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import MyPortfolio from "./components/MyProtfolio/MyPortfolio";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Orders/Orders";
import ProceedOrder from "./components/ProceedOrder/ProceedOrder";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Reviews from "./components/Reviews/Reviews";
import ToolsDetails from "./components/ToolsDetails/ToolsDetails";

function App() {
  return (
    <>
      <Header></Header>
      <div className="main max-w-7xl mx-auto lg:px-12">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/tool/:toolId"
            element={
              <RequireAuth>
                <ToolsDetails></ToolsDetails>
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/proceedorder/:toolId"
            element={<ProceedOrder></ProceedOrder>}
          ></Route>
          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          
          }></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
          <Route path="/addreview" element={<AddReview></AddReview>}></Route>
          <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path="/order" element={<Orders></Orders>}></Route>
          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
