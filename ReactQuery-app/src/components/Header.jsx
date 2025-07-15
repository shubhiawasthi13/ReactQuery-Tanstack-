import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/data">Fetch Data</Link>
    </nav>
  );
};

export default Header;
