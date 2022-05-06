// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from 'axios';

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProductViewer from "./components/ProductViewer/ProductViewer";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { render } from "react-dom";
import { Component } from "react";


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          products : [],
          filteredProducts : []
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
        filteredProducts: response.data
        
    });
 }

  async deleteProduct(ID){
    let response = await axios.delete(`http://127.0.0.1:8000/api/products/${ID}/`);
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
        <SearchBar newFilter={this.filterProduct2} search={this.state.products} filterTrigger= {this.filterProducts}/>
        <ProductViewer products = {this.state.filteredProducts} delete ={this.deleteProduct}/>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
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
