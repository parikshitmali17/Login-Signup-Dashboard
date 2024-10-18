import Card from "./components/Card";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  


  return (
    <div> 
       <body class="bg-gray-100">
 <Router>
      <Routes>
        {/* Route for the login form */}
        <Route path="/" element={<Card />} />
        
        {/* Route for the dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
     </body>
</div>
  );
}

export default App;
