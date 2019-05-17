import React from 'react'
import SaveToWatchlistButton from './SaveToWatchlistButton'

export default ({ film }) => {
  if (!film) return null
  const {
    Title: title,
    Poster: poster
  } = film
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <SaveToWatchlistButton film={film} />
      </div>
      <img src={poster}></img>
    </div>
  )
}
