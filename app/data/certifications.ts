// app/data/certifications.ts
export type Certification = {
  title: string;
  issuer: string;
  date: string;         
  credentialId: string;
  image: string;         
  verifyUrl: string;    
  textClass?: string;    
};

export const certificationsData: Certification[] = [
  {
    title: "Ethical Hacking Professional Certification",
    issuer: "International Cybersecurity Institute",
    date: "2025-10-15",
    credentialId: "ABC-123",
    image: "app/assts/img/Ethical.png",
    verifyUrl: "public/certs/certificate.pdf",
    textClass: "text-white",              
  },
  {
    title: "Python Essentials",
    issuer: "Python Institute",
    date: "2024-06-03",
    credentialId: "XYZ-987",
    image: "app/assts/img/python.png",
    verifyUrl: "public/certs/python.pdf",
    textClass: "text-white",             
  },
  {
    title: " Certified ISO/IEC 27001 Foundation",
    issuer: "PECB",
    date: "2025-10-16",
    credentialId: "XYZ-987",
    image: "app/assts/img/ISO.png",
    verifyUrl: "public/certs/isooo.pdf",
    textClass: "text-white",               
  },
];
