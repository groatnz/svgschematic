import { useState } from 'react'
import styles from './Bays.module.css'
import { bays } from '../data/bays'

const BayPopup = ({ bay }) => {
  const pos = 'scale(20 20)'
  return (
    <g transform={pos}>
      <foreignObject width='12rem' height='10rem'>
        <div className={styles.popup}>
          <h1>{bay.name}</h1>
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
      onPointerEnter={(e) => setShow(true)}
      onPointerLeave={(e) => setShow(false)}
    >
      <rect
        className={styles.bayRect}
        id={bay.name}
        width={bay.width}
        height={bay.height}
        stroke='lightblue'
        fill={show ? bay.colour : '#FFFFF8'}
        strokeWidth='100px'
      />
      <text
        className={styles.bayLabel}
        dx='1em'
        dy='1em'
      >{bay.name}
      </text>
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
