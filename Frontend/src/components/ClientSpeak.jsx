import styled from "styled-components"
import clientImage from "../assets/images/clientImage.avif"

export default function ClientSpeak() {
  return (
    <Section>
      <div className="hinfo">
        <div className="htitle">
<h3>What Our Clients Say</h3>
        </div>
        <div className="hdescription">
<p>We have been working with clients around the world.</p>
        </div>
      </div>
      <div className="testimonials">
<div className="clients">
<div className="info">
          <div className="title">
            <h3>Efficient Collaborating</h3> </div>
            <div className="description">
              <p>Outstanding car rental experience. Impressive teamwork and coordination. Effortless process, highly recommended.</p>
            </div>
         
        </div>
        <div className="client">
          <img src={clientImage} alt="clientImage" />
          <h3>Ann Black</h3>
          <p>CEO at ABC Corporation</p>
        </div>
</div>
<div className="clients">
<div className="info">
          <div className="title">
            <h3>Intuitive Design</h3> </div>
            <div className="description">
              <p>Exceptional user experience. Intuitively designed for effortless navigation. Highly recommended for a seamless and user-friendly interface.</p>
            </div>
         
        </div>
        <div className="client">
          <img src={clientImage} alt="clientImage" />
          <h3>John Doe</h3>
          <p>Marketing Manager</p>
        </div>
</div><div className="clients">
<div className="info">
          <div className="title">
            <h3>Mindblowing Service</h3> </div>
            <div className="description">
              <p>Mindblowing service that exceeds expectations. Unparalleled attention to detail. A service experience like no other.</p>
            </div>
         
        </div>
        <div className="client">
          <img src={clientImage} alt="clientImage" />
          <h3>Jane Cooper</h3>
          <p>Small Business Owner</p>
        </div>
</div>


      </div>
    </Section>
  )
}
const Section = styled.section`
padding: 7rem;
/* margin: 2rem; */

.hinfo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
 
  .htitle{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.3rem;
    color: #555454;

  }
  .hdescription{
    font-size: 1rem;
    color: #b1aeae;

  }
 
}
.testimonials{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 4rem;
  margin-top: 1rem;
  .clients{
    display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
gap: 1rem;
padding: 1rem;
.info{
  /* padding: 1rem; */
  border-radius: 10px;
  box-shadow: 10px 11px 61px 0px rgba(180, 173, 173, 0.65);
  .title{
    
    padding: 1rem;
    text-align: center;
    h3{
      color: #4d4a4a;
    }
  }
  .description{
    padding: 1rem;
    text-align: center;
    p{
      color: #555454;
    }
  }

}
.client{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{ 
    height: 45px;
    border-radius: 100%;
    filter: blur(30%);
    /* align-items: center; */
  }
  h3{
    color:gray;
    }
  p{
    color:gray;
  }

}
  }

}
`;