
import styled from "styled-components"
import Navbar from "../Navbar";
import { BiAddToQueue, BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";


export default function DashboardCars() {
    
  return (
    <Section>
          <div id="car">
<Navbar/>
      <div className="profile">
        <div className="title">
            <h3>Hi , Admin </h3>
            <button> <Link> <span><BiAddToQueue/></span>New item</Link> </button>
        </div>
        <div className="table">
<table>
<thead>
    <tr>
    <th>ID</th>
        <th>BRAND</th>
        <th>MODEL</th> 
        <th>GEARBOX</th>
        <th>FUEL_TYPE</th> 
        <th>PRICE</th>
         <th>AVAILABLE</th> 
        <th>OPERATION</th>
    </tr>
</thead>
<tbody>
    
        <tr>
        <td>1</td>      
<td>Dacia Duster</td>
<td>2021</td>
<td>manual</td>
<td>diesel</td>
<td>80</td>
<td>no</td>
<td>
<button>
    <BiEdit/>
    Edit
</button>
<span>
<MdDelete/>
</span>
</td>
        </tr>
        <tr>
        <td>1</td>      
<td>Dacia Duster</td>
<td>2021</td>
<td>manual</td>
<td>diesel</td>
<td>80</td>
<td>no</td>
<td>
<button>
    <BiEdit/>
    Edit
</button>
<span>
<MdDelete/>
</span>
</td>
        </tr>
        
        <tr>
        <td>1</td>      
<td>Dacia Duster</td>
<td>2021</td>
<td>manual</td>
<td>diesel</td>
<td>80</td>
<td>no</td>
<td>
<button>
    <BiEdit/>
    Edit
</button>
<span>
<MdDelete/>
</span>
</td>
        </tr>
        

        <tr>
        <td>1</td>      
<td>Dacia Duster</td>
<td>2021</td>
<td>manual</td>
<td>diesel</td>
<td>80</td>
<td>no</td>
<td>
<button>
    <BiEdit/>
    Edit
</button>
<span>
<MdDelete/>
</span>
</td>
        </tr>
        <tr>
        </tr>
    
</tbody>
</table>
        </div>
      </div>
       </div>

    </Section>
  )
}
const Section = styled.section`
.profile{
    padding:0 5rem;
    border: 5px dashed  #C9D7DD;
    padding:35px ;
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
}`;