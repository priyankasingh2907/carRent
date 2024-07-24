
import styled from "styled-components"
import Navbar from "../Navbar";
import { BiAddToQueue, BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";


export default function DashboardRent() {
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
       <th>GEARBOX</th>
         <th>RENTAL DATE</th> 
        <th>RETURN DATE</th>
        <th>PRICE</th>
        <th>USER_ID</th> 
        <th>CAR_ID</th> 
        <th>OPERTAION</th> 

    </tr>
</thead>
<tbody>
    
        <tr>
        <td>1</td>
        <td>2023-06-15</td>
<td>2023-06-17</td>
<td>Dacia Duster</td>
<td>60</td>
<td>14</td>
<td>1</td>
<td>
    <button>
    <BiEdit/>    EDIT
    </button>
<MdDelete/>
</td>

        </tr>
        <tr>
        <td>1</td>
        <td>2023-06-15</td>
<td>2023-06-17</td>
<td>Dacia Duster</td>
<td>60</td>
<td>14</td>
<td>1</td>
<td>
    <button>
    <BiEdit/>    EDIT
    </button>
<MdDelete/>
</td>

        </tr>
        <tr>
        <td>1</td>
        <td>2023-06-15</td>
<td>2023-06-17</td>
<td>Dacia Duster</td>
<td>60</td>
<td>14</td>
<td>1</td>
<td>
    <button>
    <BiEdit/>    EDIT
    </button>
<MdDelete/>
</td>

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