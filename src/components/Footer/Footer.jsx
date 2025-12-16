import "./Footer.css";
export default function Footer() {
    return(
        <section className="footer">
            <p className="footer-info">
                &copy; {new Date().getFullYear()} Jackony. All Rights Reserved
            </p>
        </section>
    )
}