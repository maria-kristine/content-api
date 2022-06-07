import Rob from "../components/Rob";


const Header = ({lastname}) => {
  return (
    <div style={{border: "1px solid red"}}>
      <Rob lastname={lastname}/>
    </div>
  );
};

export default Header;
