import type { Profile } from "../types";

export const profile: Profile = {
  name: "Julián Divas",                               
  handle: "jdivass",                        
  role: "Software Developer",                  
  specialization: "Backend Systems & Security",
  mission: "Building reliable, secure and scalable software",
  bio: "Desarrollador de software enfocado en backend, arquitectura de sistemas y ciberseguridad. Apasionado por construir soluciones robustas y seguras. Explorando activamente el mundo de la seguridad informática.",
  location: "Guatemala",
  status: "AVAILABLE FOR OPPORTUNITIES",
  links: [
    { label: "GitHub",   url: "https://github.com/jdivass", icon: "GH" },
    { label: "LinkedIn", url: "www.linkedin.com/in/julián-divas-319a16414", icon: "LI" },
    { label: "Email",    url: "mailto:julianandre.divas@gmail.com", icon: "@"  },
  ],
  about: `I'm a software developer from Guatemala with a passion for building robust backend systems and exploring the world of cybersecurity. 
  I enjoy tackling complex problems and turning them into clean, maintainable solutions.
  When I'm not coding or learning to code, I'm usually playing videogames or watching football.
  I also am an animal lover, especially of dogs.`,

  coreAttributes: [
    { name: "Problem Solving",  value: 85 },
    { name: "System Thinking",  value: 80 },
    { name: "English",          value: 85 },
    { name: "Public Speaking",  value: 70 },
    { name: "Adaptability",     value: 85 },
    { name: "Self Learning",    value: 70 },
  ],
};