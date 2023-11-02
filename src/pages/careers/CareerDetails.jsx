import { useLoaderData } from "react-router-dom";

 const CareerDetails = () => {
    const career = useLoaderData()
    return ( 
        <div className="career-details">
            <h2>Career details for {career.title}</h2>
            <p>Starting Salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <p>{ career.description}</p>
        </div>
     );
 }
  
 

 // eslint-disable-next-line react-refresh/only-export-components
 export const careerDetailsLoader = async ({params}) => {

    const res = await fetch("http://localhost:4000/careers/" + params.id)
    if (!res.ok) {
        throw Error("Could not fetch career details")
    }
    return res.json()
 }

 export default CareerDetails;