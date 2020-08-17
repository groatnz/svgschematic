import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const fishdefs = {
  sn: {
    color: '#d21f23', // snapper red
    name: 'Snapper',
  },
  tr: {
    color: '#7030a0', // Trevally purple
    name: 'Trevally',
  },
  sa: {
    color: '#ffb6b6', // salmon pink
    name: 'Salmon',
  },
  fl: {
    color: '#ffc000', // Flounder yellow
    name: 'Flounder',
  },
  mt: {
    color: '#bfbfbf', // empty gray
    name: "Empty"
  }
}

const tankColor = '#7030a0' // Trevally purple'
const months = ['j','f','m','a','m','j','j','a','s','o','n','d']
const stocks = [ 
  'mt', 'mt', 
  'sn', 'sn', 'sn', 'sn',
  'mt',
  'tr', 'tr','tr','tr','tr'
]
const stocks2 = [ 
  'fl', 'fl', 'fl', 'fl', 'fl', 'fl','fl',
  'sa', 'sa','sa','sa','sa'
]
const scalingFactor = 0.1
const TankPlan = ({cx, cy, stocks, name, batch, size}) => {
  const r = 20
  const step = 2* Math.PI / months.length
  const x1 = Math.cos(step) * r
  const y1 = Math.sin(step) * r
  const pie = `M0,0 L${r}, 0A${r},${r} 0 0,1 ${x1},${y1} Z`
  return (
    <g  transform={`translate(${cx},${cy})  scale(${size*scalingFactor}) `}>
      <g 
        transform='rotate(-90)'
      >
        {stocks.map( (stock,index) => 
          <g 
            transform={`rotate(${index*360/12})`} 
            >
            <path 
              d={pie} 
              stroke="white" stroke-width="0.5" 
              fill={fishdefs[stock].color} 
            />
            <text 
              font-size="5"
              transform={`rotate(${90-index*360/12},${r-5}, 4)`} 
              fill='white'
              text-anchor="middle"
              dx={r-5}
              dy={5}
              >
              {months[index]}
            </text>
          </g>
        )}
      </g>
      <circle
        cx={0} cy={0} r={r*0.6}
        fill='white'
      />
      <text 
        font-size="5"
        text-anchor="middle"
        >
          <tspan dy='-4'>{name}</tspan>
          <tspan dy='6' x='0' >{batch}</tspan>
          <tspan dy='6' x='0' >{size}</tspan>
      </text>
    </g>
  )
}
const SvgZoomContainer = ({ children }) => {
  return (
    <div width='100%'>
      <TransformWrapper
        defaultScale={1}
      >
        <TransformComponent>
          <svg
            preserveAspectRatio='xMidYMin meet'
            viewBox='0 0 100 80' width='600px'
            style={{
              border: '2px solid darkblue',
              backgroundColor: 'aliceblue'
            }}
          >
            {children}
          </svg>
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}
export default function Page () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tank Annual Plan Indicator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>
        Tank Annual Plan Indicator
        </h1>
        <SvgZoomContainer>
          <TankPlan 
            cx='30'
            cy='30'
            stocks={stocks} name={'F4'} batch='SNcl10B' size='13' 
          />
           <TankPlan 
            cx='80'
            cy='20'
            stocks={stocks2} name={'F3'} batch='SNcl14C' size='5' 
          />
        </SvgZoomContainer>
      </main>

    </div>
  )
}
