import Avatar from "./Avtar";
export default function Navbar(props) {
    return (
        <div>
      <header className="bg-blue-500 text-white p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">My Dashboard App</h1>
          <Avatar NameOfUser="Parikshit Mali" imgSrc="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--working-employee-man-young-boy-entrepreneur-professional-avatars-pack-people-illustrations-4608701.png?f=webp"/> 
        </div>
      </header>
     
      </div>
      
    );
  }
  