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

const Wrap=props=> {
  return(
  <div className="main max-w-7xl mx-auto lg:px-12">
    {props.children}
  </div>
  )
}

function App() {
  return (
    <>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Wrap><Home></Home></Wrap>}></Route>
          <Route path="/home" element={<Wrap><Home></Home></Wrap>}></Route>
          <Route
            path="/tool/:toolId"
            element={
              <RequireAuth>
                <Wrap>
                  <ToolsDetails></ToolsDetails>
                </Wrap>
                
              </RequireAuth>
            }
          ></Route>

          <Route
            path="/proceedorder/:toolId"
            element={<Wrap><ProceedOrder></ProceedOrder></Wrap>}
          ></Route>
          <Route path="/dashboard" element={
            <RequireAuth>
              <Wrap><Dashboard></Dashboard></Wrap>
            </RequireAuth>
          
          }></Route>
          <Route path="/blogs" element={<Wrap><Blogs></Blogs></Wrap>}></Route>
          <Route path="/reviews" element={<Wrap><Reviews></Reviews></Wrap>}></Route>
          <Route path="/addreview" element={<Wrap><AddReview></AddReview></Wrap>}></Route>

          <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
          
          <Route path="/order" element={<Wrap><Orders></Orders></Wrap>}></Route>
          <Route path="/login" element={<Wrap><LogIn></LogIn></Wrap>}></Route>
          <Route path="/register" element={<Wrap><Register></Register></Wrap>}></Route>
          <Route path="*" element={<Wrap><NotFound></NotFound></Wrap>}></Route>
        </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
