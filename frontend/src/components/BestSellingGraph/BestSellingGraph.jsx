import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import React from "react";





const BestSellingGraph = (props) => {

    const [data,setData] = useState([]);

    function generateGraph() {
        console.log(props.data)
        let designs = props.data.map(design => {
            return design.design
        });

        let distinctDesigns = [...new Set(designs)]

        
        let designArrays = distinctDesigns.map(design => {
            let total = 0 
            props.data.map(el=>{
                if(el.design == design){
                    total += el.sales
                }
            })
           
            return [design, total, ""]
      
        });

        const dataValue = [
            ["Design", "Total sales", { role: "style" }],
        ...designArrays   
        ];
        console.log(dataValue)
        setData(dataValue)





    }
    useEffect(()=>{
        generateGraph()
    },[props.data])

    return ( 
        <div>
            <h1>
                <nav>
                    <a class="navbar-brand"><span class="grey">Most Sales </span> <span class="purple">By Design</span></a>
                </nav>
            </h1>
            <Chart chartType="ColumnChart" width="100%" height="200px" data={data} />
            
        </div>
        
            )
}

export default BestSellingGraph;