import { Link, useLocation } from "react-router-dom";
export default function List(props){
      const location = useLocation()
      const path = location.pathname
    return(
        <li className={`group ${path === props.to ? 'border-b border-blue-800 text-blue-800 font-bold' : null }`}>
        <Link to={props.to}>{props.name}</Link>
        <hr className="w-0 group-hover:w-full group-hover:text-blue-800 group-hover:text-2xl group-hover:border group-hover:transition-width group-hover:duration-1000"></hr>
        </li>
    )
}