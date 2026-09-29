import React from 'react';
import { CLIENTS_LIST } from '../data/portfolioData';
interface Props {
  client: string; className?: string; logoClassName?: string;
  textClassName?: string; theme?: 'dark' | 'light' | 'auto'; showSubtitle?: boolean;
}
export const ClientBrandLockup: React.FC<Props> = ({ client, className = '', logoClassName = '', textClassName = '' }) => {
  const normalized = client.startsWith('SOHO') ? 'SOHO' : client;
  const entry = CLIENTS_LIST.find(item => item.name === normalized);
  return <span className={`client-lockup ${className}`}>
    {entry?.logo ? <img src={`/images/clients/${entry.logo}`} alt={client} loading="lazy" decoding="async" className={`client-logo ${logoClassName}`} /> : <span className={`font-semibold tracking-tight ${textClassName}`}>{client}</span>}
    {client === 'OPPEIN HYDERABAD' && <span className="block mt-2 text-[10px] tracking-widest">OPPEIN HYDERABAD</span>}
  </span>;
};
