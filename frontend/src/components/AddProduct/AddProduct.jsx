import { Component } from 'react';
import axios from 'axios';
import React from 'react';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sku: '',
            nlid:'',
            description:'',
            cost:'',
            msrp:'',
            weight:'',
            sales:'',
            modify:''
          }
    }


    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.addProduct(this.state)
    }
    

    async addProduct(){
        const product = {
            sku: this.state.sku,
            nlid: this.state.nlid,
            description: this.state.description,
            cost: this.state.cost,
            msrp: this.state.msrp,
            weight: this.state.weight,
            sales: this.state.sales,
            modify: this.state.modify,
        }
        try{
            // Need to figure out a better way to use this for AUTHORIZED users only
            const jwt = localStorage.getItem('token');
            let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNTQ0MDI5LCJpYXQiOjE2NTE2ODAwMjksImp0aSI6IjVhY2MyZmFiNzdjODQwMGNhOWIxMTc1NjEwNzVhMTc4IiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImZpcnN0X25hbWUiOiIifQ.hh6IPj4AcBj4ehv4tDZ5wirKn4xF4G4qfVJk_NKuZfI'
            let response = await axios.post('http://127.0.0.1:8000/api/products/create/',product,{headers: {Authorization: 'Bearer ' + token}});
            console.log(response)
            window.location.reload();
        }
        catch{
            console.log("Unsuccessful Attempt to Add new Product");
        }
    }
    render() { 
        return (
            <div className="center">
                <br/>
                 <h1>
                    <nav>
                        <a class="navbar-brand"><span class="purple">Add to </span> <span class="grey">Products</span></a>
                    </nav>
                 </h1>
                <br/>               
                <form onSubmit = {this.handleSubmit}>
                    <table>
                                <th>SKU</th>
                                <th>NLID</th>
                                <th>Description</th>
                                <th>Cost</th>
                                <th>MSRP</th>
                                <th>Weight</th>
                                <th>Sales</th>
                                <th>Modify</th>
                            <tr>
                                <td><input type = "text" size = "40" name = "sku" value={this.state.sku} onChange= {this.handleChange} placeholder="SKU"/></td>                          
                                <td><input type = "text" name = "nlid" value={this.state.nlid} onChange= {this.handleChange}placeholder="NLID"/></td>                         
                                <td><input type = "text" name = "description" value={this.state.description} onChange= {this.handleChange}placeholder="Product Description"/></td>                          
                                <td><input type = "text" name = "cost" value={this.state.cost} onChange= {this.handleChange}placeholder="Cost"/></td>  
                                <td><input type = "text" name = "msrp" value={this.state.msrp} onChange= {this.handleChange}placeholder="MSRP"/></td>
                                <td><input type = "text" name = "weight" value={this.state.weight} onChange= {this.handleChange}placeholder="Weight"/></td> 
                                <td><input type = "text" name = "sales" value={this.state.sales} onChange= {this.handleChange}placeholder="Sales"/></td>               
                                <td><input type = "text" name = "modify" value={this.state.modify} onChange= {this.handleChange}placeholder="Modify T/F"/></td>
                                <td><button type = "submit" value = "Add Product">Add Product </button></td>
                            </tr>                
                    </table>
                   
                </form>
            </div>
         );
    }
}
 
export default AddProduct;