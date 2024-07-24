import styled from "styled-components"
import  appstore from "../assets/images/appstore.png"
import  playstore from "../assets/images/playstore.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


export default function Footer() {
  return (
    <Footerr>
    <div className="upperfooter">
    
    <div className="about">
    <div className="title">
           <h3>About LOCAVO</h3>
        </div>
       <ul>
        <li><a href="#"> A wide selection of vehicles, competitive prices to make your experience enjoyable.</a></li>
       </ul>
      </div>
      <div className="about">
        <div className="title">
           <h3>Company</h3>
        </div>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="about">
        <div className="title">
           <h3>Legal</h3>
        </div>
        <ul>
          <li><a href="#">Cookies Policy</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div className="InstallApp">
        <div className="title">
           <h3>Install App</h3>
        </div>
        <ul>
          <li><img src={appstore} alt="playstore" /></li>
          <li><img src={playstore} alt="playstore" /></li>
          <li className="icons">
          <FaFacebookSquare  className="icon"/>
          <FaSquareXTwitter className="icon" />
          <FaInstagramSquare  className="icon"/>
          </li>
        </ul>
      </div>
      
    </div>
    <div className="lowerfooter">
        <h3>© Copyright. All rights reserved.</h3>
      </div>
    </Footerr>
  )
}
const Footerr = styled.section`
background: #E3E1D9;
color: #1d1c1c;
border-top: 1px solid #C7C8CC;
margin: 0;
padding: 3rem;
.upperfooter{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  padding: 1rem;
  gap: 5rem;

.about ,.InstallApp{
  color: #B4B4B8;
  display: flex;
  flex-direction: column;
  
  .title{
    text-align: start;
    color: #B4B4B8;
    font-size: 1.3rem;
    font-weight: 100;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }ul{
    margin-top: 1rem;
    list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;      li{
        display: flex;
        gap: 2rem;
        display: flex;
        align-items: center;
       a{
          text-decoration: none;
          color: #494646;
        font-weight: 300;
        }
      }
    
  }
}
.InstallApp{
  ul{
    li{
      .icons{
        display: flex;
        gap: 1rem;
        .icon{ border: 1px solid #2d68fd7f;
        padding: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.3rem;
        cursor: pointer;
        svg {
          color: #2d69fd;
          font-size: 1.5rem;
        }
      }

        }

      }
      img{
        height: 30px;
      }
    }
  }
}
.lowerfooter{
  text-align: center;
  border-top: 1px solid #B4B4B8;
  color: #B4B4B8;
  /* border-radius: 3px; */
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }
`;