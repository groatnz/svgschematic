import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TankMap from '../components/TankMap'
import BayMap from '../components/Bays'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const SvgZoomContainer = ({ children }) => {
  return (
    <div width='100%'>
      <TransformWrapper
        defaultScale={1}
      >
        <TransformComponent>
          <svg
            preserveAspectRatio='xMidYMin meet'
            viewBox='0 0 100000 80000' width='90%'
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
export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>SVG Map Demo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>
          Nelson SRN Dashboard
        </h1>
        <SvgZoomContainer>
          <TankMap />
          <BayMap />
        </SvgZoomContainer>
      </main>

    </div>
  )
}
