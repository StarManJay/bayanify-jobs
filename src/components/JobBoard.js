import React, { useState } from "react";
import { Search, MapPin, Briefcase, DollarSign, Building, Bookmark, Filter, ChevronDown, Star, Clock } from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow hover:shadow-lg transition-shadow ${className}`}>
    {children}
  </div>
);

const JobBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    location: "all",
    type: "all",
    salary: "all",
    experience: "all"
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
      experience: "5+ years",
      requirements: ["React", "TypeScript", "CSS", "Node.js"],
      description: "Join our growing team as a Senior Frontend Developer...",
      benefits: ["Health Insurance", "401k", "Remote Work", "Flexible Hours"],
      postedAt: "2d ago",
      rating: 4.8,
      reviews: 245
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "Innovation Labs",
      location: "Hybrid",
      type: "Full-time",
      salary: "$100k - $130k",
      experience: "3+ years",
      requirements: ["Node.js", "React", "PostgreSQL", "AWS"],
      description: "Looking for a Full Stack Engineer to join our product team...",
      benefits: ["Health & Dental", "Stock Options", "Learning Budget"],
      postedAt: "1d ago",
      rating: 4.5,
      reviews: 182
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $120k",
      experience: "2+ years",
      requirements: ["Figma", "User Research", "Design Systems"],
      description: "Join our design team creating beautiful user experiences...",
      benefits: ["Healthcare", "Remote Work", "Creative Environment"],
      postedAt: "3d ago",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "Cloud Solutions Inc",
      location: "Remote",
      type: "Full-time",
      salary: "$130k - $160k",
      experience: "4+ years",
      requirements: ["AWS", "Kubernetes", "CI/CD", "Terraform"],
      description: "Looking for a DevOps engineer to scale our infrastructure...",
      benefits: ["401k Match", "Health Insurance", "Stock Options"],
      postedAt: "5d ago",
      rating: 4.6,
      reviews: 198
    },
    {
      id: 5,
      title: "Mobile Developer",
      company: "App Makers",
      location: "Hybrid",
      type: "Full-time",
      salary: "$110k - $140k",
      experience: "3+ years",
      requirements: ["React Native", "iOS", "Android", "API Integration"],
      description: "Join us in building the next generation of mobile apps...",
      benefits: ["Health & Vision", "Gym Membership", "Flexible Hours"],
      postedAt: "1w ago",
      rating: 4.4,
      reviews: 167
    },
    {
      id: 6,
      title: "Data Scientist",
      company: "Data Analytics Co",
      location: "Remote",
      type: "Full-time",
      salary: "$140k - $180k",
      experience: "5+ years",
      requirements: ["Python", "Machine Learning", "SQL", "Data Visualization"],
      description: "Looking for a data scientist to drive insights from our data...",
      benefits: ["Health Insurance", "Stock Options", "Remote Work"],
      postedAt: "4d ago",
      rating: 4.9,
      reviews: 213
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = filters.location === "all" || job.location === filters.location;
    const matchesType = filters.type === "all" || job.type === filters.type;
    return matchesSearch && matchesLocation && matchesType;
  });

  const JobCard = ({ job }) => {
    const isSaved = savedJobs.includes(job.id);
    
    return (
      <Card className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building className="h-8 w-8 text-gray-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">{job.title}</h2>
              <p className="text-gray-600 mb-2">{job.company}</p>
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>{job.rating}</span>
                <span className="text-gray-400">({job.reviews} reviews)</span>
              </div>
            </div>
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

        <div className="grid md:grid-cols-2 gap-4 mb-4">
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
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            Posted {job.postedAt}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-medium mb-2">Requirements</h3>
          <div className="flex flex-wrap gap-2">
            {job.requirements.map((req, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
              >
                {req}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-medium mb-2">Benefits</h3>
          <div className="flex flex-wrap gap-2">
            {job.benefits.map((benefit, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t">
          <p className="text-sm text-gray-600">{job.experience} experience required</p>
          <div className="flex gap-2">
            <button className="text-blue-600 hover:underline px-4 py-2">
              View Details
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
              Apply Now
            </button>
          </div>
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
                placeholder="Search jobs, skills, or companies..."
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
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
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
                <option value="100-150">$100k-150k</option>
                <option value="150+">$150k+</option>
              </select>

              <select 
                className="p-2 border rounded-lg"
                value={filters.experience}
                onChange={(e) => setFilters(prev => ({ ...prev, experience: e.target.value }))}
              >
                <option value="all">All Experience</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Job Listings */}
      <main className="max-w-7xl mx-auto p-4">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            {filteredJobs.length} jobs found
          </h2>
          <select className="p-2 border rounded-lg">
            <option>Most Recent</option>
            <option>Highest Paid</option>
            <option>Most Relevant</option>
          </select>
        </div>

        <div className="space-y-6">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default JobBoard;
