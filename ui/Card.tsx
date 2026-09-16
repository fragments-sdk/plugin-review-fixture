import { Card as FragmentsCard } from '@usefragments/ui';
import type { ReactNode } from 'react';
export interface CardProps { title: string; description: string; children: ReactNode; }
/** Small documented adapter over Fragments' compound Card API. */
export function Card({ title, description, children }: CardProps) {
  return <FragmentsCard><FragmentsCard.Header><FragmentsCard.Title as="h2">{title}</FragmentsCard.Title><FragmentsCard.Description>{description}</FragmentsCard.Description></FragmentsCard.Header><FragmentsCard.Body>{children}</FragmentsCard.Body></FragmentsCard>;
}
