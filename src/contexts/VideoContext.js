import { createContext, useState } from "react";

const VideoContext = createContext()

const VideoProvider = ({ children }) => {
  const [ratio, setRatio] = useState('16:9')
  const [textColor, setTextColor] = useState('yellow')

  return (
    <VideoContext.Provider value={{ ratio, setRatio, textColor, setTextColor }}>
      {children}
    </VideoContext.Provider>
  )
}

export { VideoContext, VideoProvider }