import { useState } from 'react'
import styles from './Bays.module.css'
import { bays } from '../data/bays'

const BayPopup = ({ bay }) => {
  const scale = 'scale(30 30) translate(18,600)'
  return (
    <g transform={scale}>
      <foreignObject zOrder='20' width='800' height='600'>
        <div >
          {/* <h1>{bay.name}</h1> */}
          <p>{bay.description}</p>
          {bay.pic && <img src={bay.pic} />}
        </div>
      </foreignObject>
    </g>
  )
}

export const Bay = ({ bay }) => {
  const [show, setShow] = useState(false)
  const pos = `translate(${bay.x} ${bay.y})`

  return (
    <g
      transform={pos}
    >
      <rect
        className={styles.bayRect}
        id={bay.name}
        width={bay.width}
        height={bay.height}
        stroke={bay.colour}
        fill={bay.colour}
        fill-opacity="0"
        strokeWidth='100px'
      />
      <g // Bay Label
        onPointerEnter={(e) => setShow(true)}
        onPointerLeave={(e) => setShow(false)}
      >
        <rect
          className={styles.bayRect}
          id={bay.name}
          width={4000}
          height={1500}
          stroke={bay.colour}
          fill={bay.colour}
        />
        <text
          className={styles.bayLabel}
          dx='1em'
          dy='1.2em'
        >{bay.name}
        </text>
      </g>
      {show && <BayPopup bay={bay} />}
    </g>
  )
}

export const BayMap = () => {
  return (
    <g>
      {bays.map((bay, index) =>
        <Bay key={index} bay={bay} />
      )}
    </g>
  )
}

export default BayMap
