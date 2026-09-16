import { Switch as FragmentsSwitch } from '@usefragments/ui';
export interface SwitchProps { label: string; checked: boolean; onCheckedChange: (checked: boolean) => void; }
/** Boolean callback and accessible label are forwarded without conversion. */
export function Switch({ label, checked, onCheckedChange }: SwitchProps) {
  return <FragmentsSwitch label={label} checked={checked} onCheckedChange={onCheckedChange} />;
}
