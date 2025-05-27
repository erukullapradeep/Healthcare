import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [showLabels, setShowLabels] = useState(true);
  const [activeCard, setActiveCard] = useState(null);
  const [selectedDay, setSelectedDay] = useState("Thursday");

  const handleCardClick = (card) => setActiveCard(card);
  const toggleLabels = () => setShowLabels(!showLabels);

  const schedule = {
    Thursday: [
      { time: "11:00 AM", label: "🩺 Health checkup complete" },
      { time: "14:00 PM", label: "👁️ Ophthalmologist" },
    ],
    Saturday: [
      { time: "12:00 AM", label: "❤️ Cardiologist" },
      { time: "16:00 PM", label: "🧠 Neurologist" },
    ],
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="main-section">
        <div className="anatomy" onClick={toggleLabels}>
          <img
            src="/anatomy.png"
            alt="anatomy"
            className="anatomy-img"
          />
          {showLabels && (
            <>
              <div className="label heart">❤️ Healthy Heart</div>
              <div className="label leg">➤ Healthy Leg</div>
            </>
          )}
        </div>

        <div className="status">
          {["Lungs", "Teeth", "Bone"].map((item, i) => (
            <div
              key={i}
              className={`card ${item === "Teeth" ? "green" : "red"} ${
                activeCard === item ? "selected" : ""
              }`}
              onClick={() => handleCardClick(item)}
            >
              <h4>{item}</h4>
              <p>Date: 26 Oct 2021</p>
            </div>
          ))}
        </div>

        <div className="calendar">
          <h4>October 2021</h4>
          <div className="days">
            {["Mon 25", "Tue 26", "Wed 27", "Thu 28", "Fri 29", "Sat 30", "Sun 31"].map((day, i) => (
              <div key={i} className={day.includes("26") ? "active" : ""}>
                {day}
              </div>
            ))}
          </div>

          <div className="event dentist" title="Dentist - Dr. Cameron Williamson">
            Dentist<br />09:00–11:00<br />Dr. Pradeep Erukulla
          </div>
          <div className="event physio" title="Physiotherapy - Dr. Kevin Djones">
            Physiotherapy<br />11:00–12:00<br />Dr. Praveen Erukulla
          </div>
        </div>
      </div>

      <div className="activity">
        <h4>Activity</h4>
        <div className="bars">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="bar"></div>
          ))}
        </div>
      </div>

      <div className="schedule">
        <h4>The Upcoming Schedule</h4>
        <div className="schedule-tabs">
          {["Thursday", "Saturday"].map((day) => (
            <button
              key={day}
              className={selectedDay === day ? "active-tab" : ""}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="day">
          <h5>On {selectedDay}</h5>
          {schedule[selectedDay].map((appt, i) => (
            <div className="appt" key={i}>
              {appt.label} - {appt.time}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
