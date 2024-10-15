const config = {
  title: "Harold Pinter | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Harold, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Harold, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Harold",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Harold Pinter",
  email: "l.s.pli1995@gmail.com",
  site: "https://HaroldPinter.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    discord: "pli0173_47897",
    linkedin: "https://www.linkedin.com/in/Harold0107/",
    instagram: "https://www.instagram.com/hotchaddi",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/Harold0107",
  },
};
export { config };
