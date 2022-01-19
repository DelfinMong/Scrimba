import React from "react"
import servicedata from '../services/ServicesData'

function ServicesList() {
    const service = servicedata.map( service => (
      <h1>{service.name} - ${service.price}</h1>
    ))
 
    return (
        <div>
            <h1>Services List Page</h1>
            {service}
        </div>
    )
}

export default ServicesList