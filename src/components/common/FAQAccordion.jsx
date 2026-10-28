import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openItem, setOpenItem] = useState(0);
  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openItem === index;
        const panelId = `faq-answer-${index}`;
        return (
          <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenItem(isOpen ? null : index)}
              >
                {item.question}<Plus size={18} aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} hidden={!isOpen}><p>{item.answer}</p></div>
          </article>
        );
      })}
    </div>
  );
}
