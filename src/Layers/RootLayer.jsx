import {NavLink, Outlet} from "react-router-dom"

const RootLayer = () => {
    return ( 
        <>
            <div className="root-layer">
                <nav>
                    <h2>JobaRouter</h2>
                    <div className="links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </div>
                </nav>
            </div>
            <main>
                <Outlet />
            </main>
        </>
     );
}
 
export default RootLayer;