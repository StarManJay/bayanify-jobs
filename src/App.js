import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobBoard from './components/JobBoard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobBoard />} />
    </Routes>
  );
}

export default App;
