
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

const months = ['j','f','m','a','m','j','j','a','s','o','n','d']
const noStockPlan = new Array(12).fill('mt')

const scalingFactor = 0.05 // convert tank size to diameter
const TankMonthlyPlan = ({cx, cy, stocks, name, batch, size}) => {
  const stockplan = (stocks && stocks.length) ? stocks : noStockPlan
  const r = 20
  const step = 2* Math.PI / months.length
  const x1 = Math.cos(step) * r
  const y1 = Math.sin(step) * r
  const pie = `M0,0 L${r}, 0A${r},${r} 0 0,1 ${x1},${y1} Z`
  return (
    <g  transform={`translate(${cx},${cy})  scale(${size*scalingFactor}) `}>
      <g transform='rotate(-90)'>
        {stockplan.map( (stock,index) => 
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

export default TankMonthlyPlan