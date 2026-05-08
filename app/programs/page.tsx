"use client";
import React, { useState, useMemo } from "react";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/programData";
import { Heart, Search, Filter, MapPin, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ProgramsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const categories = ["All", ...Array.from(new Set(programs.flatMap(p => p.tags)))];
  const locations = ["All", ...Array.from(new Set(programs.map(p => p.location)))];

  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           program.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || program.tags.includes(selectedCategory);
      const matchesLocation = selectedLocation === "All" || program.location === selectedLocation;

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchTerm, selectedCategory, selectedLocation]);

  const urgentPrograms = programs.filter(p => p.progress < 50).slice(0, 2);

  return (
    <div className="bg-soft-blush min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heart className="w-12 h-12 text-elegant-rose mx-auto mb-6" fill="currentColor" />
          <h1 className="clamp-text-5xl font-bold text-rich-cocoa mb-6">Our Programs</h1>
          <p className="clamp-text-xl text-soft-mauve-gray max-w-3xl mx-auto text-balance">
            Discover immersive initiatives creating lasting change across communities worldwide.
          </p>
        </div>

        {/* Urgent Programs Banner */}
        {urgentPrograms.length > 0 && (
          <div className="mb-12">
            <div className="glass-blush-card rounded-3xl p-6 border-l-4 border-red-400">
              <div className="flex items-center gap-3 mb-4">
                
                <h2 className="text-xl font-bold text-rich-cocoa">Urgent Needs!</h2>
              </div>
              <p className="text-soft-mauve-gray mb-6">
                These programs need immediate support to continue their critical work.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {urgentPrograms.map(program => (
                  <div key={program.id} className="bg-white/50 rounded-2xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-rich-cocoa">{program.title}</h3>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                        {program.progress}% funded
                      </span>
                    </div>
                    <p className="text-sm text-soft-mauve-gray mb-3 line-clamp-2">{program.description}</p>
                    <Link
                      href={`/programs/${program.id}`}
                      className="text-elegant-rose text-sm font-medium hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Filters and Search */}
        <div className="glass-blush-card rounded-3xl p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-soft-mauve-gray" />
                <input
                  type="text"
                  placeholder="Search programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/70 border border-white/30 rounded-full focus:outline-none focus:border-elegant-rose focus:ring-2 focus:ring-elegant-rose/20 transition-all"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-soft-mauve-gray" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-white/70 border border-white/30 rounded-full focus:outline-none focus:border-elegant-rose appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-soft-mauve-gray" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-white/70 border border-white/30 rounded-full focus:outline-none focus:border-elegant-rose appearance-none"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-soft-mauve-gray">
            Showing {filteredPrograms.length} program{filteredPrograms.length !== 1 ? 's' : ''}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {selectedLocation !== "All" && ` in ${selectedLocation}`}
          </p>
          <div className="flex items-center gap-2 text-sm text-soft-mauve-gray">
            <TrendingUp className="w-4 h-4" />
            <span>Sorted by impact</span>
          </div>
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-soft-mauve-gray" />
            </div>
            <h3 className="text-xl font-semibold text-rich-cocoa mb-2">No programs found</h3>
            <p className="text-soft-mauve-gray mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedLocation("All");
              }}
              className="px-6 py-3 bg-elegant-rose text-white rounded-full hover:bg-elegant-rose/90 transition-all"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="glass-blush-card rounded-3xl p-8 max-w-2xl mx-auto">
            <h2 className="clamp-text-3xl font-bold text-rich-cocoa mb-4">Ready to Make a Difference?</h2>
            <p className="text-soft-mauve-gray mb-6">
              Your donation can transform lives. Choose a program that speaks to your heart.
            </p>
            <Link href="/donate" className="magnetic-button px-8 py-4 text-lg">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
