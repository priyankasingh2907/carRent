import { FaCarSide, FaRegGrinTears, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import DashboardUser from "./DashboardUser";
import DashboardCars from "./DashboardCars";
import DashboardRent from "./DashboardRent";

export default function Dashboard() {
  const [user , setUser]=useState(false);
  const [car , setCar]=useState(false);
  const [rent , setRent]=useState(false);

  return (
    <Section>

      <div className="sidebar">
      <div className="title">
          <h2>LOCAVO</h2>
        </div>
        <div className="nav">
          <ul>
            <li> <Link> <FaUserAlt
             onClick={() => {setUser(true);
              setCar(false);setRent(false);}
             } 
            /> User</Link> </li>
            <li> <Link><FaCarSide 
            onClick={() => {setCar(true),
              setRent(false),setUser(false)
            }}
            />Cars</Link> </li>
            <li> <Link> <FaRegGrinTears
             onClick={() => {setRent(true),
              setUser(false),setCar(false)}

             }
            />Rents</Link> </li>
          </ul>
        </div>
      </div>
      <div className="dashboard">
      {
        user ? <DashboardUser/>  : ""
      }
    {
        car ?  <DashboardCars/> :""
      }  {
        rent ? <DashboardRent/> :""
      }
      </div>
    </Section>
  )
}
const Section = styled.section`

display: flex;
justify-content: start;
align-items: start;
.sidebar{
  width: 15vw;
  height: 100vh;
background-color: #51829B;
.title{
  h2{
    color: white;
    padding: 3rem 0 3rem 1rem;
  }
}
.nav{
  ul{
    padding: 3rem 0 3rem 1rem;
    list-style: none;
    li{
      border: 1px solid #1B3C73;
      padding: 5px;
    Link{
      display: flex;
      justify-content: space-between;
    }
      
    }
  }
}


}
.dashboard{
  width: 100vw;

  
 
}
`;