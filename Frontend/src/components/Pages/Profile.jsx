import styled from "styled-components"
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";


export default function Profile() {
  return (
    <Section>
      <Navbar/>
      <div className="profile">
        <div className="title">
            <h3>List of all your rentals </h3>
            <button> <Link> <span><BiEditAlt/></span>Edit Profile</Link> </button>
        </div>
        <div className="table">
<table>
<thead>
    <tr>
        <th>BRAND</th>
        <th>MODEL</th> 
        <th>TYPE</th> 
        <th>PRICE</th>
         <th>GEARBOX</th>
         <th>RENTAL DATE</th> 
        <th>RETURN DATE</th>
    </tr>
</thead>
<tbody>
    
        <tr>
<td>Dacia Duster</td>
<td>2021</td>
<td>diesel</td>
<td>80</td>
<td>automatic</td>
<td>2023-06-15</td>
<td>2023-06-17</td>
        </tr>
        <tr>
<td>Dacia Duster</td>
<td>2021</td>
<td>diesel</td>
<td>80</td>
<td>automatic</td>
<td>2023-06-15</td>
<td>2023-06-17</td>
        </tr>
        <tr>
<td>Dacia Duster</td>
<td>2021</td>
<td>diesel</td>
<td>80</td>
<td>automatic</td>
<td>2023-06-15</td>
<td>2023-06-17</td>
        </tr>
    
</tbody>
</table>
        </div>
      </div>
    </Section>
  )
}
const Section = styled.section`
height: 100vh;
width: 100vw;
/* margin: 0 3rem; */

.profile{
    padding:0 5rem;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3{

        }
        button{
color: white;
padding: 7px 11px;
background-color: #0B60B0;
border: none;
span{
    
}
        }
    }
    .table{
        margin-top:10px ;
        table{
            width: 90vw;
            font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
        }
        thead, tbody{
            text-align: start;
        }
        th,td{
           
            border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
        }
        tr:nth-child(even) {
  background-color: #dddddd;
}
    }
}
`;