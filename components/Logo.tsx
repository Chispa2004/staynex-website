type StaynexMarkProps = {
  className?: string;
};

type BrandLockupProps = {
  descriptor: string;
  className?: string;
  compact?: boolean;
};

export function StaynexMark({ className = "" }: StaynexMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={`staynex-logo-mark ${className}`}
      fill="none"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 3.8 55.6 17.4v27.2L32 58.2 8.4 44.6V17.4L32 3.8Z"
        fill="url(#staynexMarkGradient)"
      />
      <path
        d="M32 3.8 55.6 17.4v27.2L32 58.2 8.4 44.6V17.4L32 3.8Z"
        stroke="rgba(255,255,255,.32)"
        strokeWidth="1.4"
      />
      <path
        d="M39.9 22.2c-2-2-4.8-3.1-8-3.1-5.4 0-9.1 2.8-9.1 6.8 0 4.4 3.8 5.7 8.5 6.7 4.1.9 5.6 1.5 5.6 3.4 0 1.8-1.8 3-4.8 3-3.4 0-6-1.2-8.2-3.5l-3.6 4.2c2.9 3.1 6.9 4.7 11.7 4.7 6 0 10-2.9 10-7.3 0-4.8-4-6.2-8.9-7.2-3.8-.8-5.2-1.4-5.2-3.1 0-1.5 1.5-2.6 4.1-2.6 2.8 0 5 .9 6.9 2.7l3-4.7Z"
        fill="white"
      />
      <defs>
        <linearGradient id="staynexMarkGradient" x1="11" x2="53" y1="10" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4C8DFF" />
          <stop offset=".56" stopColor="#2864FF" />
          <stop offset="1" stopColor="#123DBA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BrandLockup({ descriptor, className = "", compact = false }: BrandLockupProps) {
  return (
    <span className={`brand-lockup ${compact ? "brand-lockup-compact" : ""} ${className}`}>
      <StaynexMark />
      <span>
        <strong>Staynex</strong>
        {!compact ? <small>{descriptor}</small> : null}
      </span>
    </span>
  );
}
