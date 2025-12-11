// src/App.jsx
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsCarousel } from './components/ProjectsCarousel';
import { InteractiveSkillsGame } from './components/InteractiveSkillsGame';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';
import { Navigation } from './components/Navigation';
import { ScrollProgressTracker } from './components/ScrollProgressTracker';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 antialiased">
      <ScrollProgressTracker />
      <Navigation />
      <main className="pt-20">
        <Hero />
        <About />
        <ProjectsCarousel />
        <InteractiveSkillsGame />
        <Experience />
        <Contact />
      </main>
      <Chatbot />
    </div>
  );
}
