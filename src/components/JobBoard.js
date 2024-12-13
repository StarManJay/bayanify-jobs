import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JobBoard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Bayanify Jobs</h1>
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-gray-900">
                Sign In
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">No jobs found</h2>
          <p>Sign in to post your first job</p>
        </div>
      </main>
    </div>
  );
};

export default JobBoard;
