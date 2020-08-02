import React from 'react';

const Events = () => {
  const events = events.map((event) => {
    <li>{event.description}</li>
  })
  return (
    <ul>
      {events}
    </ul>

  )
}

export default Events;