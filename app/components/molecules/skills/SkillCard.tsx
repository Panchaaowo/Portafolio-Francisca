type Props = { name: string; icon?: string };
export default function SkillCard({ name, icon }: Props) {
  return (
    <div className="p-3 rounded bg-secondary-subtle text-dark text-center h-100">
      {icon && <i className={`bi ${icon} fs-1 d-block mb-2`} />}
      <strong>{name}</strong>
    </div>
  );
}
