import styled from "styled-components"
import image1 from "../assets/images/front1.webp"
import image2 from "../assets/images/front2.webp"
import image3 from "../assets/images/front3.webp"

export default function FeatureVehical() {
 
  return (
    <Section>
      <div className="hinfo">
        <div className="htitle">
          <h3>Featured Vehicles</h3>

        </div>
        <div className="hdsecription">
          <p>We have been working with clients around the world.</p>
        </div>
      </div>
      <div className="cards">
   <div className="card1">
    <div className="image">
      <img src={image1} alt="image1" />
    </div>
    <div className="info">
      <h4>Dacia Dakker</h4>
      <p>2016</p>
    </div> </div>
    <div className="card1">
    <div className="image">
      <img src={image2} alt="image1" />
    </div>
    <div className="info">
      <h4>Dacia Duster</h4>
      <p>2021</p>
    </div> </div>
    <div className="card1">
    <div className="image">
      <img src={image3} alt="image1" />
    </div>
    <div className="info">
      <h4>Renault Clio</h4>
      <p>2019</p>
    </div>
   </div>

      </div>
      
    </Section>
  )
}
const Section=styled.section`
padding: 3rem 9rem 0;
/* margin: 2rem; */

.hinfo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
 
  .htitle{
    
    h3{
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.3rem;
    color: #555454;
    }

  }
  .hdsecription{
  
    p{
      font-size: 1rem;
      color: #b1aeae;
    }

  }
 
}
.cards{
  padding-top: 2rem;
  display: grid;
  gap:2rem;
  grid-template-columns: repeat(3, 1fr);
  .card1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:1rem;
    box-shadow: 4px 3px 42px -9px rgba(0,0,0,0.75);

    padding: 1rem ;
    .image{
      img{
        height: 30vh;
      }
    }
    .info{
      text-align: center;
      color: #555454;
    }
  }
}
`;