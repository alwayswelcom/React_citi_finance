const Footer = () => {
    return (
        <div className="px-24 pt-24 pb-10 bg-darkblue text-white">
            <div className="flex items-center justify-between  children:w-1/4 children:h-80 children:text-left flex-wrap children: pb-35">
                <div className="">
                    <div className="text-5xl">ABOUT US</div>
                    <div className=" pb-2.5 border-b-4 w-60 border-solid border-orange  mb-12"></div>
                    <div className="font-body font-medium text-xl leading-6 text-clip">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet tortor velit iaculis massa in vitae feugiat sed. Mauris eu fermentum tellus nec justo, ac in arcu nisl. Adipiscing vestibulum, massa, amet, sed sit. Quis libero non hendrerit dignissim mauris cras commodo dictumst varius. Sed amet dui volutpat consectetur et. Ultrices tortor sodales est cursus. Vestibulum egestas elementum posuere sit orci semper nec.</p>
                    </div>
                    
                </div>
                <div className="">
                    <div className="text-5xl pb-2.5">IMPORTANT LINKS</div>
                    <div className="  border-b-4 w-60 border-solid border-orange mb-12"></div>
                    <div className="font-body font-medium text-xl leading-6">
                        <ul className="list-disc marker:text-orange children:marker:rounded">
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
                <div className="">
                    <div className="text-5xl  pb-2.5">
                        CONTACT US
                    </div>
                    <div className=" border-b-4 w-60 border-solid border-orange"></div>
                    <div className="font-body  font-medium text-xl leading-6  pt-12">
                        <ul className="contactinfo children:pb-10">
                            <li>
                                <a>
                                    <img src="svg/Location.svg"></img>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="svg/Phone.svg"></img>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="svg/Mail.svg"></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="font-body font-medium text-xl flex items-center text-left pt-24">
                        Follow us:
                    </div>
            <div className="justify-end flex items-center" >
                <img src="svg/APEX LOGO.svg"></img>
            </div>
        </div>

    )
}

export default Footer