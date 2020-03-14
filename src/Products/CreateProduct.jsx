import React, { Component } from 'react' ;
import axios from 'axios';


export default class CreateProduct extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      file: null
	    };
	  }

	handleFile(e){
		let file = e.target.files[0]

		this.setState({file: file})
	}

	handleChange = event => {
	    this.setState({ [event.target.name]: event.target.value });
	}

	handleUpload(e) {
		let file = this.state.file
		let name = this.state.name
		let description = this.state.description
		let color = this.state.color
		let size = this.state.size
		let instock = this.state.instock
		let price = this.state.price

		let formdata = new FormData()

		formdata.append('product[images][]', file)
		formdata.append('product[name]', name)
		formdata.append('product[description]', description)
		formdata.append('product[color]', color)
		formdata.append('product[size]', size)
		formdata.append('product[instock]', instock)
		formdata.append('product[price]', price)

		axios({
			url: `https://mystore41.herokuapp.com/api/stores/35/products`,
			method: "POST",
			data: formdata
		}).then((res) => {
			console.log(res);
			alert('Product Created!')
			this.props.history.push(`/products`);
		})
	}

	render() {
	  return (
		  <div>
			<h1>Create Products</h1>

			<form>
				<div>
					<br />
					<label>
						Product Name
					</label>
					<input type="text" name="name" onChange={this.handleChange} /><br />
					<label>
						Product Description
					</label>
					<input type="text" name="description" onChange={this.handleChange} /><br />
					<label>
						Product Color
					</label>
					<input type="text" name="color" onChange={this.handleChange} /><br />
					<label>
						Product Size
					</label>
					<input type="number" name="size" onChange={this.handleChange} /><br />
					<label>
						Product Stock
					</label>
					<input type="text" name="instock" onChange={this.handleChange} /><br />
					<label>
						Product Price
					</label>
					<input type="number" name="price" onChange={this.handleChange} /><br />
					<input type="file" multiple name="file" onChange={(e)=> this.handleFile(e)}/>
				</div>

				<button type="button" onClick={(e) => this.handleUpload(e)}>
					Upload
				</button>
			</form>
		  </div>
		);
	}
}