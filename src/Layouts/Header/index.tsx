import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex items-center justify-around bg-darkblue p-9 sticky top-0">
            <div className="">
                <img src="./svg/APEX LOGO.svg"></img>
            </div>
            <div className="text-white">
                <ul className="flex items-center justify-center non-italic font-title font-normal text-xl leading-6 children:pr-[90px]">
                    <li>
                        HOME
                    </li>
                    <li>ABOUT US</li>
                    <li>FAQ</li>
                    <li>SELET LANGUAGE</li>
                    <li><button className="bg-orange w-52 h-14 rounded">LOGIN</button></li>
                </ul>
            </div>
        </div>
    )

}

export default Header