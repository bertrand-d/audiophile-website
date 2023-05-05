import Nav from "../components/Nav"

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer-content">
                <Nav isHeader = {false}/>
            </div>
        </footer>
    )
}