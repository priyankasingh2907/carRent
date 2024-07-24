import styled from "styled-components"
// import { FaToggleOff } from "react-icons/fa";
// import { FaToggleOn } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Home from "./Home";


export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setIsNavOpen(false));
  
  return (
    <Nav state={isNavOpen ? 1 : 0}>
      <div className="brand">
        <div className="title">
          <h3> <Link to="/">LOCAVO</Link>  </h3>
        </div>
        <div className="troggle">
        {/* {isNavOpen ? (
          <FaToggleOff onClick={() => setIsNavOpen(false)} />
        ) : (
          <FaToggleOn
            onClick={() => {
              // e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )} */}

        </div>
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
      
          <ul>
            <li> <Link to="/">HOME</Link>  </li>
            <li>  <Link to="/bookcar">Book Cars</Link> </li>
            <li> <Link to="/dashboard">Dashbord</Link></li>

          </ul>
      
       
      </div>
      <div className="btns">
          <button> <Link to="/signup">SignUp</Link> </button>
          <button> <Link to="/signin"> SignIn</Link> </button>
        </div>
    </Nav>
   

  )
}
const Nav = styled.nav`
display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
background-color: #Fff;

.toggle{
  display: none;


}
.links{
  height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 8rem;

    ul{
     display: flex;
     list-style-type: none;

     /* justify-content: space-between; */
     gap: 2rem;
     /* padding: 2rem; */
     li{
      Link{
        text-decoration: none;
        color: black;
        transition: 0.4s ease-in-out;
          &:hover {
            color: #e6e351;
          }
      }
     }
    }
   
  
  
}
.btns{
      /* margin: 0 2rem; */
      /* padding: 1rem; */
     
      button{
        background-image: linear-gradient(to right top, #fdde55, #b6e778, #76e7aa, #50dfd4, #68d2e8);
        padding: 0.8rem 2rem;
        margin: 1rem;
        border: none;
        border-radius: 25px;

      }

    }
@media screen and (min-width: 280px) and(max-width: 1080px)  {
  position: relative;
    padding: 1rem 2rem;
    z-index: 999;
    margin: 0;
    .btns {
      button{
      display: none;
      }}
    .links{
      display: none;

    }
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .toggle {
      padding-right: 1rem;
      display: block;
      z-index: 51;
      svg {
        color: #ddec55;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links{
      z-index: 50;
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: white;
      opacity: 0;
      visibility: hidden;
      transition: 0.7s ease-in-out;
      /* clip-path: none; */
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          Link {
            color: #f9fd2d;
          }
        }
      }
    }}
`;