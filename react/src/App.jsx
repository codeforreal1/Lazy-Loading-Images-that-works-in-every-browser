import React from 'react'

import LazyImage from './components/LazyImage'

function App() {
  return (
    <div
      style={{ minHeight: '200vh', position: 'relative', overflowY: 'auto' }}
    >
      <LazyImage
        src="https://images.pexels.com/photos/11940940/pexels-photo-11940940.jpeg?auto=compress&cs=tinysrgb&w=760&h=250&dpr=1"
        data-src="https://images.pexels.com/photos/11940940/pexels-photo-11940940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          width: '500px',
        }}
      />
    </div>
  )
}

export default App
