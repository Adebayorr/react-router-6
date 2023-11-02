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
  
 

 export const careerDetailsLoader = async ({params}) => {

    const res = await fetch("http://localhost:4000/careers/" + params.id)

    return res.json()
 }

 export default CareerDetails;