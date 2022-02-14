import React from "react"
import {Link, useLocation} from 'react-router-dom'
import servicesData from '../services/ServicesData'

function ServicesList() {
  // const location = useLocation()
  // console.log(location)
    const services = servicesData.map( service => (
      <h3 key={service._id}>
        <Link to={`/services/${service._id}`}> 
        {service.name}</Link> - ${service.price}
      </h3> 
    ))
 
    return (
        <div>
            <h1>Services List Page</h1>
            {services}
        </div>
    )
}

export default ServicesList