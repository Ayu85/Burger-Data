import logo from '../assets/logo.png'
function Header(){
    return (
        <div className="header-bar">
            <div className="logo">
            <img src={logo} alt='logo'/>
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