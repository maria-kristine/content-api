import Kim from "../components/Kim";

const Article = ({lastname}) => {
    return ( <article style={{border: "2px solid blue"}}>
        <Kim lastname={lastname}/>
    </article> );
}
 
export default Article;