import { useEffect,useRef } from "react"
import * as echarts from 'echarts'
import 'echarts-gl'
import earth from './assets/earth.png'
import stars from './assets/starfield.png'
function App() {
  const chartRef = useRef(null)

  useEffect(()=> {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom)

    const option = {
        backgroundColor: "#000",
  

        globe: {
            baseTexture:earth,
            heightTexture:earth,
            environment:stars,
            shading:"lambert",
            atmosphere: {
                show: true
            },
            light: {
                ambient: {
                    intensity:0.1,
                },
                displacementQuality: "ultra",
                main: {
                    intensity:1
                }
            }
        },
        series: []
    }

    option && myChart.setOption(option)

    return () => {
        myChart.dispose()
    }
  },[])

  return <div ref ={chartRef} style ={{width:"100vw", height: "100vh"}}></div>
}

export default App
