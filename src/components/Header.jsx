import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="overlay">
                <div className="header-content">
                    <h1 className="header-title">Bienvenidos a Milu Boutique</h1>
                    <p className="header-subtitle">Explorá nuestros productos únicos hechos con amor 💖</p>
                    <a href="#productos" className="header-button">Ver productos</a>
                </div>
            </div>
        </header>

    );
}

export default Header;
