import Label from "./Label"
import Input from "./Input"
import ForgotPasswordLink from "./ForgotPasswordLink"
import Button from "./Button"

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"

export default function Form(props){
  const [error, setError] = useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState(""); // State for password
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const {isUserRegistered}=props;

  
  const navigate = useNavigate(); //// Initialize the navigate hook
  // Reset form fields when switching between login and sign-up
  useEffect(() => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  }, [isUserRegistered]);
 
  function handleLogIn(event){
    event.preventDefault();
console.log("Log in Button clicke");

   navigate("/dashboard");
  }

//   function handleSignUp(event){
//     console.log("sign up is clicked")
// event.preventDefault();
// navigate("/");
//   }

  function ValidEmail(e){
    if(!isUserRegistered){
   (!/^\S+@\S+\.\S+$/.test(e.target.value))? setError("Please Enter Valid Email") : setError("");    //regex js  
    }
  }


 function handlePasswordChange(e) {
  setPassword(e.target.value); 
  validatePasswords(e.target.value, confirmPassword); // Compare passwords
}


function handleConfirmPasswordChange(e) {
  setConfirmPassword(e.target.value); // Update the confirm password state
  validatePasswords(password, e.target.value); // Compare passwords
}

// Validate passwords and set the error message

function validatePasswords(password, confirmPassword) {
  if(!isUserRegistered){
  if (password !== confirmPassword) {
    setError("Your passwords do not match");
  } else {
    setError(""); // Clear error if passwords match
  }
}
}

  
   
    return <div> 
        <form onSubmit= {handleLogIn}>
        {/* Email/Username Input */}
        {error && <div style={{ color: "red" }}>{error}</div>}
    <div class="mb-4">
      <Label for={(isUserRegistered) ? "email" :"userName"}  name={(isUserRegistered) ?  "Enter Username or Email":"Email" }/>
      <Input  onChange={ValidEmail} type="text" id={(isUserRegistered) ? "email" :"userName"}  placeholder={(isUserRegistered) ? "Enter your email or username" : "Enter Username"}/>
    </div>

    {(isUserRegistered) ? null :<div class="mb-4">
      <Label for="userName" name="Username"/>
      <Input type="text" id="userName"  placeholder="Choose your Username"/>
    </div>
}
    {/*  Password Input */}
    <div class="mb-4">
     <Label for="password" name="Password"/>
     <Input value={password} onChange={handlePasswordChange} type="password" id="password"  placeholder="Enter your password"/>
    </div>
    {console.log(`Form props:${isUserRegistered}`)}
    {(!isUserRegistered) && <div class="mb-4">
     <Label for="confirmPassword" name="Confirm Password"/>
     <Input onChange={handleConfirmPasswordChange} type="password" id="confirmPassword"  placeholder="Confirm your password"/>
    </div>}
    
{(isUserRegistered ) && <ForgotPasswordLink/> }
 <Button  type="submit"  value={(isUserRegistered) ? "Login" : "SignUp"}/>
   
  </form>
  </div>
}

