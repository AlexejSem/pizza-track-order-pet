type IconProps = { size?: number; className?: string };

export function PizzaIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3 3 20h18L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="10" cy="14" r="1.3" fill="currentColor" />
      <circle cx="14" cy="14" r="1.3" fill="currentColor" />
      <circle cx="12" cy="10" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function DrinkIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 4h12l-1.5 16h-9L6 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 10h10" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function CupIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 6h12l-1 12H7L6 6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 6h12l-.5 2.5h-11L6 6Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function CartIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="20" r="1.4" fill="currentColor" />
      <circle cx="17" cy="20" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function CheckIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="m4 12 5 5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}