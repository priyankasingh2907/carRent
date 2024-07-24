
import styled from "styled-components"
import image1 from "../../assets/images/front1.webp"
import image2 from "../../assets/images/front2.webp"
import image3 from "../../assets/images/front3.webp"
import Navbar from "../Navbar"
import Footer from "../Footer"
import { Link } from "react-router-dom"

export default function BookCar() {
 
  return (
    <Section>
      <Navbar/>
      
      <div className="cards">
   <div className="card1">
    <div className="image">
      <img src={image1} alt="image1" />
    </div>
    <div className="info">
      <h4>Dacia Dakker</h4>
      <p>2016</p>
    
    </div> 
    <div className="price">
      <h4>$30/<span>day</span></h4>
      </div>
      <div className="btn">
        <button>
          <Link >Rent now</Link>
        </button>
      </div>
      </div>
      <div className="card1">
    <div className="image">
      <img src={image2} alt="image1" />
    </div>
    <div className="info">
      <h4>Dacia Dakker</h4>
      <p>2016</p>
    
    </div> 
    <div className="price">
      <h4>$30/<span>day</span></h4>
      </div>
      <div className="btn">
        <button>
          <Link >Rent now</Link>
        </button>
      </div>
      </div>
      <div className="card1">
    <div className="image">
      <img src={image3} alt="image1" />
    </div>
    <div className="info">
      <h4>Dacia Dakker</h4>
      <p>2016</p>
    
    </div> 
    <div className="price">
      <h4>$30/<span>day</span></h4>
      </div>
      <div className="btn">
        <button>
          <Link >Rent now</Link>
        </button>
      </div>
      </div>
      <div className="card1">
    <div className="image">
      <img src={image1} alt="image1" />
    </div>
    <div className="info">
      <h4>Dacia Dakker</h4>
      <p>2016</p>
    
    </div> 
    <div className="price">
      <h4>$30/<span>day</span></h4>
      </div>
      <div className="btn">
        <button>
          <Link >Rent now</Link>
        </button>
      </div>
      </div>
      <div className="card1">
    <div className="image">
      <img src={image1} alt="image3" />
    </div>
    <div className="info">
      <h4>Dacia Dakker</h4>
      <p>2016</p>
    
    </div> 
    <div className="price">
      <h4>$30/<span>day</span></h4>
      </div>
      <div className="btn">
        <button>
          <Link >Rent now</Link>
        </button>
      </div>
      </div>
      <div className="card1">
    <div className="image">
      <img src={image1} alt="image2" />
    </div>
    <div className="info">
      <h4>Dacia Dakker</h4>
      <p>2016</p>
    
    </div> 
    <div className="price">
      <h4>$30/<span>day</span></h4>
      </div>
      <div className="btn">
        <button>
          <Link >Rent now</Link>
        </button>
      </div>
      </div>
      </div>
      <Footer/>
    </Section>
  )
}
const Section=styled.section`

/* margin: 2rem; */

.cards{
  padding: 3rem 10rem ;
  padding-top: 2rem;
  display: grid;
  gap:2rem;
  grid-template-columns: repeat(3, 1fr);
  .card1{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap:1rem;
    box-shadow: 4px 3px 42px -9px rgba(0,0,0,0.75);

    padding: 1rem ;
    .image{
      img{
        height: 30vh;
      }
    }
    .info{
      text-align: start;
      color: #555454;
    
    }
    .price{
      color: #555454;
      span{
        color:#C7C8CC ;
      }
    }
    .btn{
      width: 100%;
button{
    padding: 5px;
  width: 100%;
  border: none;
  border-radius: 20px;
  background-color: #C7C8CC;
  Link{
    color: #B4B4B8;
    text-decoration: none;
    font-weight: 200;
  }
}
    }
  }
}
`;