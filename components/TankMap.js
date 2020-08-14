import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { tanks } from '../data/tanks'
import { bays } from '../data/bays'

const tankAddressToProps = (tank) => {
  const bay = bays[tank.address.bay]
  return ({
    cx: tank.address.col * bay.width / bay.cols,
    cy: tank.address.row * bay.height / bay.rows,
    r: tank.diameter_mm / 2,
    bay
  })
}

const TankPopup = ({ x, y, tank }) => {
  const pos = `translate(${x} ${y}) scale(10 10)`
  return (
    <g transform={pos}>
      <foreignObject width='12em' height='10em'>
        <div className={styles.tankPopup}>
          <h1>{tank.name}</h1>
          <p>{tank.colour}</p>
        </div>
      </foreignObject>
    </g>
  )
}

export const Tank = ({ tank }) => {
  const [show, setShow] = useState(false)
  const { cx, cy, r, bay } = tankAddressToProps(tank)
  const baypos = `translate(${bay.x} ${bay.y})`
  return (
    <g
      transform={baypos}
      onPointerEnter={(e) => setShow(true)}
      onPointerLeave={(e) => setShow(false)}
    >
      <circle
        className={styles.tankCircle}
        id={tank.name}
        cx={cx} cy={cy} r={r}
        fill={tank.colour}
      />
      <text
        className={styles.tankLabel}
        x={cx} y={cy}
        dx={-tank.diameter_mm / 2}
        dy={-tank.diameter_mm / 2}
      >{tank.name}
      </text>
      {show && <TankPopup x={cx} y={cy} tank={tank} />}
    </g>
  )
}

export const TankMap = () => {
  return (
    <g>
      {tanks.map((tank, index) =>
        <Tank key={index} tank={tank} />
      )}
    </g>
  )
}

export default TankMap
