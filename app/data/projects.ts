export type Project = {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
};

export const projectsData: Project[] = [
  {
    title: "Portafolio Web",
    description: "SPA con React Router y Bootstrap.",
    image: "app/assts/img/portaaaa.png",
    link: "https://github.com/Panchaaowo/Portafolio-Francisca",
    tags: ["React", "TypeScript", "Bootstrap"],
  },
  {
    title: "Proyecto-Perfulandia",
    description: "CRUD con Spring Boot + MySQL.",
    image: "app/assts/img/perfu.png",
    link: "https://github.com/Panchaaowo/Proyecto-Perfulandia",
    tags: ["Java", "Spring Boot", "MySQL", "Swagger", "Postman"],
  },
];
