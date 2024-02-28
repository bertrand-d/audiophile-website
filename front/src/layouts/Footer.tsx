import Nav from "../components/Nav"
import {ReactComponent as Facebook} from '../assets/icons/facebook.svg'
import {ReactComponent as Instagram} from '../assets/icons/instagram.svg'
import {ReactComponent as Twitter} from '../assets/icons/twitter.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content max-content">
                <Nav isInHeader={false} isInFooter={true} />
                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                        <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
                    </div>
                    <div className="footer-bottom-right">
                        <ul className="footer-social-list">
                            <li className="footer-social-list-item">
                                <Facebook/>
                            </li>
                            <li className="footer-social-list-item">
                                <Instagram/>
                            </li>
                            <li className="footer-social-list-item">
                                <Twitter/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}