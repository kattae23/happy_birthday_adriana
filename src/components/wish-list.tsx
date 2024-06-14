import confetti from 'canvas-confetti';
import NumberTicker from './magicui/number-ticker';
import { OrbitingCirclesList } from './orbiting-circles-list';

function Wishsection() {

    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
    const end = Date.now() + 3 * 1000; // 3 seconds

  const frame = () => {
    if (Date.now() > end) return;

    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });

    requestAnimationFrame(frame);
  };

  



    return <><div className='h-screen bg-[#BC3AA6] flex flex-col items-center justify-center'>
        <h3 className='md:text-6xl m-8 text-3xl font-bold animate-gradient gradient text-center gap-y-2'>Feliz Cumple <br /> #<NumberTicker frame={frame} className='' value={20} direction='up' /> <span className='mr-2'></span>Adii</h3>
        <OrbitingCirclesList/>
    </div>
    </>
}

export default Wishsection