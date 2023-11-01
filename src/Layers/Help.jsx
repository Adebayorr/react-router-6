import { NavLink, Outlet } from "react-router-dom";

const Help = () => {
    return ( 
        <div className="help">
            <h2 className="contact">Contact</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus expedita.</p>

            <div className="links">
                <NavLink to='faq'>View the FAQs</NavLink>
                <NavLink to='contact'>Contact Us</NavLink>
            </div>
            <Outlet />
        </div>
     );
}
 
export default Help;