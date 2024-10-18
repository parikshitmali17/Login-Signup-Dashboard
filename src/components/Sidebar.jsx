import { useState } from "react";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Dummy content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <div className="p-4">This is the <b>Dashboard content.</b> <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolorem dolores porro exercitationem, tenetur delectus qui esse vitae iste voluptas! Tenetur esse dolorum quis, optio aliquam voluptatibus temporibus. Dolorum, dolores?
        Earum totam expedita incidunt nemo porro quidem at voluptatem quos tempore, corrupti explicabo vitae asperiores! Cumque, odit. Odit itaque quasi ipsam minus nostrum sed eaque odio maxime? Repellendus, eaque facilis?
        Vitae officia laborum dolores nulla totam. Repellat corporis exercitationem veniam sapiente soluta inventore amet ullam, officiis totam odio voluptates, temporibus doloremque atque quisquam, ipsum voluptatibus necessitatibus omnis beatae. Accusamus, est!
        Illum rem optio nulla quibusdam nesciunt quasi. Voluptatum iusto itaque exercitationem id facere doloremque, consequatur perspiciatis, odit consectetur quia quidem! Alias possimus accusantium nulla facilis, adipisci reprehenderit ut quo ea!
        Atque porro, deserunt corporis iure sint eum! Placeat expedita saepe cupiditate, a dolorum culpa nisi tempore enim ipsum, quo, atque molestias consectetur officiis? Molestiae hic, at soluta autem cumque delectus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit iste quo molestiae dolore saepe pariatur ex temporibus, accusamus delectus libero optio obcaecati in voluptatum, excepturi possimus quia id facere aliquid!</div>;
      case "Profile":
        return <div className="p-4">This is the <b>Profile content.</b> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quos eum tenetur blanditiis perferendis beatae excepturi itaque impedit in ullam? Animi mollitia reprehenderit praesentium illum officiis! Ipsum laboriosam doloribus quam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae odio voluptate ipsum nesciunt fugiat, cumque accusantium sint, fuga deleniti enim, architecto iusto! Veniam eos distinctio eum soluta error fugit!</div>;
      case "Settings":
        return <div className="p-4">This is the <b> Settings content.</b> <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa reprehenderit doloremque, cumque non aliquid mollitia corrupti totam molestias neque, veniam quos dignissimos consectetur voluptatem ratione? Voluptatibus aperiam debitis vel itaque!</div>;
      default:
        return <div className="p-4"><b>Select a tab to view content.</b></div>;
    }
  };


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white h-screen p-4">
        <nav className="flex flex-col space-y-4">
    
          <button
            className={`p-2 text-left ${
              activeTab === "Dashboard" ? "bg-gray-700" : ""
            } hover:bg-gray-700`}
            onClick={() =>  { 
               setActiveTab("Dashboard")}}
          >
            Dashboard
          </button>
          <button
            className={`p-2 text-left ${
              activeTab === "Profile" ? "bg-gray-700" : ""
            } hover:bg-gray-700`}
            onClick={() => setActiveTab("Profile")}
          >
            Profile
          </button>
          <button
            className={`p-2 text-left ${
              activeTab === "Settings" ? "bg-gray-700" : ""
            } hover:bg-gray-700`}
            onClick={() => setActiveTab("Settings")}
          >
            Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-lg">{renderContent()}</div>
      </main>
    </div>
  );
}
