import { Search } from 'lucide-react';

export default function ProductSearch({ value, onChange }) {
  return (
    <label className="product-search">
      <Search size={19} aria-hidden="true" />
      <span className="visually-hidden">Search products</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search solar solutions"
      />
    </label>
  );
}
