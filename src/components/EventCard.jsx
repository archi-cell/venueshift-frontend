function EventCard({event}){
return(
<div className="card">
<h3>{event.name}</h3>
<p>Date: {event.date}</p>
<p>Time: {event.time}</p>
<p>Role: {event.role}</p>
</div>
)
}

export default EventCard
