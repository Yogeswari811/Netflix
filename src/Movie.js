import { Link, useParams } from "react-router-dom"
import jailer from "./jailer.jpg"
import lgm from "./lgm.jpg"
import mave from "./mave.jpg"
import kusi from "./kusi.jpg"
import  maam from "./maam.jpg"
import doc from "./doc.jpg"
import beast from "./beast.jpg"
import thunivu from "./thunivu.jpg"
import tt from "./tt.jpg"

function Movie(props){
    var id=useParams()
    var sel= props.a.filter(function(el){
        if(el.id==id.id){
           return true
        }
        
       })
       

    return(
        <div>
        <div className="name">
            <nav className="movee">
            <h1>{sel[0].dis}</h1>
            <h1> {sel[0].hero} .. {sel[0].heroin}..</h1>
            <button className="btn">WatchNow</button>  <button className="btn">Play</button>
            </nav>
            <img className="mimage" src={sel[0].image} alt="" />
        </div>
        <div className="movielist">
            <ul className="mlistone">
         <li><Link> <img className="mli" src={jailer}/></Link></li>
         <li><Link> <img className="mli"  src={doc}/></Link></li>
         <li><Link> <img   className="mli"src={beast}/></Link></li>
          <li><Link> <img  className="mli" src={thunivu}/></Link></li>    
            </ul>
        
        </div>
        <div className="movielisttwo">
            <ul className="mlisttwo">
         <li><Link> <img className="mli" src={tt}/></Link></li>
         <li><Link> <img className="mli"  src={maam}/></Link></li>
         <li><Link> <img   className="mli"src={mave}/></Link></li>
          <li><Link> <img  className="mli" src={lgm}/></Link></li>    
            </ul>
        
        </div>
 </div>
    )
}
export default Movie