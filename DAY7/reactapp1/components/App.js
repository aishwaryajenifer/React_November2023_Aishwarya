return (
    <div classname="App">
        <BrowserRouter>
        <ul>
            <li>
                <Link to="/">Home</Link>

            </li>
            <li>
                <Link to="/About">About Us</Link>
            </li>
        </ul>
        <routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
        </routes>
        </BrowserRouter>
    </div>
);