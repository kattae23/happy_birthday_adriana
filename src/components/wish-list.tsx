import NumberTicker from './magicui/number-ticker';
import { OrbitingCirclesList } from './orbiting-circles-list';

function Wishsection() {



    return <><div className='h-screen bg-[#BC3AA6] flex flex-col items-center justify-center'>
        <h3 className='md:text-6xl m-8 text-3xl font-bold animate-gradient gradient'>Feliz Cumple # <NumberTicker className='ml-3' value={20} direction='up' /> <span className='mr-2'></span>Adii</h3>
        <OrbitingCirclesList/>
    </div>
    </>
}

export default Wishsection