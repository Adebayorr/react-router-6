import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {

    const [user, setUser] = useState("Harry")

    if (!user) {
        return <Navigate to="/" replace="true"/>
    }
    return ( 
        <>
            <div className="about">
            <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reprehenderit, totam natus, harum quidem 
                    error ducimus aliquid laborum aliquam, impedit qui voluptatibus id eum corporis voluptate. 
                    Labore autem cumque eos?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reprehenderit, totam natus, harum quidem 
                    error ducimus aliquid laborum aliquam, impedit qui voluptatibus id eum corporis voluptate. 
                    Labore autem cumque eos?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In reprehenderit, totam natus, harum quidem 
                    error ducimus aliquid laborum aliquam, impedit qui voluptatibus id eum corporis voluptate. 
                    Labore autem cumque eos?
                </p>

                <button onClick={() => setUser(null)}>Log Out</button>
            </div>
        </>
     );
}
 
export default About;