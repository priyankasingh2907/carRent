
import styled from "styled-components"
import heroImage from "../assets/images/ford.webp"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Section>
        <div className="info">
           <div className="title">
           <h1><span className="subTitle">Rent a car </span>and find great </h1>
           <h1>deals with us</h1>
           </div>
           <div className="description">
            <p>
            Choose from a collection of brand new cars, low prices are part of our every day offer.
            </p>
           </div>
           <button>
            <Link to="/bookcar">  Book online now!</Link>
         
           </button>

        </div>
        <div className="himage">
            <img src={heroImage} alt="heroImage" />
        </div>
    </Section>
    
  )
}
const Section = styled.section`
display: grid;
grid-template-columns: repeat(2,1fr);
padding: 2rem 7rem;
gap: 4rem;
.info{
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  padding: 3rem;
  border-radius: 20px;
background-color: #fff;
  .title{

    .subTitle{

      color: #ddcf0f;
    }
  }
  .description{

  }
  button{
    width: 40%;
    border-radius: 30px;
    border: none;
    padding: 1rem;
    background-color: #dbd471;

  }
}
.himage{
border-radius: 20px;
border: none;
background-color: #6fb8e9;
  padding: 3rem 0;
  img{
    border: none;
    width: 100%;
    height: 60vh;
    transition: 1s ease-in;
    &:hover{
 transform: translateX(50px);
    }
   
    /* overflow: hidden; */
  }
}
@media screen and (min-width: 280px) and(max-width: 1080px)   {
  grid-template-columns: 1fr;

  
}
`;