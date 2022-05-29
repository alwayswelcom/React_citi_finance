import Sticky from "../../Component/Sticky"
import StickyMsg from './message.json'

const Home = () => {
    return (
        <div className='bg-bkimg bg-no-repeat'>
            <div className='text-left w-1/2 pt-80 pl-36 pb-64'>
                <p className='font-body text-2xl leading-8 text-darkblue pb-3.5'>WELCOME TO APEX BITCOINS GLOBAL</p>
                <div className="  border-b-4 w-3/4 border-solid border-orange mb-12"></div>
                <p className='text-md-2 font-bold text-5xl leading-10 text-darkblue'>Our investment focus is to your <br /><br /><span className='text-orange'>Satisfiction</span></p><br /><br />
                <p className='text-xl leading-6 w-4/5 pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis leo consequat non amet mi. Amet, amet, sed ultrices elementum at. Nisl, amet, dui.</p>
                <button className="bg-orange w-52 h-14 rounded text-white">LEARN MORE</button>
            </div>
            <div className="flex justify-center items-center">
                {StickyMsg.map((item, i) => (
                    <Sticky title={item.title} key={`tag-${i}`} content={item.content} />
                ))}
            </div>
        </div>
    )
}

export default Home