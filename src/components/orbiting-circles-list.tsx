import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Typewriter from 'typewriter-effect';

export function OrbitingCirclesList() {
  return (
    <div className="relative flex h-[1000px] w-full items-center justify-center overflow-hidden bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b text-center text-8xl font-semibold leading-none  text-white">
      <Typewriter
            options={{
                strings: ['<span class="text-7xl md:text-9xl animate-gradient gradient">Feliz </span>', ' <span class="text-7xl md:text-9xl animate-gradient gradient">Cumple</span>', '<span class="text-7xl md:text-9xl animate-gradient gradient">Mi princesa ♥</span>'],
                delay: 100,
                deleteSpeed: 100,
                autoStart: true,
                loop: true,
                cursor: ''
            }}
            />
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[60px] w-[60px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={190}
      >
        <img src="/adi-1.png" alt="" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[40px] w-[40px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={290}
      >
        <img src="/adi-2.png" alt="" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <img src="/adi-3.jpg" alt="" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[70px] w-[70px] border-none bg-transparent"
        radius={230}
        duration={20}
        delay={20}
        reverse
      >
        <img src="/adi-5.jpg" alt="" />
      </OrbitingCircles>
    </div>
  );
}