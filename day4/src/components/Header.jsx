export default function Header({ title, color, year }) {
    return (
        <header>
            <h1 style={{ color }}>{title} {year}</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </nav>
        </header>
    )
}