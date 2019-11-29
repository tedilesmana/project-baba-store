import React from 'react';
import '../../style/CardProduct.css';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText } from 'mdbreact';

const CardProduct = (props) => {
  return (
      <MDBCard>
        <MDBCardImage id="img-card" className="img-fluid" src={require('../../assets/img/product-1.png')} waves />
        <MDBCardBody>
          	<MDBCardText className="">
            <b>{props.desc}</b>
            <br/>
            Harga: Rp.{props.title}-
          	</MDBCardText>
        </MDBCardBody>
      </MDBCard>
  )
}

export default CardProduct;