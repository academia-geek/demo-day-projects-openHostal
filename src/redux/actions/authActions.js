import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { collection, doc, setDoc } from 'firebase/firestore';
import { db, facebook, google} from "../../firebase/firebaseConfig"
import { authTypes } from "../types/types";

//Registro de usuario
export const registerUsr = ({ nombre, email, contrasenia }) => {
    return async( dispatch ) => {
        const auth = getAuth();
        try {
            const newUsr = await createUserWithEmailAndPassword( auth , email, contrasenia )
            const results = await setDoc(doc(collection(db,"usuarios"),newUsr.user.uid),{
                nombre,
                email
            })
            console.log(results)
            alert("usuario registrado exitosamente")
            dispatch( register( newUsr.user.uid, nombre, email ) )
        } catch ( err ) {
            alert("El email ya esta en uso")
        }        
    };
}

const register = ( id, nombre, email) => {
    return {
        type: authTypes.REGISTER,
        payload: { id, nombre, email }
    }
}

// Inicio de sesion con facebook

export const loginFacebookAsync = ( ) => {
    return ( dispatch ) => {
        const auth = getAuth();
        signInWithPopup( auth, facebook)
        .then( (usr ) => console.log(usr))
    }
}

// Inicio de sesicon con Google 
export const loginGoogleAsync = () => {
    return ( dispatch ) => {
        const auth = getAuth();
        signInWithPopup( auth, google)
        .then(({user}) => {console.log(user,'usuario actualizado');})
        .catch(({error}) =>{console.warn(error, 'usuario no autorizado')})
    }
}
export const loginSync =(user, pass)=>{
    return{
            type: authTypes.LOGIN,
            payload: { user, pass}
    }
}
export const loginAsync =(email, password) =>{
    return (dispatch)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(loginSync(email, password))
            console.log(user,'usuario actualizado');})
        .catch(({error}) =>{console.warn(error, 'usuario no autorizado')})
    }
}




export const logout = () =>{
    return{
        type: authTypes.LOGOUT
    }
}
export const logoutAsync = ()=>{
    return(dispatch)=>{
        const auth= getAuth()
        signOut(auth)
        .then((user)=>{
            console.log('Adios')
            dispatch(logout())
            
      })
          .catch(error=>{
              console.warn(error)
          })
      }
  }