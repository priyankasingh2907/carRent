import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"


export default function SignUp() {
const [ inputs ,setInputs] = useState({
  "Firstname":"",
  "Lastname":"",
  "number":"",
  "Email":"",
  "Password":"",
});

function HandleChange (e){
  const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
}
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputs);
  alert(inputs);
}

  return (
    <Section>
      <div className="container">
        <div className="content">
          <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
            <div className="row">
              <label htmlFor="">Firstname</label>
              <input type="text" placeholder="Firstname" name ="Firstname" onChange={(e)=>{HandleChange(e)}} value={inputs.Firstname}  />
            </div>
            <div className="row">
              <label htmlFor="">Lastname</label>
              <input type="text" placeholder="Lastname" name ="Lastname" onChange={(e)=>{HandleChange(e)}} value={inputs.Lastname}  />
            </div>
            <div className="row">
              <label htmlFor="">Telephone</label>
              <input type="number" placeholder="Telephone" name ="number" onChange={(e)=>{HandleChange(e)}}  value={inputs.number}  />
            </div>
            <div className="row">
              <label htmlFor="">Email</label>
              <input type="Email" placeholder="Email" name ="Email" onChange={(e)=>{HandleChange(e)}}  value={inputs.Email}  />
            </div>
            <div className="row">
              <label htmlFor="">Password</label>
              <input type="Password" placeholder="Password"  name ="Password" onChange={(e)=>{HandleChange(e)}}  value={inputs.Password} />
            </div>
            <div className="row">
              <button type="submit">Create account</button>
            </div>
          </form>
        </div>
        <div className="info">
          <h2>Welcome to</h2>
          <h2>LOCAVO</h2>
          <p>Already a user?</p>
          <button>
            <Link to="/signin">Log In</Link>
          </button>
        </div>
      </div>
      
    </Section>
  )
}
const Section = styled.section`
display: flex;
border: 1px solid black;
justify-content: center;
align-items: center;

height: 99vh;
.container{
  border: 2px solid #DDDDDD;
  box-shadow: 13px 18px 16px 10px rgba(221,221,221,0.75);
display: grid;
/* border: 1px solid black; */
gap: 1rem;
grid-template-columns: repeat(2, 1fr);
height: 80vh;
width: 50vw;
.content{
  /* border: 1px solid black; */
  /* width: 50%; */
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  form{
    display: grid;
/* border: 1px solid black; */
width: 100%;
padding: 3rem;
grid-template-columns: repeat(1, 1fr);
/* gap: 2rem; */
.row{
  display: grid;
/* border: 1px solid black; */

grid-template-columns: repeat(1, 1fr);
input{
  border: none;
  
  border-radius: 20px;
  background-color:#EEEEEE ;
  padding: 0.7rem 1rem;
  width: 100%;
  margin: 0.5rem;
  &::placeholder{
color: #A2B5BB;
  }
}
label{
  padding: 0rem 1rem;
  color:#3C4048 ;
}
button{
  background:linear-gradient(
    130deg,
    rgba(246, 191, 13, 1) 0%,
    rgba(249, 47, 47, 1) 150%);
    border-radius: 20px;
    padding: 10px;
    }
/* gap: 1rem; */
}

  }
}
.info{
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 0.2rem;
background:linear-gradient(
    130deg,
    rgba(246, 191, 13, 1) 0%,
    rgba(249, 47, 47, 1) 150%);
    }button{
      border: none;
      color: white;
      margin-top:5px ;
  background:linear-gradient(
    130deg,
    rgba(246, 191, 13, 1) 0%,
    rgba(249, 47, 47, 1) 150%);
    border-radius: 20px;
    padding: 10px 15px;
    }
    
}


`;