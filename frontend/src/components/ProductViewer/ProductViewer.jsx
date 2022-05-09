import React from 'react';


const ProductViewer  = (props) => {
    return (
        <table>
            <thead>
                <th>SKU</th>
                <th>NLID</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Msrp</th>
                <th>Weight</th>
                <th>Sales</th>
                <th>Modify</th>
            </thead>
            {props.products.map((product) => {
                return(
                    <tr>
                        <td>{product.sku}</td>
                        <td>{product.nlid}</td>
                        <td>{product.description}</td>
                        <td>{product.cost}</td>
                        <td>{product.msrp}</td>
                        <td>{product.weight}</td>
                        <td>{product.sales}</td>
                        <td>{product.modify}</td>
                        <td><button onClick = {()=> props.delete(product.id)}>Delete Product</button></td>
                    </tr>
                );
            })}
        </table>
    );
}

export default ProductViewer; 
