import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
            <div className="xl:flex items-center justify-between bg-darkblue p-9 sticky top-0 md:hidden">
                <div className="">
                    <img src="./svg/APEX LOGO.svg"></img>
                </div>
                <div className="text-white">
                    <Router>
                        <ul className="flex items-center justify-end non-italic font-title font-normal text-xl leading-6 children:px-11 uppercase">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/about">ABOUT US</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li onClick={() => setIsSelectLang(!isSelectLang)}>
                                select language
                                {isSelectLang && <SeletBox items={options} />}
                            </li>
                            <li><Link to="/login"><button className="bg-orange w-52 h-14 rounded">LOGIN</button></Link></li>
                        </ul>
                    </Router>
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
                <div className="bg-darkblue absolute t-24 w-full">
                    <ul className="flex-row items-center justify-end non-italic font-title font-normal text-xl leading-6 children:py-4">
                        <li>
                            HOME
                        </li>
                        <li>ABOUT US</li>
                        <li>FAQ</li>
                        <li>SELET LANGUAGE</li>
                        <li><button className="bg-orange w-52 h-14 rounded">LOGIN</button></li>
                    </ul>
                </div>
            )}
        </div>
    )

}

export default Header