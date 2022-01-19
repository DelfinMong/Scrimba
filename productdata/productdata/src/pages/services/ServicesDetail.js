import React from "react"
import {useParams} from 'react-router-dom'
import servicesData from '../services/ServicesData'

function ServiceDetail(props) {
    const {serviceId} = useParams()
    // console.log(serviceId)
    // AJAX call to get the info about the specified service
    // const Service = servicesData.find(service => service._id === serviceId)

    const thisServices = servicesData.find( service => service._id === serviceId)
    console.log(thisServices)
    
    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{thisServices.name} - ${thisServices.price}</h3>
            <p>{thisServices.description}</p>
        </div>
    )
}

export default ServiceDetail