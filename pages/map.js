import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {tanks,bays} from '../data/tanks'
const tankAddressToProps = ( tank ) => {
  const bay = bays[tank.address.bay]
  return ({
    cx: tank.address.col * bay.width_mm / bay.cols,
    cy: tank.address.row * bay.height_mm / bay.rows,
    r: tank.diameter_mm/2
  })
}
const Tank = ({tank}) => {
  const {cx, cy, r} = tankAddressToProps(tank)
  return (
    <g>
      <circle
        className={styles.tankCircle}
        cx={cx} cy={cy} r={r}
        fill={tank.colour}
      />
      <text 
        className={styles.tankLabel}
        x={cx} y={cy} 
        dx={-tank.diameter_mm/2}
        dy={-tank.diameter_mm/2}
       >{tank.name}</text>
    </g>
  )
}

const TankMap = ({tanks}) => {
  return (
    // <Tank tank={tanks[0]} ></Tank>
    <g>
    {tanks.map( (tank,index) =>
      <Tank key={index} tank={tank}></Tank>
    )}
    </g>
  )
}

const Svg = ({children}) => {
  return (
    <svg 
      preserveAspectRatio="xMidYMin meet"
      viewBox="0 0 10000 20000" width='600px'
      style={{
        border: "2px solid darkblue",
        backgroundColor: "aliceblue"
      }}>        
      {children}
      </svg>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SVG Map Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1>
          Welcome to my Tank Farm
        </h1>
        <Svg>
          <TankMap tanks={tanks}/>
        </Svg>
     
      </main>

 
    </div>
  )
}
