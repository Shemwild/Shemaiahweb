const config = {
  title: "Shemaiah Paramesvaran | Developer Portfolio",
  description: {
    long: "Motivated AI & ML undergraduate with a strong foundation in software development and artificial intelligence. Skilled in communication, leadership, negotiation, and teamwork.",
    short:
      "AI & ML undergraduate with a strong foundation in software development, Artificial Intelligence, and IoT.",
  },
  keywords: [
    "Shemaiah Paramesvaran",
    "Developer",
    "Artificial Intelligence",
    "Machine Learning",
    "IoT",
    "FastAPI",
    "React.js",
    "Python",
    "Karunya Institute of Technology and Sciences",
    "portfolio",
  ],
  author: "Shemaiah Paramesvaran",
  email: "nambikkai6@gmail.com",
  phone: "9363055121",
  site: "https://shemwild.github.io",

  // for github stars button
  githubUsername: "Shemwild",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/shemaiah-paramesvaran/?skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BnsiBnqHxSymKorVO%2Bithzw%3D%3D",
    instagram: "https://www.instagram.com/shemwild/?hl=en",
    github: "https://github.com/Shemwild",
  },
};
export { config };
