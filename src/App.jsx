import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Header from './components/Header/Header'

import Home from './components/Home/Home'
import About from './components/About/About';
import Work from './components/Work/Work';

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext'

import Curtain from './components/Curtain/Curtain';

function App() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<AppContent />
			</LanguageProvider>
		</ThemeProvider>
	);
}

function AppContent() {
	const { darkMode } = useTheme();
	const [openCurtain, setOpenCurtain] = useState(false);

	return (
		<Router>
			<div className={`App ${darkMode ? 'darkTheme' : 'lightTheme'}`}>
				<Header setOpenCurtain={setOpenCurtain} />
				<Curtain isOpen={openCurtain} />
				<div className="App__container">
					<Routes>
						<Route path="/portfolio-2/" element={<Home />} />
						<Route path="/portfolio-2/about" element={<About />} />
						<Route path="/portfolio-2/work" element={<Work />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App
