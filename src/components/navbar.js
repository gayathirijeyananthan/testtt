import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/header">header</Link>
                <Link to="/footer">footer</Link>
                <Link to="/section">section</Link>
            </nav>
        </>
    )
}

export default Nav;