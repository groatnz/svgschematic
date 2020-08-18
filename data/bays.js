const colourMap = [
  '#ABB065',
  '#BFAA67',
  '#CFA373',
  '#DB9D85',
  '#E2979A',
  '#E494AF',
  '#E093C3'
]

export const bays = [
  {
    name: 'Corridor',
    rows: 3,
    height: 2000,
    cols: 50,
    width: 100000,
    x: 0,
    y: 37000,
    colour: '#c0c0c0',
  },
  {
    name: 'E bay',
    rows: 37,
    height: 37000,
    cols: 25,
    width: 25000,
    x: 0,
    y: 0,
    colour: colourMap[0],
    pic: '/bay-images/fffe.jpg',
    description: 'Some descriptive information about the bay.'
  },
  {
    name: 'F bay',
    rows: 37,
    height: 37000,
    cols: 25,
    width: 25000,
    x: 25000,
    y: 0,
    colour: colourMap[1],
    pic: '/bay-images/ffff.jpg'

  },
  {
    name: 'G Bay',
    rows: 20,
    height: 37000,
    cols: 25,
    width: 25000,
    x: 50000,
    y: 0,
    colour: colourMap[2],
    pic: '/bay-images/fffg.jpg'
  },
  {
    name: 'H Bay',
    rows: 20,
    height: 37000,
    cols: 25,
    width: 25000,
    x: 75000,
    y: 0,
    colour: colourMap[3],
    pic: '/bay-images/fffh.jpg',
    description: 'Feed preparation area.'

  },
  {
    name: 'D Bay',
    rows: 20,
    height: 39000,
    cols: 25,
    width: 25000,
    x: 0,
    y: 39000,
    colour: colourMap[0],
    pic: '/bay-images/fffd.jpg'

  },
  {
    name: 'C Bay',
    rows: 20,
    height: 39000,
    cols: 25,
    width: 25000,
    x: 25000,
    y: 39000,

    colour: colourMap[1],
    pic: '/bay-images/fffc.jpg'

  },
  {
    name: 'B Bay',
    rows: 20,
    height: 39000,
    cols: 25,
    width: 25000,
    x: 50000,
    y: 39000,
    colour: colourMap[2],
    pic: '/bay-images/fffb.jpg'
  },
  {
    name: 'A Bay',
    rows: 20,
    height: 39000,
    cols: 25,
    width: 25000,
    x: 75000,
    y: 39000,
    colour: colourMap[3]
  }
]
