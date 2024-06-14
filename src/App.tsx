import wishes from '../wishes.json'
import Card from './components/card'
import MarqueeList from './components/marquee-list'
import Wishsection from './components/wish-list'

function App() {

  const themes = [{
    bgColor: "#219EBC",
    textColor: "#D5DBC8"
  }, {
    bgColor: "#EC368D",
    textColor: "#ffe3d4"
  }, {
    bgColor: "#F3DFA2",
    textColor: "#5C0029"
  }, {
    bgColor: "#7D8491",
    textColor: "#D5DBC8"
  },
  ]

  return (
    <>
      <Wishsection />

      <div className="min-h-screen bg-[#5d1f96] ">
        <ul className='flex flex-col items-center justify-center pb-10'>
          {
            wishes.map(({ title, img, name, wish }, i) => {
              const { bgColor, textColor } = themes[(i % themes.length + themes.length) % themes.length]
              return (<Card title={title} name={name} bgColor={bgColor} img={img} textColor={textColor} >{wish}</Card>)
            })
          }
        </ul>
      </div>

      <MarqueeList />

    </>
  )
}

export default App
