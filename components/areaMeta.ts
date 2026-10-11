import { Building2, FlaskConical, Layers, Network, ShieldCheck, type LucideIcon } from "lucide-react";

/* Shared labels, icons and colour tones for research areas (About, Projects, Publications) */
export const areaMeta: Record<string, { label: string; Icon: LucideIcon; tone: string }> = {
  fl:       { label: "Federated learning",     Icon: Network,      tone: "blue" },
  energy:   { label: "Energy and buildings",   Icon: Building2,    tone: "orange" },
  security: { label: "Security and IoT",       Icon: ShieldCheck,  tone: "red" },
  fusion:   { label: "Healthcare and fusion",  Icon: Layers,       tone: "green" },
  other:    { label: "Applied AI",             Icon: FlaskConical, tone: "slate" },
};

export const areaOrder = ["fl", "energy", "security", "fusion", "other"];
