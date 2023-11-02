import {NavLink, Outlet} from "react-router-dom"
import BreadCrumbs from "../Components/BreadCrumbs";

const RootLayer = () => {
    return ( 
        <>
            <div className="root-layer">
                <nav>
                    <h2>JobaRouter</h2>
                    <div className="links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="help" >Help</NavLink>
                        <NavLink to="/careers">Careers</NavLink>
                    </div>
                </nav>
                <BreadCrumbs />
            </div>
            <main>
                <Outlet />
            </main>
        </>
     );
}
 
export default RootLayer;