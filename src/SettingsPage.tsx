import { useState, type FormEvent } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Field } from '../ui/Field';
import { Input } from '../ui/Input';
import { Switch } from '../ui/Switch';
import styles from './SettingsPage.module.css';

/** Demo data stays in this mounted React page; nothing is sent or persisted. */
export function SettingsPage() {
  const [name, setName] = useState('Alex Reviewer');
  const [email, setEmail] = useState('alex@example.com');
  const [notifications, setNotifications] = useState(true);
  const [saved, setSaved] = useState(false);
  function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
  }
  return <main className={styles.page}>
    <h1>Account settings</h1>
    <p className={styles.intro}>Local reviewer demo. Changes stay in this page and reset when you reload.</p>
    <Card title="Profile and preferences" description="Choose how your demo profile appears and which updates you receive.">
      <form className={styles.form} onSubmit={save} onChange={() => setSaved(false)}>
        <Field name="name" label="Profile name" value={name} onChange={setName} />
        <Input name="email" label="Email" type="email" value={email} autoComplete="email" required onChange={setEmail} />
        <Switch label="Email notifications" checked={notifications} onCheckedChange={(checked) => { setNotifications(checked); setSaved(false); }} />
        <div className={styles.actions}><Button type="submit">Save changes</Button><p role="status">{saved ? 'Saved for this demo session. Your real account is unchanged.' : ''}</p></div>
      </form>
    </Card>
  </main>;
}
