import Heading from "./Heading";
import Form from "./Form";
import { useState } from "react";
export default function Card(props){
  const [UserRegisterd, setUserRegistered] =useState(true);
function handleSignUp(event){
  event.preventDefault();
  console.log("sign UpPppppppppp is clicked")
 setUserRegistered(false);
 if(!UserRegisterd){
setUserRegistered(true);
 }
}
    return <div>
        
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
    <Heading name={(UserRegisterd) ? "Login" : "SignUp"}/>
    {console.log(`card:${UserRegisterd}`)}
      <Form isUserRegistered={UserRegisterd}/>
    
      <div class="flex items-center justify-center my-6">
        <span class="text-gray-400">{(UserRegisterd) ? "Don't have an account?" : "Already have an account ?"}</span>
        <a onClick={handleSignUp} href=""  class="ml-2 text-blue-500 hover:text-blue-700">{(UserRegisterd) ? "Sign Up" : "Log In "}</a>
      </div>
    </div>
  </div>
    </div>
}