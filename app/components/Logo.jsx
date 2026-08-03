import Image from "next/image";

export default function Logo({ size = 48, className = "", priority = false }) {
  return (
    <Image
      src="/logo.png"
      alt="Playbook Strategies"
      width={size}
      height={size}
      className={className}
      priority={priority}
    />
  );
}
