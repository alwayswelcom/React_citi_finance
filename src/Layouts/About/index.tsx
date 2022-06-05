import ReactPlayer from "react-player"

const About = () => {
    return (
        <div>
            <div className='bg-aboutpage w-full flex justify-center items-center bg-cover'>
                <div className='text-white font-bold text-6xl py-[150px] uppercase'>about us</div>
            </div>
            <div className="px-[86px] pt-28">
                <div className="flex justify-center">
                    <div className='text-left w-1/2 pt-28  pb-64'>
                        <p className='font-body text-2xl leading-8 text-darkblue pb-3.5 uppercase'>about our company</p>
                        <div className="  border-b-4 w-3/4 border-solid border-orange mb-12"></div>
                        <p className='text-md-2 font-bold text-5xl leading-10 text-darkblue'>The best choice for your<br /><br /><span>succesful investment!</span></p><br /><br />
                        <p className='text-xl leading-6 w-4/5 pb-32 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non in vitae ultricies integer leo nulla. Nunc etiam velit elit, magna nibh vitae. Nulla pulvinar dignissim pretium sit. Morbi laoreet sagittis, nunc in tellus orci. Tortor sed phasellus mattis arcu vestibulum. Fermentum scelerisque purus morbi fusce enim ornare fringilla. Sed eu vulputate tortor turpis proin erat.</p>
                        <button className="bg-orange w-52 h-14 rounded text-white">LEARN MORE</button>
                    </div>
                    <div className="flex w-1/2">
                        <div className="pr-11">
                            <div className=' relative'>
                                <img src={`./img/img2.png`} alt="img2" />
                                <p className="absolute bottom-2 left-1 bg-orange w-[248px] h-[110px] flex items-center justify-center rounded text-white font-extrabold text-3xl uppercase">team work</p>
                            </div>
                        </div>
                        <div className="pt-28">
                            <div className='relative'>
                                <img src={`./img/img1.png`} alt="img1" />
                                <p className="absolute top-0 right-1 bg-orange w-[248px] h-[110px] flex items-center justify-center rounded text-white font-extrabold text-3xl uppercase">30.000+</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-left pb-2">
                    <p className="text-darkblue font-bold text-2xl pb-2.5">Investments will change our future. Don't be left out</p>
                    <p className="font-medium text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non in vitae ultricies integer leo nulla. Nunc etiam velit elit, magna nibh vitae. Nulla pulvinar dignissim pretium sit. Morbi laoreet sagittis, nunc in tellus orci. Tortor sed phasellus mattis arcu vestibulum. Fermentum scelerisque purus morbi fusce enim ornare fringilla. Sed eu vulputate tortor turpis proin erat.</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-1/2">
                    <img src={`./img/img4.png`} alt="img4" />
                </div>
                <div className="w-1/2 text-left">
                    <div>
                        <p className="font-medium text-xl">Improve your business with us !</p>
                        <span className="font-bold text-[26px] text-darkblue">Cutting-edge platform with extensive infrastructure</span>
                    </div>
                    <div className="font-medium text-xl pt-4 pb-12  pr-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget fermentum urna faucibus nibh cursus sodales id neque. Convallis fames convallis nunc, etiam viverra.
                    </div>
                    <div>
                        <div className="flex justify-around items-center">
                            <div className="w-1/2 pr-4">
                                <p className="text-orange font-medium text-2xl">Registered Company</p>
                                <p className="font-medium text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className="w-1/2 px-4">
                                <p className="text-orange font-medium text-2xl">User-Friendly</p>
                                <p className="font-medium text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center py-12">
                            <div className="w-1/2 pr-4">
                                <p className="text-orange font-medium text-2xl">Investment</p>
                                <p className="font-medium text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className="w-1/2 px-4">
                                <p className="text-orange font-medium text-2xl">Fast Transaction</p>
                                <p className="font-medium text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={`./img/img5.png`} alt="img5" className="w-full" />
            </div>
            <div className="flex items-center justify-center pb-20">
                <ReactPlayer url='video/gen_vid.mp4' playing={true} width="100%" height="450px" volume={0.5} loop={true} controls={true} />
            </div>
            <div className="pb-14 px-11">
                <p className="uppercase text-darkblue font-bold text-2xl text-left pb-4">LIVE DIGITAL ASSETS PRICE</p>
                <div className="border-b-3 w-1/4 border-solid border-orange mb-12"></div>
                <img src={`./img/img6.png`} alt="img6" className="w-full" />
            </div>
        </div>
    )
}

export default About