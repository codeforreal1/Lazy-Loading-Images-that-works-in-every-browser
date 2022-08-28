import React from 'react'

export default function LazyLoadedImage({ src, ...otherProps }) {
  return <img data-src={src} className="lazyload" {...otherProps} />
}
