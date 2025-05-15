import { useEffect, useState } from "react";
import events from "./data/events";
import EventCard from "./components/EventCard";
import FilterPanel from "./components/FilterPanel";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [filters, setFilters] = useState(() => {
    // Load saved filters from localStorage
    const saved = localStorage.getItem("filters");
    return saved ? JSON.parse(saved) : { category: "", location: "" };
  });

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  const filteredEvents = events.filter((event) => {
    return (
      (filters.category === "" || event.category === filters.category) &&
      (filters.location === "" || event.location === filters.location)
    );
  });

  return (
    
    <div className="App">
      <Navbar />
      <main className="intro-section">
  <section className="intro-container">
    {/* Left Side - Text */}
    <div className="intro-text">
      <h1 className="intro-title">
        The people platform—Discover local events near you
      </h1>
      <p className="intro-description">
        Find workshops, meetups, festivals, and more in your city. Use the filters to narrow down your interests and never miss an event.
      </p>
    </div>

    {/* Right Side - Image */}
    <div className="intro-image">
      <img
        src="https://secure.meetupstatic.com/next/images/indexPage/irl_event.svg?w=828"
        alt="Events"
      />
    </div>
  </section>
</main>

  
      <FilterPanel filters={filters} setFilters={setFilters} />
      <div className="event-list">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default App;
