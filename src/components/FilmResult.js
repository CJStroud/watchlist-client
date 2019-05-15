import React from 'react'

export default ({ film }) => {
  if (!film) return null
  const {
    Title: title,
    Poster: poster
  } = film
  return (
    <div>
      <h2>{title}</h2>
      <img src={poster}></img>
    </div>
  )
}
