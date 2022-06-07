import Kourtney from "../components/Kourtney";
import Article from "./Article";
import Wrapper from "./Wrapper";

const Main = ({lastname}) => {
    return ( <div>
        <Wrapper>
            <Article lastname={lastname}/>
            <Kourtney lastname= {lastname}/>
        </Wrapper>
    </div> );
}
 
export default Main;