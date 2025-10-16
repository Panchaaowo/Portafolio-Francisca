// app/data/certifications.ts
export type Certification = {
  title: string;
  issuer: string;
  date: string;          // mejor ISO: YYYY-MM-DD
  credentialId: string;
  image: string;         // miniatura (opcional)
  verifyUrl: string;     // ← link externo de verificación
};

export const certificationsData: Certification[] = [
  {
    title: "Ethical Hacking Professional Certification",
    issuer: "International Cybersecurity Institute",
    date: "2025-10-15",
    credentialId: "ABC-123",
    image: "app/assts/img/Ethical.png",
    verifyUrl: "public/certs/certificate.pdf",              // ← tu link
  },
  {
    title: "Python Essentials",
    issuer: "Python Institute",
    date: "2024-06-03",
    credentialId: "XYZ-987",
    image: "app/assts/img/python.png",
    verifyUrl: "public/certs/python.pdf",  // ← tu link
  },
];
