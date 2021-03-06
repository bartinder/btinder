import React from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// const Navbar = props => (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link className="navbar-brand" to="/">
//       Pupster
//     </Link>
//     <div>
//       <ul className="navbar-nav">
//         <li
//           className={
//             window.location.pathname === "/" ||
//             window.location.pathname === "/about"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/" className="nav-link">
//             About
//           </Link>
//         </li>
//         <li
//           className={
//             window.location.pathname === "/discover"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/discover" className="nav-link">
//             Discover
//           </Link>
//         </li>
//         <li
//           className={
//             window.location.pathname === "/search"
//               ? "nav-item active"
//               : "nav-item"
//           }
//         >
//           <Link to="/search" className="nav-link">
//             Search
//           </Link>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );

const Navbar2 = () => (
  <div className="container">
    <nav className="navbar fixed-top justify-content-center">
      <img src={require("./logo4.png")} alt="logo" className="navbar fixed-top justify-content-center"/>
    </nav>

  </div>

);

export default Navbar2;
