import React, { useState } from "react";
import { Card } from "./Card";
import { Building, Bookmark } from "lucide-react";

const JobBoard = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      salary: "$120k - $150k",
      type: "Full-time",
      postedAt: "2d ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">Bayanify Jobs</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="p-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Building className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-semibold">{job.title}</h2>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <Bookmark className="h-5 w-5" />
                  </div>
                  <div className="mt-2">
                    <div className="text-gray-600">{job.location}</div>
                    <div className="text-gray-600">{job.salary}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default JobBoard;
