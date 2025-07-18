import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/data">Fetch Data</Link>
      <Link to="/inf-data">Infinite-DataScrolling</Link>
    </nav>
  );
};

export default Header;
