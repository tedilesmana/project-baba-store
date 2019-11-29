import React, { Component } from 'react';
import CardProduct from '../component/home/CardProduct';
import BtnCard from '../component/home/BtnCard';
import BtnPill from '../component/reusable/BtnPill';
import axios from 'axios';

class VHome extends Component {


constructor(props) {
        super(props);
        this.state = {
          post:[]
        }
    }

componentDidMount(){
  axios.get('http://localhost:3004/posts')
  .then((result) => {
      this.setState({
          post:result.data
      })
  })

  console.log(this.state.post);

  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  // .then(json => console.log(json))
}
// super(props)

	// this.state = {
		// name:''
	// }

	// this.onSubmit = this.onSubmit.bind(this);
	// this.handleChange = this.handleChange.bind(this);
// }

  render() {
    return (
      <div className="col-md-12 pl-5 pr-5 pt-3">
      {
        this.state.post.map(post => {
          return <CardProduct key={post.id} title={post.title} desc={post.body} />
        })
      }
        <div className="row">
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
  				<div className="col-md-2 p-2" id="card">
		            <CardProduct />
		            <BtnCard />
                <BtnPill />
    			</div>
        </div>
      </div>
    );
  }
}

export default VHome;
