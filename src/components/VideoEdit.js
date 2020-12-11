import React from 'react'
import { VideoEditor } from 'react-media-editor'
import vd from 'vidar'

export default function VideoEdit() {
  const video = document.getElementById('vid')
  // image.addEventListener(onclick, () => { alert('hi') })
  console.log(vd.Movie, video)
  const movie = new vd.Movie(document.getElementById('can'))
  // movie.addLayer(new vd.layer.Base(0, 3))
  // movie.addLayer(new vd.layer.Text(3, 2, ' { opacity: 0.5}', { background: "red" }))
  const base = new vd.layer.Visual(0, 3, { background: 'red' })
  const media = new vd.layer.Video(0,
    video,
    { width: 100 })
  // movie.addLayer(new vd.layer.Media(0,
  //   video,
  //   { width: 100 }))
  const audio = document.getElementById('aud')
  movie.addLayer(base)
  movie.addLayer(new vd.layer.Audio(0, audio))
  movie.addLayer(new vd.layer.Visual(2, 3, { background: 'black' }))
  console.log(base, media.duration)
  movie.play()
  return (
    <div className="page-wrapper editor">
      hi
    </div>
  )
}
