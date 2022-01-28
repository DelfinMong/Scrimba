import React from "react"
import {useParams, useHistory} from 'react-router-dom'
import servicesData from '../services/ServicesData'

function ServiceDetail(props) {
    const {serviceId} = useParams()
    const history = useHistory()
    // console.log(serviceId)
    console.log(history)
    // AJAX call to get the info about the specified service
    // const Service = servicesData.find(service => service._id === serviceId)

    const thisServices = servicesData.find( service => service._id === serviceId)
    console.log(thisServices)
    
    function handleClick() {
        console.log("Submitting...")
        setTimeout(() => {
            history.push("/services")
        }, 2000)
    }
    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{thisServices.name} - ${thisServices.price}</h3>
            <p>{thisServices.description}</p>
            <button onClick={handleClick}>Go back to all services</button>
        </div>
    )
}

export default ServiceDetail