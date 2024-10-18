import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Dashboard() {
    

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className="flex flex-1">
      <Sidebar/>
      </div>
    </div>
  );
}

export default Dashboard;
