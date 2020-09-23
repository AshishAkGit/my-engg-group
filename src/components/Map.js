import React, { useEffect, useRef, useState } from 'react'

export default function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef()
  const [map, setMap] = useState()
  useEffect(() => {
    const onLoad = () => setMap(new window.google.maps.Map(ref.current, options))
    if (!window.google) {
      const script = document.createElement(`script`)
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=` +
        `AIzaSyD6TUBL0P9OOatE3iO-LuXIeRwlsSDe1OY`
      document.head.append(script)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  }, [options])
  if (map && typeof onMount === `function`) onMount(map, onMountProps)
  return (
    <div
      style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
      {...{ ref, className }}
    />
  )
}

Map.defaultProps = {
  options: { 
    center: { lat: 18.5030154, lng: 73.7940889 },
    zoom: 5,
  },
}
