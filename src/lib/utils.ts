import clsx from 'clsx';

export function cn(...inputs: any[]): string {
  return clsx(inputs);
}

export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
