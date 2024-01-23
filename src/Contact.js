import Menu from "./Menu";
import Slidebar from "./Slidebar";
import Footer from "./Footer";
function Contact() {
    return (
        <>
            <Menu />
            <div id="wrapper">
                <div id="page-bgtop"></div>
                <div id="page">
                    <div><img src="images\industrial-PVF.jpg" width="920" height="300" alt="" /></div>
                    <div id="content">
                        <div className="post">
                            <h2 className="title"><a href="#">This is Contact Page ... </a></h2>
                            <div>&nbsp;</div>
                            <div className="entry">
                                <p>Hello</p>
                            </div>
                        </div>
                        <div>&nbsp;</div>
                    </div>
                    <Slidebar />
                    <div>&nbsp;</div>
                </div>
                <div id="page-bgbtm"></div>
            </div>
            <Footer />
        </>
    )
}
export default Contact;