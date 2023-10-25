import Link from "next/link";
const NavBar = () => {
return (
<nav className="navbar navbar-expand-lg bg-light">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
<Link className="nav-link" href={"/client"}>Home</Link>
</li>
</ul>
</nav>
);
};
export default NavBar;