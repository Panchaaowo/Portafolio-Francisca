export type Project = {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
};

export const projectsData: Project[] = [
  { title: "Portafolio Web", description: "SPA con React Router y Bootstrap.", link: "#" },
  { title: "API Rest Demo", description: "CRUD con Spring Boot + MySQL.", link: "#" },
  { title: "Dashboard Pruebas", description: "Swagger + Postman collections.", link: "#" },
];
