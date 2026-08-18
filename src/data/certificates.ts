export type Certificate = {
  name: string;
  issuer: string;
  image: string;
  gradient: string;
  url: string;
};

export const certificates: Certificate[] = [
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera · DeepLearning.AI",
    image: "/certificates/certificate1.jpg",
    gradient: "from-blue-500 to-purple-600",
    url: "#",
  },
  {
    name: "Full Stack Web Development",
    issuer: "Udemy",
    image: "/certificates/certificate2.jpg",
    gradient: "from-purple-500 to-pink-500",
    url: "#",
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    image: "/certificates/certificate3.jpg",
    gradient: "from-cyan-500 to-blue-600",
    url: "#",
  },
  {
    name: "MERN Stack Training",
    issuer: "InfoBeans Foundation",
    image: "/certificates/certificate4.jpg",
    gradient: "from-emerald-500 to-teal-600",
    url: "#",
  },
  {
    name: "AI Fundamentals",
    issuer: "Microsoft",
    image: "/certificates/certificate5.jpg",
    gradient: "from-orange-500 to-rose-500",
    url: "#",
  },
];
