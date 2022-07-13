import './styles.css'
import logo from '../../assets/img/logo.svg'


function Header(){
    return(
        <>
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="dsmeta"></img>
                <h1>DsMeta</h1>
                <p>
                    Desenvolvido por 
                    <a href="">p.henriquee.s</a>
                </p>

            </div>
        </header>
        
        </>
    )
}

export default Header