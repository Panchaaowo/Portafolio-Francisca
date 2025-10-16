import { Card, Button } from "react-bootstrap";

type Props = { title: string; description: string; image?: string; link?: string };

export default function ProjectCard({ title, description, image, link }: Props) {
  return (
    <Card className="bg-secondary-subtle border-0 shadow-sm h-100">
      {image && <Card.Img variant="top" src={image} alt={title} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {link && <Button variant="dark" href={link} target="_blank" rel="noreferrer">Ver proyecto</Button>}
      </Card.Body>
    </Card>
  );
}
