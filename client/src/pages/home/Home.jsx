import { data } from "./data.js";
import "./home.css"
const Home =()=>{

    return(
<div>
<div className="herosection">
    <div className="herotext">
        <h2>order from us</h2>
        <p>we offer a variety of delicacies</p>
    </div>
    <div className="buttons">
        <div className="btn">
         <p>orders</p>
         </div>
        <div className="btn">
         <p>menu</p>
         </div>
    </div>

</div>
<div className="aboutus">
<div className="aboutheader">
    <h2>about us</h2>
    <h3>welcome</h3>
</div>
    <div className="aboutustext">
        <p> Ipsum no lorem et stet clita et nonumy. Ipsum magna invidunt labore amet diam et clita duo, sit accusam sit.</p>
    </div>
</div>
<div className="specials">
    <div className="specialheader">
        <h2>our weekly specials</h2>
        
    </div>
    <div className="thespecials">
{data.map((special)=>(
  <div className="specialcard" key={special.id}>
    <p>{special.imgurl}</p>
       <p>{special.foodTitle}</p>
        <p>{special.description}</p>
        <button className="order">order</button>
  </div>
))}
    </div>

    <div className="menu">
        <div className="menutitle">
            <h2>our menu</h2>

        </div>
        
        <div className="themenu">
{data.map((special)=>(
  <div className="menucard" key={special.id}>
    <p>{special.imgurl}</p>
       <p>{special.foodTitle}</p>
        <p>{special.description}</p>
    <button className="order">order</button>
  </div>
))}
    </div>
        
    </div>
</div>
</div>
 
    );

}
export default Home