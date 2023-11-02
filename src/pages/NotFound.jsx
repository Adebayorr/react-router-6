import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h3 className="error">404</h3>
            <p>This page does not exist</p>
            <Link to="/">Back to Homepage</Link>
        </div>
     );
}
 
export default NotFound;