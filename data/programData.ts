export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  progress: number;
  goal: number;
  raised: number;
  location: string;
  tags: string[];
}

export const programs: Program[] = [
  {
    id: "education-for-all",
    title: "Education For All",
    description: "Providing quality education to children in underserved communities across 12 countries.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop",
    progress: 78,
    goal: 500000,
    raised: 390000,
    location: "Global",
    tags: ["Education", "Children", "Global"],
  },
  {
    id: "clean-water-initiative",
    title: "Clean Water Initiative",
    description: "Building sustainable water infrastructure in drought-prone regions of East Africa.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
    progress: 62,
    goal: 350000,
    raised: 217000,
    location: "East Africa",
    tags: ["Water", "Infrastructure", "Africa"],
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment",
    description: "Vocational training and micro-loans for women in rural Southeast Asia.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2070&auto=format&fit=crop",
    progress: 89,
    goal: 200000,
    raised: 178000,
    location: "Southeast Asia",
    tags: ["Women", "Empowerment", "Asia"],
  },
  {
    id: "disaster-relief",
    title: "Disaster Relief",
    description: "Rapid response teams and emergency aid for communities affected by natural disasters.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
    progress: 45,
    goal: 1000000,
    raised: 450000,
    location: "Global",
    tags: ["Disaster", "Relief", "Emergency"],
  },
];

export const getProgram = (id: string) => programs.find((p) => p.id === id);
