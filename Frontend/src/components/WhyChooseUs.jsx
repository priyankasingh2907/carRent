
import styled from "styled-components";
import { FaCar } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";

export default function WhyChooseUs() {
 
  return (
    <Section>
      <div className="hinfo">
        <div className="htitle">
          <h3>
          Why Choose Us
          </h3>
        </div>
        <div className="hdsecription">
          <p>
          Experience hassle-free car rentals with exceptional service and a wide selection of vehicles.
          </p>
        </div>
      </div>
      <div className="features">
        <div className="feature1">
          <div className="icon">
<FaCar/>
          </div>
          <div className="info">
            <div className="title">
<h3>Wide Selection of Cars</h3>
            </div>
            <div className="description">
<p>We offer a diverse range of cars to suit your needs and preferences. Whether youre looking for a compact car for city driving or a spacious SUV for a family trip, we have a wide selection of vehicles to choose from.</p>
            </div>
          </div>
        </div>
        <div className="feature1">
          <div className="icon">
<BiDollar/>
          </div>
          <div className="info">
            <div className="title">
<h3>Wide Selection of Cars</h3>
            </div>
            <div className="description">
<p>We provide competitive prices that fit your budget. Our transparent pricing ensures that you get the best value for your money without compromising on quality or service.</p>
            </div>
          </div>
        </div>
        <div className="feature1">
          <div className="icon">
<AiOutlineSchedule/>
          </div>
          <div className="info">
            <div className="title">
<h3>Easy Booking Process</h3>
            </div>
            <div className="description">
<p>Our user-friendly online booking system makes it quick and convenient to reserve your desired car. With just a few clicks, you can easily select your pickup location, choose your preferred car, and book it for your desired dates.</p>
            </div>
          </div>
        </div>

        <div className="feature1">
          <div className="icon">
<BsShieldLock/>
          </div>
          <div className="info">
            <div className="title">
<h3>Trust and Reliability</h3>
            </div>
            <div className="description">
<p>With years of experience in the car rental industry, we have established a reputation for trust and reliability. You can rely on us to provide quality vehicles, excellent service, and a seamless rental experience.</p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  )
}
const Section = styled.section`
padding: 3rem 7rem 0;
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
.features{
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .feature1{
    display: flex;
    gap:0.5rem;
    padding-top: 2rem;

    .icon{
      margin: 1rem;
      background-color:#1679AB;
      width: 3rem;
      padding: 0.1rem 0.6rem;
     display: flex;
     justify-content: center;
     align-items: center;
      height: 2rem;
     color:#EEEDEB;
    }
    .info{
      text-align: start;
      margin-top: 1rem;
      color:#607274 ;
      .title{
/* padding: 0 2rem ; */

      }
      .description{}
    }

  }
}

`;