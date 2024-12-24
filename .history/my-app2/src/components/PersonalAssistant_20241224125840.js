import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Consultancy.css";

const PersonalAssistant = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [todoList, setTodoList] = useState([]);
  
  useEffect(() => {
    // Update the current time every minute
    const interval = setInterval(() => {
      const time = new Date();
      setCurrentTime(time.toLocaleTimeString());
    }, 60000); // Refresh every minute

    return () => clearInterval(interval);
  }, []);

  const handleSendNotification = (method) => {
    // Logic for sending notifications based on the current time
    const notificationMessage = `Notification sent at ${currentTime}`;
    alert(`${notificationMessage} via ${method}`);
  };

  const handleAddToDo = (task) => {
    setTodoList([...todoList, task]);
  };

  return (
    <>
      <Nav />
      <div className="consultancy-container">
        <h1 className="text-4xl font-bold mb-5">Personal Assistant</h1>
        <div className="profiles-grid mt-10 mb-10">
          {/* Card 1: Notification sending */}
          <div className="card">
            <img
              src="https://picsum.photos/300/200?random=1"
              className="card-img-top"
              alt="Notification"
            />
            <div className="card-body">
              <h5 className="card-title">Send Notifications</h5>
              <p className="card-text">Send notifications to contacts based on time.</p>
              <button
                className="btn btn-primary"
                onClick={() => handleSendNotification("Mobile")}
              >
                Send to Mobile
              </button>
              <button
                className="btn btn-primary mt-2"
                onClick={() => handleSendNotification("Email")}
              >
                Send to Email
              </button>
            </div>
          </div>

          {/* Card 2: To-Do List Tracker */}
          <div className="card">
            <img
              src="https://picsum.photos/300/200?random=2"
              className="card-img-top"
              alt="To-Do List"
            />
            <div className="card-body">
              <h5 className="card-title">To-Do List Tracker</h5>
              <p className="card-text">Track tasks and add new ones to stay organized.</p>
              <input
                type="text"
                id="taskInput"
                className="form-control"
                placeholder="Enter task"
              />
              <button
                className="btn btn-primary mt-2"
                onClick={() => {
                  const task = document.getElementById("taskInput").value;
                  if (task) handleAddToDo(task);
                }}
              >
                Add Task
              </button>
              <ul className="mt-3">
                {todoList.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PersonalAssistant;
