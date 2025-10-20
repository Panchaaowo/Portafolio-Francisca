import React from "react";
import { Card } from "react-bootstrap";
import type { IconType } from "react-icons";

type Props = {
  name: string;
  iconUrl?: string;   
  Icon?: IconType;    
  color?: string;    
};

export default function SkillCard({ name, iconUrl, Icon, color }: Props) {
  return (
    <Card className="skill-tile h-100 text-center border-0 p-3" title={name}>
      <div className="d-grid gap-2 align-content-center justify-items-center">
        {}
        <div className="skill-icon-wrap">
          {Icon ? (
            <Icon size={28} color={color || "var(--primary-500)"} />
          ) : iconUrl ? (
            <img
              src={iconUrl}
              alt={name}
              width={28}
              height={28}
              style={{ objectFit: "contain" }}
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
            />
          ) : null}
        </div>
        <div className="small fw-semibold">{name}</div>
      </div>
    </Card>
  );
}
