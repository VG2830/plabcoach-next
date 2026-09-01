export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" className={className}>
      <circle cx="9" cy="9" r="8" fill="currentColor" />
      <path d="m5.2 9.1 2.3 2.4 5.3-5.2" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ScheduleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" className={className}>
      <path d="M9 1.5 11 3l2.5-.2.8 2.3 2.2 1.4-.8 2.4.8 2.4-2.2 1.4-.8 2.3-2.5-.2L9 16.5l-2-1.7-2.5.2-.8-2.3-2.2-1.4.8-2.4-.8-2.4 2.2-1.4.8-2.3L7 3 9 1.5Z" fill="currentColor" />
      <circle cx="9" cy="9" r="2.25" fill="white" />
    </svg>
  );
}

export function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={className}>
      <path d="m10 1.7 2.45 4.96 5.47.8-3.96 3.86.94 5.45L10 14.2l-4.9 2.57.94-5.45L2.08 7.46l5.47-.8L10 1.7Z" fill="currentColor" />
    </svg>
  );
}
