import { Button as FragmentsButton } from '@usefragments/ui';
import type { ReactNode } from 'react';
export interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}
/** The fixture's Save action; forwards to the actual Fragments Button. */
export function Button({ children, type = 'button', disabled, onClick }: ButtonProps) {
  return <FragmentsButton type={type} disabled={disabled} onClick={onClick}>{children}</FragmentsButton>;
}
