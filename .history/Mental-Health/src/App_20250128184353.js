import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Chatbot from "./components/Chatbot";
import Consultancy from "./components/Consultancy";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/Feedback";
import { auth } from "./components/Firebase";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/Register";
import Notes from "./components/Notes";
import UserInfoForm from "./components/UserInfoForm";
import Tasks from "./components/TasksDone";
import PersonalAssistant from "./components/PersonalAssistant";
import LandingPage from "./components/LandingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatApplication from "./components/ChatApplication";
import ScribblePad from "./components/ScribblePad";
import { NotificationForm } from "./components/NotificationForm";
import { NotificationList } from "./components/NotificationList";
import { formatDateTime } from "./components/DateUtils";
import Notiapp from "./components/NotiApp";
import Model from "./components/Model";
import ConsultancyProfiles from "./components/ConsultancyProfiles";

function App() {
  const [user, setUser] = useState();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = (phoneNumber, message, scheduledTime) => {
    const newNotification = {
      id: Date.now().toString(),
      phoneNumber,
      message,
      scheduledTime,
      isActive: true,
    };
    setNotifications([...notifications, newNotification]);
  };

  const handleToggle = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isActive: !notification.isActive }
          : notification
      )
    );
  };

  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Navigate to="http://ARUN-YERRAM.github.io/Project-3-1-CHatbot-Mental-Health-" />} />
        
        <Route path="http://ARUN-YERRAM.github.io/Project-3-1-CHatbot-Mental-Health-" element={<LandingPage />} />
       
        <Route path="http://ARUN-YERRAM.github.io/login" element={<Login />} />
        
        <Route path="http://ARUN-YERRAM.github.io/about" element={<About />} />
        <Route path="http://ARUN-YERRAM.github.io/chatbot" element={<Chatbot />} />
        <Route
          path="http://ARUN-YERRAM.github.io/consultancy"
          element={
            <Consultancy>
              <div className="bg-white p-6 mt-500 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">New Notification</h2>
                <NotificationForm onSubmit={handleSubmit} />
              </div>
              {notifications.length > 0 && (
                <div className="mt-80">
                  <h2 className="text-xl font-semibold mb-4">Scheduled Notifications</h2>
                  <NotificationList
                    notifications={notifications}
                    onToggle={handleToggle}
                  />
                </div>
              )}
            </Consultancy>
          }
        />
        <Route path="http://ARUN-YERRAM.github.io/contactUs" element={<ContactUs />} />
        <Route path="http://ARUN-YERRAM.github.io/chat-application" element={<ChatApplication />} />
        <Route path="http://ARUN-YERRAM.github.io/consultancy-profiles" element={<ConsultancyProfiles />} />
        <Route path="http://ARUN-YERRAM.github.io/feedback" element={<Feedback />} />
        <Route path="http://ARUN-YERRAM.github.io/home" element={<Home />} />
        <Route path="http://ARUN-YERRAM.github.io/Model" element={<Model/>}/>
        <Route path="http://ARUN-YERRAM.github.io/notes" element={<Notes />} />
        <Route path="http://ARUN-YERRAM.github.io/scribble-pad" element={<ScribblePad />} />
        <Route path="http://ARUN-YERRAM.github.io/profile" element={<Profile />} />
        <Route path="http://ARUN-YERRAM.github.io/register" element={<SignUp />} />
        <Route path="http://ARUN-YERRAM.github.io/UserInfoForm" element={<UserInfoForm />} />
        <Route path="http://ARUN-YERRAM.github.io/tasksDone" element={<Tasks />} />
        <Route path="http://ARUN-YERRAM.github.io/personal-assistant" element={<PersonalAssistant />} />
        <Route path="http://ARUN-YERRAM.github.io/notifications-app" element={<Notiapp/>} />
        <Route path="http://ARUN-YERRAM.github.io/form-date" element={<formatDateTime/>} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;


