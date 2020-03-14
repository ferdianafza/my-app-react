import React from 'react';
import axios from 'axios';

export default class UpdateProduct extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      images: [],
      product: "",
      name: "",
      description: "",
      price: "",
      size: "",
      color: "",
      inStock: ""
    }
  }

  componentDidMount() {
  	const { match: {params: { id } } } = this.props;
  	axios.get(`https://mystore41.herokuapp.com/api/products/${id}`)
      .then(res => {
        console.log(res.data.data);
        this.setState({id : res.data.data.attributes.id});
        this.setState({product: res.data.data.attributes});
        this.setState({name : res.data.data.attributes.name});
        this.setState({color : res.data.data.attributes.color});
        this.setState({description : res.data.data.attributes.description});
        this.setState({price : res.data.data.attributes.price});
        this.setState({size : res.data.data.attributes.size});
        this.setState({inStock : res.data.data.attributes.inStock});
        this.setState({images : res.data.data.attributes.images});

      })
  }

  handleChange = (even) => {
    this.setState({ [even.target.name]: even.target.value });
  }

  handleFile(e){
    let file = e.target.files[0]

    this.setState({file: file})
  }

  // handleUpload(e) {
  //   let file = this.state.file
  //   let name = this.state.name
  //   let description = this.state.description
  //   let color = this.state.color
  //   let size = this.state.size
  //   let inStock = this.state.inStock
  //   let price = this.state.price

  //   let formdata = new FormData()

  //   formdata.append('product[images][]', file)
  //   formdata.append('product[name]', name)
  //   formdata.append('product[description]', description)
  //   formdata.append('product[color]', color)
  //   formdata.append('product[size]', size)
  //   formdata.append('product[inStock]', inStock)
  //   formdata.append('product[price]', price)

  //   axios({
  //     url: `https://mystore41.herokuapp.com/api/stores/35/products/${this.state.id}`,
  //     method: "PUT",
  //     data: formdata
  //   }).then((res) => {
  //     console.log(res);
  //   })
  // }

  updateReportRequest = (even) => {

    let file = this.state.file
    let name = this.state.name
    let description = this.state.description
    let color = this.state.color
    let size = this.state.size
    let inStock = this.state.inStock
    let price = this.state.price

    let formdata = new FormData()

    formdata.append('product[images][]', file)
    formdata.append('product[name]', name)
    formdata.append('product[description]', description)
    formdata.append('product[color]', color)
    formdata.append('product[size]', size)
    formdata.append('product[inStock]', inStock)
    formdata.append('product[price]', price)


    axios(`https://mystore41.herokuapp.com/api/products/${this.state.id}`, {
      method: 'put',
      data: formdata,
      headers: {'Content-Type' : 'application/json'},
    }).then((response) => {
      alert('Product updated successfully');
      this.props.history.push(`/products`);
    })
  }




  render() {
    const { images, name, color, description, price, size, inStock } = this.state;
    return (
      <div>
       <label>
          Update Products<br />
          Name : <input type="text" name="name" value={name} onChange={this.handleChange} /><br />
          Description : <input type="text" name="description" value={description} onChange={this.handleChange} /><br />
          Price : <input type="text" name="price" value={price} onChange={this.handleChange} /><br />
          Size : <input type="text" name="size" value={size} onChange={this.handleChange} /><br />
          Stock : <input type="text" name="inStock" value={inStock} onChange={this.handleChange} /><br />
          Color: <input type="text" name="color"  value={color} onChange={this.handleChange} />
        </label>
          <div>
          {images.map(image =>
            // <p>{image.fileName}</p>
            <img width="500" heigth="400" src={image.imageUrl} />
          )}
          </div>
          <input type="file" multiple name="file" onChange={(e)=> this.handleFile(e)}/>
        <br />
          <button onClick={this.updateReportRequest}>Update</button>

      </div>
    )
  }
}
