import ReactPlayer from 'react-player'

import Sticky from "../../Component/Sticky"
import StickyMsg from './message.json'
import Images from './images.json'

const Home = () => {
    return (
        <div className='bg-bkimg bg-no-repeat bg-contain'>
            <div className='text-left w-1/2 pt-80 pl-36 pb-64'>
                <p className='font-body text-2xl leading-8 text-darkblue pb-3.5 uppercase'>WELCOME TO APEX BITCOINS GLOBAL</p>
                <div className="  border-b-4 w-3/4 border-solid border-orange mb-12"></div>
                <p className='text-md-2 font-bold text-5xl leading-10 text-darkblue'>Our investment focus is to your <br /><br /><span className='text-orange'>Satisfiction</span></p><br /><br />
                <p className='text-xl leading-6 w-4/5 pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis leo consequat non amet mi. Amet, amet, sed ultrices elementum at. Nisl, amet, dui.</p>
                <button className="bg-orange w-52 h-14 rounded text-white">LEARN MORE</button>
            </div>
            <div className="flex justify-center items-center pb-14">
                {StickyMsg.map((item, i) => (
                    <Sticky title={item.title} key={`tag-${i}`} content={item.content} />
                ))}
            </div>
            <div className="flex justify-center">
                <div className='text-left w-1/2 pt-28 pl-36 pb-64'>
                    <p className='font-body text-2xl leading-8 text-darkblue pb-3.5 uppercase'>about our company</p>
                    <div className="  border-b-4 w-3/4 border-solid border-orange mb-12"></div>
                    <p className='text-md-2 font-bold text-5xl leading-10 text-darkblue'>The best choice for your<br /><br /><span>succesful investment!</span></p><br /><br />
                    <p className='text-xl leading-6 w-4/5 pb-32'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non in vitae ultricies integer leo nulla. Nunc etiam velit elit, magna nibh vitae. Nulla pulvinar dignissim pretium sit. Morbi laoreet sagittis, nunc in tellus orci. Tortor sed phasellus mattis arcu vestibulum. Fermentum scelerisque purus morbi fusce enim ornare fringilla. Sed eu vulputate tortor turpis proin erat.</p>
                    <button className="bg-orange w-52 h-14 rounded text-white">LEARN MORE</button>
                </div>
                <div className="flex w-1/2">
                    <div className="pr-11">
                        <img src={Images[1].url} />
                    </div>
                    <div className="pt-28">
                        <img src={Images[0].url} />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center pb-20">
                <ReactPlayer url='video/gen_vid.mp4' playing={true} width="100%" height="450px" volume={0.5} loop={true} controls={true}/>
            </div>
        </div>
    )
}

export default Home