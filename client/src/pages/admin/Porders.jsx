
import {data} from "../home/data.js"
const Porders=()=>{
    return(
<div className="placed">
{data.map((special)=>(
  <div className="menucard" key={special.id}>
    <p>{special.imgurl}</p>
       <p>{special.foodTitle}</p>
        <p>{special.description}</p>
    <p>awaiting delivery</p>
  </div>
))}
    </div>
        

    );
}
export default Porders