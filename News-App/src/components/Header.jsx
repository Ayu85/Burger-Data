import logo from '../assets/logo.png'
function Header() {
    return (
        <div className="header-bar">
            <div className="logo">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-design-template-313c490708614645a9c2b3ea001baf33_screen.jpg?ts=1676407444" alt='logo' />
            </div>
            <div className="nav-buttons">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>

                </ul>
            </div>
            <div className='log-btn-container'>
                <button>Login</button>
            </div>

        </div>
    )
}
export default Header;