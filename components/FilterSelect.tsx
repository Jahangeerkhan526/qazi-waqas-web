"use client";
import { ChevronDown } from "lucide-react";

type Option = { value: string; label: string };

/* Native dropdown used in place of filter chips on phones */
export default function FilterSelect({
  label, value, options, onChange, grow = 1,
}: {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  grow?: number;
}) {
  return (
    <label className="fsel" style={{ flexGrow: grow }}>
      <span className="fsel-label">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <ChevronDown size={18} strokeWidth={2} aria-hidden="true" />
    </label>
  );
}
