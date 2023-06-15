import React from 'react';
import "./Industrychart.css";
import Chart from "react-apexcharts"

const Industrychart = () => {
  return (
    <section>
        <div className='chart-box'>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='fw-bold'>Industries
              <br></br>Services</div>
            <div>US</div>
            <div>2023</div>
          </div>
          <div className='pt-4'>
            <Chart
            className="pie-chart"
            type="pie"
            Monochrome="true"
            width={450}
            // height={230}
            series={[2,9]}
            options={{
            
              labels: ["Present", "Absent","Present", "Absent"],
              colors: ["#1d1d1d", "#2c4d84","#1d1d1d", "#2c4d84"],
            }}
            />

          </div>
          
        </div>
    </section>
  )
}

export default Industrychart
