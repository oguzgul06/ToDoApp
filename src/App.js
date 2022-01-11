import "./css/main.css";
import React, { useEffect } from "react";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import { motion } from "framer-motion";
import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/loginReducer";
import { auth } from "./firebase";
import Navbar from "./components/Navbar";

function App() {
  const user = useSelector((state) => state.selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="App">
      {/* {!user ? (
        <Login />
      ) : ()} */}
      <>
        <Navbar />
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          ToDo App
        </motion.h1>

        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <Todos />
          <DisplayTodos />
        </motion.div>
      </>
    </div>
  );
}

export default App;
