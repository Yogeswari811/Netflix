import { Link } from "react-router-dom"
function Movies(props){
    return(
        <div>
           {
            props.a.map(function(el){
                return(
                <Link to={"/mov/"+el.id} className="lik"> <h1>{el.movie}</h1> </Link> 
                )
            })
           }
        </div>
    )
}
export default Movies