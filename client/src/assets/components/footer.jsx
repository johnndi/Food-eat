import { FaPhoneAlt } from "react-icons/fa";
import "./footer.css"
import { MdOutlineAlternateEmail } from "react-icons/md";
const Footer =()=>{
    return(
        <div className="footer">
        <h3>contact us</h3>
            <div className="contact">
                
              
                <p> to place orders call {<FaPhoneAlt />} 05752857572 </p>
                <p>email us {<MdOutlineAlternateEmail/>} foodeat@gmail com</p>

            </div>
            <div className="copy">
                <p>&copy ; copyright.john ndirangu. all rights reserved</p>
            </div>
            
        </div>
    )
}
export default Footer