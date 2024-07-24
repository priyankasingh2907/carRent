
import styled from "styled-components"
import image1 from "../../assets/images/front1.webp"
import { Link } from "react-router-dom";

export default function RentCar() {
  return (
    <Section>
      <div className="container">
        <div className="image">
            <img src={image1} alt="" />
        </div>
        <div className="content">
<div className="title">
    <h3>Renault Clio</h3>
    
</div>
<form action="">
    <div className="row">
        <label htmlFor="">Rental date</label>
        <input type="date" name="date" id="date" />
    </div>
    <div className="row">
        <label htmlFor="">Return date</label>
        <input type="date" name="date" id="date" />
    </div>
</form>
<div className="info">
    <div className="col">
        <p>Gearbox</p>
        <h4>Manual</h4>
    </div>
    <div className="col">
    <p>Type</p>
    <h4>Diesel</h4>
    </div>
    <div className="col">
    <p>Available</p>
    <h4>yes</h4>
    </div>
</div>
<div className="total">
    <p>Total</p>
    <p>$0.00 <span>USD</span></p>
</div>
<div className="btn">
    <button>
<Link>Confirm rent</Link>    </button>
</div>
        </div>
      </div>
    </Section>
  )
}
const Section = styled.section`
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
.container{
display: grid;
  grid-template-columns: repeat(2,1fr);
  height: 100vh;

.image{
    /* border: 1px solid black; */
    /* width: 50vw; */
    display: flex;
justify-content: center;
align-items: center;
    img{
        border-radius: 20px;
        height: 80vh;
        width: 50vh;
        /* object-fit: cover; */
    }
}
.content{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    width: 100%;
    padding:  3rem  ;
    height: 80vh;
    .title{
        h3{
            text-align: center;
            padding: 3px;
            font-weight: 400;
            color: black;
        }
    }
    form{
        .row{
            display: flex;
            flex-direction: column;
            label{
                text-align: center;
            padding: 3px;
            font-weight: 400;
            font-size: 13px;
            color: black;
            }
            input{
                border: 1px solid #E3E1D9 ;
                /* box-shadow: 0px 0px 0px 10px rgba(227,225,217,0.75); */
                padding: 5px;
                border-radius: 10px;
            }
        }
    }
    .info{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 1rem;
        padding: 5px;
        margin:10px;
        p{
            font-size: 10px;
            font-weight: 700;
            color:#B4B4B8 ;
            text-align: center;
            padding: 5px;
            
        }
        h4{
            font-size: 10px;
            text-align: center;
            font-weight: 700;
            color:#607274 ;
            padding: 5px;
        }
    }
    .total{
        display: flex;
        /* flex-direction: column; */
        justify-content: space-between;
        /* padding: 5px; */
        p{
            font-size: 15px;
            text-align: center;
            font-weight: 700;
            color:#454545 ;
            padding: 5px;
            span{
                font-size: 12px;
            text-align: center;
            font-weight: 500;
            color:#B7B7B7;
            }
        }

    }
    .btn{
        width: 100%;
        margin: 10px;
        button{
            width: 100%;
border: none;
padding: 7px;
border-radius: 10px;

        }
    }

}
}

`;