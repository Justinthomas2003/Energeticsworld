import { useMemo, useState } from 'react';
import PageHero from '../components/common/PageHero.jsx';
import { EmptyState } from '../components/common/States.jsx';
import ProductCard from '../components/products/ProductCard.jsx';
import ProductFilters from '../components/products/ProductFilters.jsx';
import ProductSearch from '../components/products/ProductSearch.jsx';
import { productCategories, products } from '../data/products.js';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function Products() {
  useDocumentMeta('Solar products', 'Explore on-grid, off-grid and hybrid solar PV systems, solar water pumps, thermal solutions and solar accessories.');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'all' || product.category === category;
    const text = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    return matchesCategory && text.includes(query.trim().toLowerCase());
  }), [category, query]);
  const hasFilters = Boolean(query || category !== 'all');
  const clearFilters = () => {
    setQuery('');
    setCategory('all');
  };

  return (
    <>
      <PageHero
        eyebrow="SOLAR PRODUCTS & SOLUTIONS"
        title={<>Find a solar solution<br />for your needs.</>}
        description="Explore the solar power and solar thermal solutions listed by Energetics World."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }]}
      />
      <section className="section">
        <div className="container">
          <div className="catalogue-toolbar">
            <ProductSearch value={query} onChange={setQuery} />
            <ProductFilters categories={productCategories} value={category} onChange={setCategory} onClear={clearFilters} hasFilters={hasFilters} />
          </div>
          <p className="results-count" aria-live="polite">{filteredProducts.length} {filteredProducts.length === 1 ? 'solution' : 'solutions'}</p>
          {filteredProducts.length
            ? <div className="product-grid">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
            : <EmptyState title="No matching solutions" message="Try a different search, or clear your filters to see every solution." />}
          <p className="catalogue-note">System specifications and suitability depend on site assessment. Contact the team to discuss your requirements.</p>
        </div>
      </section>
    </>
  );
}
