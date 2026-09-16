import { Input as FragmentsInput } from '@usefragments/ui';
export interface FieldProps { name: string; label: string; value: string; onChange: (value: string) => void; }
/** A labeled required profile-field adapter over Fragments Input's built-in Field. */
export function Field({ name, label, value, onChange }: FieldProps) {
  return <FragmentsInput name={name} label={label} value={value} onChange={onChange} required autoComplete="name" />;
}
