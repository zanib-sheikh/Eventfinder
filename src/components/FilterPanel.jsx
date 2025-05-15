import React from "react";

function FilterPanel({ filters, setFilters }) {
  return (
    <div className="filters">
      <div>
        <label>Category</label><br />
        <select
          value={filters.category}
          onChange={(e) =>
            setFilters({ ...filters, category: e.target.value })
          }
        >
          <option value="">All Categories</option>
          <option value="Workshop">Workshop</option>
          <option value="Meetup">Meetup</option>
          <option value="Festival">Festival</option>
        </select>
      </div>

      <div>
        <label>Location</label><br />
        <select
          value={filters.location}
          onChange={(e) =>
            setFilters({ ...filters, location: e.target.value })
          }
        >
          <option value="">All Locations</option>
          <option value="Lahore">Lahore</option>
          <option value="Karachi">Karachi</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Faisalabad">Faisalabad</option>
          <option value="Peshawar">Peshawar</option>
          <option value="Multan">Multan</option>
          <option value="Rawalpindi">Rawalpindi</option>
          <option value="Quetta">Quetta</option>
        </select>
      </div>

      <div>
        <label>Date</label><br />
        <select
          value={filters.date}
          onChange={(e) =>
            setFilters({ ...filters, date: e.target.value })
          }
        >
          <option value="">All Dates</option>
          <option value="2025-05-20">May 20, 2025</option>
          <option value="2025-06-01">June 1, 2025</option>
          <option value="2025-06-15">June 15, 2025</option>
          <option value="2025-06-22">June 22, 2025</option>
          <option value="2025-07-01">July 1, 2025</option>
        </select>
      </div>
    </div>
  );
}

export default FilterPanel;
