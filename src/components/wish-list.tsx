import NumberTicker from './magicui/number-ticker';
import { OrbitingCirclesList } from './orbiting-circles-list';

function Wishsection() {



    return <><div className='h-screen bg-[#BC3AA6] flex flex-col items-center justify-center'>
        <h3 className="font-mukta text-[#8ECAE6] text-6xl font-semibold m-8 max-sm:text-3xl">🎊 HAPPY BIRTHDAY <NumberTicker value={20} direction='up' />✨</h3> 
        <OrbitingCirclesList />
        {/* <div className="w-[349px] h-[314px] rounded max-sm:w-[225px] max-sm:h-[250px] bg-cover" style={{ backgroundImage: `url("/image-4.jpg")` }}></div>
        <h1 className="font-mukta text-white text-8xl font-bold m-5 max-sm:text-4xl">
            <Typewriter
            options={{
                strings: ['<span style="color: #29E7CD;">Feliz </span>', ' <span style="color: #F0F0C9;">Cumple</span>', '<span style="color: #D4F5F5;">Mi princesa ♥</span>'],
                delay: 100,
                deleteSpeed: 100,
                autoStart: true,
                loop: true,
                cursor: '|'
            }}
            />
        </h1> */}
    </div>
    </>
}

export default Wishsection