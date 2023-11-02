import { useLoaderData , Link} from "react-router-dom";

const Careers = () => {
    const careers = useLoaderData()
    return ( 
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
     );
}
 
export default Careers;


// eslint-disable-next-line react-refresh/only-export-components
export const careersLoader = async () => {
    const res = await fetch("http://localhost:4000/careers")

    if (!res.ok) {
        throw new Error("Cannot fetch careers data from the server")
    }
    return res.json()
}