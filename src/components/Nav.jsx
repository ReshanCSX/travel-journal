import logo from '../images/logo.png'
export default function Nav(){
    return(
        <nav>
            <span><img src={logo} className="nav--logo" /></span>
            <p>travel journal.</p>
        </nav>
    )
}