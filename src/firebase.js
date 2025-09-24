import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile 
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBSXHneU3IWjH9V3KS9_qUVQB8e6rhoDok",
  authDomain: "netflix-a287f.firebaseapp.com",
  projectId: "netflix-a287f",
  storageBucket: "netflix-a287f.firebasestorage.app",
  messagingSenderId: "361685427924",
  appId: "1:361685427924:web:2c1dae0e316d23f3343d41"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        // ✅ Update displayName so Navbar can show it
        await updateProfile(user, { displayName: name });

        // Save user in Firestore
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, login, signup, logout };
