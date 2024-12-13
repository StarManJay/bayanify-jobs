import React, { useState } from "react";
import { Search, MapPin, Briefcase, DollarSign, Building, Bookmark, Filter, ChevronDown, X } from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>
    {children}
  </div>
);

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    location: "all",
    type: "all",
    salary: "all"
  });
  const [showFilters, setShowFilters] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $150k",
      requirements: ["React", "TypeScript", "CSS"],
      postedAt: "2d ago"
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "Innovation Labs",
      location: "Hybrid",
      type: "Full-time",
      salary: "$100k - $130k",
      requirements: ["Node.js", "React", "PostgreSQL"],
      postedAt: "1d ago"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = filters.location === "all" || job.location === filters.location;
    const matchesType = filters.type === "all" || job.type === filters.type;
    return matchesSearch && matchesLocation && matchesType;
  });

  const JobCard = ({ job }) => {
    const isSaved = savedJobs.includes(job.id);
    
    return (
      <Card className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
          </div>
          <button 
            onClick={() => setSavedJobs(prev => 
              isSaved ? prev.filter(id => id !== job.id) : [...prev, job.id]
            )}
            className={`p-2 rounded-full ${isSaved ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"}`}
          >
            <Bookmark className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            {job.location}
          </div>
          <div className="flex items-center text-gray-600">
            <Briefcase className="h-4 w-4 mr-2" />
            {job.type}
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign className="h-4 w-4 mr-2" />
            {job.salary}
          </div>
          <div className="text-gray-600">
            Posted {job.postedAt}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.requirements.map((req, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              {req}
            </span>
          ))}
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Apply Now
          </button>
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
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

      {/* Search and Filters */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs or companies"
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="sm:w-auto flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <Filter className="h-5 w-5" />
              Filters
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <select 
                className="p-2 border rounded-lg"
                value={filters.location}
                onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
              >
                <option value="all">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>

              <select 
                className="p-2 border rounded-lg"
                value={filters.type}
                onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
              >
                <option value="all">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </select>

              <select 
                className="p-2 border rounded-lg"
                value={filters.salary}
                onChange={(e) => setFilters(prev => ({ ...prev, salary: e.target.value }))}
              >
                <option value="all">All Salaries</option>
                <option value="0-50">$0-50k</option>
                <option value="50-100">$50-100k</option>
                <option value="100+">$100k+</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Job Listings */}
      <main className="max-w-7xl mx-auto p-4">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">
            {filteredJobs.length} jobs found
          </h2>
        </div>

        <div className="space-y-4">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default JobBoard;
