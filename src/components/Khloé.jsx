import { useContext } from "react";
import NameContext from "../context/context";

const Khloé = () => {
    const lastname = useContext(NameContext);
    return ( <div>Khloé {lastname}</div> );
}
 
export default Khloé;