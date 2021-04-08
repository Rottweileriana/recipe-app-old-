import {Link} from "react-router-dom"

const Navbar = () => {
    return (  
        <nav className = "navbar">
            <h1>Recept bok</h1>
            <div className="links">
                <Link to="/">Start</Link>
                <Link to="/recept.a-o" style={{
                    color:"white",
                    backgroundColor: "red",
                    borderRadius: "8px"
                }}>Recept A-Ö</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;