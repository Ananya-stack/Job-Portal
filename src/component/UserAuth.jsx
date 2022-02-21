// import { createContext,useEffect,useContext,useState } from "react";
// import { auth } from "../firebase/Firebase";
// import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,GoogleAuthProvider,onAuthStateChanged,signInWithPopup} from "firebase/auth"

// const userAuth = createContext();

// export function UserAuthProvider({children}) {
//     const [user, setUser] = useState("")

//     function signUp(email,password,name,confirmPassword) {
//         return createUserWithEmailAndPassword( auth,email,password);
//     }
//     function login(email,password) {
//         console.log("Email",email) ; 
//         return signInWithEmailAndPassword( auth,email,password);
//     }
//     function logOut(){
//         return signOut(auth)
//     }
//     function googleSignIn() {
//         const googleAuthProvider = new GoogleAuthProvider();
//         return signInWithPopup(auth,googleAuthProvider)
//     }
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
//            setUser(currentUser);
//          });
//          return ()=>{
//           unsubscribe();
//          }
//       }, [])
//       return <userAuth.Provider value={{user,signUp,login,googleSignIn,logOut}}>
//         {children}
//     </userAuth.Provider>
// }
// export function useUserAuth(){
//     return  useContext(userAuth);
// }