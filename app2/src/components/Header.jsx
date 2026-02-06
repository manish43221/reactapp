export default function Header(props){
    return(
    <header>
        <h1>{ props.title}</h1>
    <nav>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
    </nav>
    </header>
    )
}