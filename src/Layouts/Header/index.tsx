import { useState } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Select from 'react-select'
import SeletBox from "../../Component/SelectBox";



const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSelectLang, setIsSelectLang] = useState(false);

    return (
        <div className="relative">
            <Router>
                <div className="xl:flex items-center justify-between bg-darkblue p-9 sticky top-0 md:hidden">
                    <div className="">
                        <img src="./svg/APEX LOGO.svg"></img>
                    </div>
                    <div className="text-white">

                        <ul className="flex items-center justify-end non-italic font-title font-normal text-xl leading-6 children:px-11 uppercase">
                            <li><a href="/">HOME</a></li>
                            <li><a href="/about">ABOUT US</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li onClick={() => setIsSelectLang(!isSelectLang)}>
                                Select language
                                {isSelectLang && <SeletBox items={options} />}
                            </li>
                            <li><a href="/login"><button className="bg-orange w-52 h-14 rounded">LOGIN</button></a></li>
                        </ul>

                    </div>
                </div>
                <div className="md:flex xl:hidden bg-darkblue justify-around items-center">
                    <div className="">
                        <img src="./svg/APEX LOGO.svg"></img>
                    </div>
                    <div className="w-[94px] h-[83px]" onClick={() => setIsNavOpen(!isNavOpen)}>
                        <img src="./svg/Menu1.svg"></img>
                    </div>
                </div>
                {isNavOpen && (
                    <div className="bg-darkblue absolute t-24 w-full z-40">
                        <ul className="flex-row items-center justify-end non-italic font-title font-normal text-xl leading-6 children:py-4">
                            <li><a href="/">HOME</a></li>
                            <li><a href="/about">ABOUT US</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li onClick={() => setIsSelectLang(!isSelectLang)}>
                                Select language
                                {isSelectLang && <SeletBox items={options} />}
                            </li>
                            <li><a href="/login"><button className="bg-orange w-52 h-14 rounded">LOGIN</button></a></li>
                        </ul>
                    </div>
                )}
            </Router>
        </div>
    )

}

export default Header