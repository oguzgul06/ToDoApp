import React from "react";
import { GoSignOut } from "react-icons/go";
import { motion } from "framer-motion";
import { auth } from "../firebase";

function Navbar() {
  return (
    <div className="Navbar">
      <h2>ToDo</h2>

      <div className="Navbar-icon">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="signout-btn"
          onClick={() => auth.signOut()}
        >
          <GoSignOut />
        </motion.button>
      </div>
    </div>
  );
}

export default Navbar;
