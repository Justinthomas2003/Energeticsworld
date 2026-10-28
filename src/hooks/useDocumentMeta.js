import { useEffect } from 'react';

export default function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = `${title} | Energetics World`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }, [title, description]);
}
