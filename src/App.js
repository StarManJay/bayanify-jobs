import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobBoard from './components/JobBoard';
import SignUp from './components/auth/SignUp';
import PostJob from './components/jobs/PostJob';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobBoard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/post-job" element={<PostJob />} />
      </Routes>
    </Router>
  );
}

export default App;
