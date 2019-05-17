import React from 'react'

export default ({ count, search }) => {
  if (count === 0) return null
  return (
    <div>
      <h3>{count} results for <span style={{ fontStyle: 'italic' }}>{search}</span></h3>
    </div>
  )
}
