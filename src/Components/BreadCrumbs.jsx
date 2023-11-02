import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {

    const location = useLocation()

    let currentLocation = ""

    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== "")
    .map(crumb => {
        currentLocation += `/${crumb}`
        return (
            <div className="crumb" key={crumb}>
                <Link to={currentLocation}>{crumb}</Link>
            </div>
        )
    })
       
    return ( 
        <div className="breadcrumbs">
            {crumbs}
        </div>
     );
};
 
export default BreadCrumbs;