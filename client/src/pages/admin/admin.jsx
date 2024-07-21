import { Link, } from "react-router-dom";
import "./admin.css"
const Admin=()=>{
    return(
<div>

    <div className="admin">
    <div className="dashboard">
        <p>dashboard</p>
        <Link to="/Porders">placed orders</Link>
        <Link to="/Addmenu">add to menu</Link>
        <Link to="">add specials</Link>
      
    </div>
    <div className="contents">
        <p>contents</p>
    </div>
    </div>
    
        
    
</div>
    );
}
export default Admin