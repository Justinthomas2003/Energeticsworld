import { AlertCircle, Search } from 'lucide-react';

export function EmptyState({ title = 'Nothing found', message = 'Try another search or clear your filters.' }) {
  return (
    <div className="empty-state">
      <Search size={24} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export function ErrorMessage({ children, id }) {
  return <p className="error-message" id={id} role="alert"><AlertCircle size={16} aria-hidden="true" />{children}</p>;
}

export function LoadingState({ label = 'Loading' }) {
  return <p className="loading-state" role="status">{label}…</p>;
}
