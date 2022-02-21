// import React, { useState } from 'react'
// import { Form,Button, Alert } from 'react-bootstrap'
// import './Signup.css'
// import { useUserAuth } from './UserAuth'
// import app from '../firebase/Firebase'
// import {Link, useHistory } from 'react-router-dom'
// import { getAuth,createUserWithEmailAndPassword} from 'firebase/auth';

// const validateEmail = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
// const validatePassword= RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$')

// function SignUp() {

//     const [name, setName]=useState("");
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     const [confirmPassword,setConfirmPassword]=useState("");
//     const [error, setError]=useState("");
//     // const {signUp} = useUserAuth()
//     const history = useHistory()

//     const [InputState, setInputState] = useState({
//         isError: {
//             name: "",
//             email: "",
//             password: ""
//         },
//     })

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         //   console.log(e);
//         const auth = getAuth(app);
//         createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {

//             const user = userCredential.user;
//             localStorage.setItem("token", user?.accessToken);
//           const userDetails = {
//             email: user?.email,
//           };
//           localStorage.setItem("userDetails", JSON.stringify(userDetails));
//           sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
          
//           // dispatch(setuser(userDetails));
        
//         }).then((res) =>{
//             history.push("/")
//         })
//         .catch((error) => {
//         //   const errorCode = error.code;
//         //   const errorMessage = error.message;
//           console.log(error);
//         })
//       }
    
//     return (
//         <div>
//             <h1  className="p-4 box mt-3 text-center">Sign Up</h1>
//             {/* {error && <Alert variant="danger">{error}</Alert>} */}
//            <Form 
//            onSubmit={handleSubmit}
//            >
//            <Form.Group className="mb-3" controlId="formBasicName">
//     <Form.Label>Full name</Form.Label>
//     <Form.Control type="text" placeholder="Enter the Name"
//     onChange={(e) => setName(e.target.value)} 
//     />
    
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" 
//      onChange={(e) => setEmail(e.target.value)} 
//     />
   
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" 
//      onChange={(e) => setPassword(e.target.value)} 
//     />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Re-enter Password" 
//      onChange={(e) => setConfirmPassword(e.target.value)} 
//     />
//   </Form.Group>
  
//   <div>
//   {/* <Link to="/profile"> */}
//       <Button variant="primary" type="submit" >
//     Sign up
//   </Button>
//   {/* </Link> */}
//   </div>
// </Form>
// <div className="p-4 box mt-3 text-center">
// Already have an account? <Link to="/profile"> Log In</Link>
// </div>
//         </div>
//     )
// }
// export default SignUp;