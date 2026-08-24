import "./Header.css"

const Header = (props) => {
    console.log(props);

    return (
        <>
            <header className="header-pizzaria">
                <h1>{props.titleHeader}</h1>
                <p>{props.textHeader}</p>
            </header>
            <hr className="divider" />
        </>
    )
}

export default Header;