import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  BsAward,
  BsBuilding,
  BsCalendar2,
  BsHash,
  BsBoxArrowUpRight,
} from "react-icons/bs";

type Props = {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  verifyUrl: string;     
};

export default function CertificationCard({
  title, issuer, date, credentialId, image, verifyUrl
}: Props) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        style={{ height: 160, objectFit: "cover", background: "#111" }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "data:image/svg+xml," +
            encodeURIComponent(
              `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='160'>
                 <rect width='100%' height='100%' fill='#222'/>
                 <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#080808ff' font-family='sans-serif' font-size='16'>Sin imagen</text>
               </svg>`
            );
        }}
      />
      <Card.Body>
        <Card.Title className="mb-1 d-flex align-items-center gap-2">
          <BsAward aria-hidden className="text-primary" />
          <span>{title}</span>
        </Card.Title>

        <Card.Subtitle className="text-muted mb-2 d-flex align-items-center gap-2">
          <BsBuilding aria-hidden />
          <span>{issuer}</span>
        </Card.Subtitle>

        <Card.Text className="small mb-3">
          <div className="d-flex align-items-center gap-2 mb-1">
            <BsCalendar2 aria-hidden />
            <span>Fecha: {new Date(date).toLocaleDateString()}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <BsHash aria-hidden />
            <span>ID: {credentialId}</span>
          </div>
        </Card.Text>

        <Button
          as="a"
          href={verifyUrl}
          target="_blank"
          rel="noreferrer"
          variant="primary"
          className="d-inline-flex align-items-center gap-2"
        >
          <span>Validar</span>
          <BsBoxArrowUpRight aria-hidden />
        </Button>
      </Card.Body>
    </Card>
  );
}
