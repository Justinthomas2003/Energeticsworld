export default function ProductFilters({ categories, value, onChange, onClear, hasFilters }) {
  return (
    <div className="product-filters">
      <label>
        <span>Category</span>
        <select value={value} onChange={(event) => onChange(event.target.value)}>
          <option value="all">All solutions</option>
          {categories.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      {hasFilters && <button className="clear-filters" type="button" onClick={onClear}>Clear filters</button>}
    </div>
  );
}
