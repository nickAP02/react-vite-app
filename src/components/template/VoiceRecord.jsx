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