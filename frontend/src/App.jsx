// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from 'axios';
import React from "react";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProductViewer from "./components/ProductViewer/ProductViewer";
import SearchBar from "./components/SearchBar/SearchBar";
import AddProduct from "./components/AddProduct/AddProduct";
import { ExportReactCSV } from "./components/ExportToCsv/ExportToCsv";
import BestSellingGraph from "./components/BestSellingGraph/BestSellingGraph";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { Component } from "react";
import { render } from "react-dom";
import Chart from "react-google-charts";



class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          data: [],
          products : [],
          filteredProducts : [],
          fileName: 'Products'
        }
  }
   
  componentDidMount(){
    this.getProducts();
  }

  async getProducts(){
    let response = await axios.get('http://127.0.0.1:8000/api/products/');
    console.log(response);
    this.setState({
        products: response.data,
        filteredProducts: response.data,
        data: response.data,
        
    });
  }

  // Need to figure out a better way to use this for AUTHORIZED users only
  async deleteProduct(ID){
    const jwt = localStorage.getItem('token');
    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNTQ0MDI5LCJpYXQiOjE2NTE2ODAwMjksImp0aSI6IjVhY2MyZmFiNzdjODQwMGNhOWIxMTc1NjEwNzVhMTc4IiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImZpcnN0X25hbWUiOiIifQ.hh6IPj4AcBj4ehv4tDZ5wirKn4xF4G4qfVJk_NKuZfI'
    let response = await axios.delete(`http://127.0.0.1:8000/api/products/edit/${ID}/`,{headers: {Authorization: 'Bearer ' + token}});
           console.log(response)
        window.location.reload();
    }
  
    

    filterProduct2 = (searchTerm) =>{
      if(searchTerm == ''){
          this.setState({
              filteredProducts : this.state.products
          })
      }
      else{
          let filteredResults = this.state.products.filter(product => {
            //search by partial SKU
            let productString =product.sku.toLowerCase()
            let userProductSearch = searchTerm.toLowerCase()
            if (productString.includes(userProductSearch)){
                return product
            }
            // Currently working for #s only the initial NL isn't filtering
            let nlidString = product.nlid
            let userNlidSearch = searchTerm.toLowerCase()
            if(nlidString.includes(userNlidSearch)){
                return product
              }
            //search by Modify true or false 
            let modifyString = product.modify.toString()
            let userModifySearch = searchTerm.toLowerCase()
            if(modifyString.includes(userModifySearch)){
                return product
              }
          }); 
          this.setState({
              filteredProducts : filteredResults
          })
        }
    
  }
  filterProducts = (arrayOfProducts) => {
      console.log(arrayOfProducts)
      this.setState({
          products: arrayOfProducts
      })
  }  



  render(){
    return (
      <div className = 'center'>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage  />
                <ExportReactCSV csvData={this.state.filteredProducts} fileName={this.state.fileName}/>
                <BestSellingGraph data={this.state.data}/>
                <AddProduct />
                <SearchBar newFilter={this.filterProduct2} search={this.state.products} filterTrigger= {this.filterProducts}/>
                <ProductViewer products = {this.state.filteredProducts} delete ={this.deleteProduct}/>
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    );  
  }
}


export default App ; 
