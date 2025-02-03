import Nav from "./Nav"
import NavMobile from "./NavMobile"

const Header = () => {
    return (
        <div className="sticky top-0 z-10 h-fit font-size">
            <Nav />
            <NavMobile />
        </div>
    );
}

export default Header
