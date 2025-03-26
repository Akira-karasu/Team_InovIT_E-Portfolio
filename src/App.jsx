import React from 'react';
import NavBar from './components/navbar.jsx';
import HomePage from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import TeamPage from './pages/Team.jsx';
import ProjectPage from "./pages/Project.jsx";
import ContactPage from "./pages/Contact.jsx"

function App() {
    return (
        <>
            <NavBar/>
            <HomePage/>
            <AboutPage/>
            <TeamPage/>
            <ProjectPage/>
            <ContactPage/>
        </>
      );
};

export default App
