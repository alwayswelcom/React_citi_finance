import React from "react";
import './footer.css';



const Footer = () => {
    return (
        <div className="footer bg-darkblue">
            <div className="f_content">
                <div className="f_subcontent">
                    <div className="f_title">
                        ABOUT US
                    </div>
                    <div className="f_main_content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet tortor velit iaculis massa in vitae feugiat sed. Mauris eu fermentum tellus nec justo, ac in arcu nisl. Adipiscing vestibulum, massa, amet, sed sit. Quis libero non hendrerit dignissim mauris cras commodo dictumst varius. Sed amet dui volutpat consectetur et. Ultrices tortor sodales est cursus. Vestibulum egestas elementum posuere sit orci semper nec.</p>
                    </div>
                </div>
                <div className="f_subcontent">
                    <div className="f_title">IMPORTANT LINKS</div>
                    <div className="f_main_content">
                        <ul>
                            <li>
                                <a href="about">About us</a>
                            </li>
                            <li>
                                <a href="faq">FAQ</a>
                            </li>
                            <li>
                                <a href="login">Login</a>
                            </li>
                            <li>
                                <a href="register">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="f_subcontent">
                    <div className="f_title">
                        CONTACT US
                    </div>
                    <div className="f_main_content">
                        <ul className="contactinfo">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="f_follow">
                Follow us:
            </div>
            <div  className="f_logo" >
                <img src="svg/APEX LOGO.svg"></img>
            </div>
        </div>

    )
}

export default Footer