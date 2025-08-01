// import ListGroup from "./ListGroup"
// import Dashboard from "./components/Dashboard/Dashboard"
import Feedback from "./components/Feedback/Feedback"
import Login from "./components/Login/Login"
import History from "./components/Feedback/History"
import Register from "./components/Register/Register"
import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom"
import AllFeedBacks from "./components/Admin/AllFeedBacks"
import Analytics from "./components/Admin/Analytics"
// import AdminDashboard from "./components/Admin/AdminDashboard"


export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="page-content">
        {/* <Router> */}
          <Routes>
            <Route path="/" element={<Navigate to="/Login" />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            {/* <Route path="/Dashboard" element={<Dashboard/>}/> */}
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/History" element={<History />} />
            <Route path="/AllFeedBacks" element={<AllFeedBacks />} />
            <Route path="/Analytics" element={<Analytics />} />
             <Route path="*" element={<div>404 - Page not found</div>} /> 
            {/* <Route path="/AdminDashboard" element={<AdminDashboard/>}/> */}
          </Routes>
        {/* </Router> */}
      </div>
    </>
  );
}


