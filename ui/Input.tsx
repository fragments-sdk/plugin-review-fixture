import { Input as FragmentsInput } from '@usefragments/ui';
export interface InputProps {
  name: string;
  label: string;
  value: string;
  type?: 'text' | 'email';
  required?: boolean;
  autoComplete?: string;
  onChange: (value: string) => void;
}
/** Value-first callback; the real Input owns its visible label association. */
export function Input({ name, label, value, type = 'text', required, autoComplete, onChange }: InputProps) {
  return <FragmentsInput name={name} label={label} value={value} type={type} required={required} autoComplete={autoComplete} onChange={onChange} />;
}
