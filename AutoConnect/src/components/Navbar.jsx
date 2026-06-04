function Navbar() {
    return (
        <nav className="navbar">
            <h1>AutoConnect</h1>

            <div>
                <a href="#">Home</a>{" "}
                <a href="#">About Us</a>{" "}
                <a href="#">Find Mechanics</a>{" "}
            </div>

            <div>
                <button>Find Help</button>
                <button>Emergency</button>
            </div>
        </nav>
    );
}

export default Navbar;