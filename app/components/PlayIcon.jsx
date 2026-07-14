export default function PlayIcon({ size = 220, color = "#ffffff", weight = 3 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <rect x="16" y="16" width="68" height="68" stroke={color} strokeWidth={weight} />
      <line x1="50" y1="5" x2="50" y2="16" stroke={color} strokeWidth={weight} />
      <line x1="50" y1="84" x2="50" y2="95" stroke={color} strokeWidth={weight} />
      <line x1="5" y1="50" x2="16" y2="50" stroke={color} strokeWidth={weight} />
      <line x1="84" y1="50" x2="95" y2="50" stroke={color} strokeWidth={weight} />
      <line x1="40" y1="60" x2="59" y2="41" stroke={color} strokeWidth={weight} />
      <path d="M63 37 L55.5 39.5 L60.5 44.5 Z" fill={color} />
      <circle cx="36" cy="64" r="7" stroke={color} strokeWidth={weight} />
      <circle cx="66" cy="34" r="7" stroke={color} strokeWidth={weight} />
    </svg>
  );
}
