import WavesurferPlayer from '@wavesurfer/react'

// const VoiceRecord = () => {
//   const [wavesurfer, setWavesurfer] = useState(null)
//   const [isPlaying, setIsPlaying] = useState(false)

//   const onReady = (ws) => {
//     setWavesurfer(ws)
//     setIsPlaying(false)
//   }

//   const onPlayPause = () => {
//     wavesurfer && wavesurfer.playPause()
//   }

//   return (
//     <>
//       <WavesurferPlayer
//         height={100}
//         waveColor="violet"
//         url="./assets/speech-test.mp3"
//         onReady={onReady}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//       />

//       <button onClick={onPlayPause}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//     </>
//   )
// }
import { useRef } from 'react'
import { useWavesurfer } from '@wavesurfer/react'

const VoiceRecord = () => {
  const containerRef = useRef(null)

  const { wavesurfer, isReady, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    url: './assets/speech-test.mp3',
    waveColor: 'red',
    height: 100,
  })

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause()
  }

  return (
    <>
      <div className='bg-slate-400' ref={containerRef} />

      <button className='bg-grey-900' onClick={onPlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </>
  )
}
export default VoiceRecord