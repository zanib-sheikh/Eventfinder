function EventCard({ event }) {
    return (
      <div className="event-card">
        <h2>{event.title}</h2>
        <p>Category: {event.category}</p>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
      </div>
    );
  }
  
  export default EventCard;
  