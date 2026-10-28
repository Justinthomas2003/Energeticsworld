import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { MemoryRouter } from 'react-router-dom';
import App from '../App.jsx';
import { ThemeProvider } from '../context/ThemeContext.jsx';
import ContactForm from '../components/forms/ContactForm.jsx';

function renderApp(initialRoute = '/') {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[initialRoute]}><App /></MemoryRouter>
    </ThemeProvider>,
  );
}

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
  vi.restoreAllMocks();
});

describe('site navigation and theme', () => {
  it('renders the main navigation and routes to the products page', async () => {
    const user = userEvent.setup();
    renderApp();
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    await user.click(within(screen.getByRole('navigation', { name: 'Main navigation' })).getByRole('link', { name: 'Products' }));
    expect(screen.getByRole('heading', { name: /find a solar solution/i })).toBeInTheDocument();
  });

  it('switches themes and persists the selected preference', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getByRole('button', { name: /switch to dark mode/i }));
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    expect(localStorage.getItem('energetics-theme')).toBe('dark');
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument();
  });

  it('opens the mobile navigation and closes it after a route is selected', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getByRole('button', { name: 'Open navigation' }));
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' });
    await user.click(within(mobileNav).getByRole('link', { name: 'About' }));
    expect(screen.getByRole('heading', { name: /local perspective/i })).toBeInTheDocument();
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument();
  });

  it('closes the mobile navigation when Escape is pressed', async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(screen.getByRole('button', { name: 'Open navigation' }));
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument();
  });

  it('renders a custom page for unknown routes', () => {
    renderApp('/not-a-real-page');
    expect(screen.getByRole('heading', { name: /gone off-grid/i })).toBeInTheDocument();
  });
});

describe('product catalogue', () => {
  it('searches products by name and displays an empty state for no matches', async () => {
    const user = userEvent.setup();
    renderApp('/products');
    await user.type(screen.getByRole('searchbox', { name: 'Search products' }), 'water pump');
    expect(screen.getByRole('heading', { name: 'Solar water pumps' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'On-grid solar PV' })).not.toBeInTheDocument();
    await user.clear(screen.getByRole('searchbox', { name: 'Search products' }));
    await user.type(screen.getByRole('searchbox', { name: 'Search products' }), 'no such product');
    expect(screen.getByRole('heading', { name: 'No matching solutions' })).toBeInTheDocument();
  });

  it('filters by category and clears all filters', async () => {
    const user = userEvent.setup();
    renderApp('/products');
    await user.selectOptions(screen.getByLabelText('Category'), 'Solar thermal');
    expect(screen.getByRole('heading', { name: 'Solar thermal solutions' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Off-grid solar PV' })).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Clear filters' }));
    expect(screen.getByRole('heading', { name: 'Off-grid solar PV' })).toBeInTheDocument();
  });

  it('opens product details and includes the selected product in an enquiry', async () => {
    const user = userEvent.setup();
    renderApp('/products');
    await user.click(screen.getAllByRole('link', { name: /view product details/i })[0]);
    expect(screen.getByRole('heading', { name: 'About On-grid solar PV' })).toBeInTheDocument();
    await user.click(screen.getByRole('link', { name: /enquire now/i }));
    expect(screen.getByLabelText(/^Subject/)).toHaveValue('Enquiry about On-grid solar PV');
  });

  it('opens a product detail page when its image is selected', async () => {
    const user = userEvent.setup();
    renderApp('/products');
    await user.click(screen.getByRole('link', { name: 'View On-grid solar PV details' }));
    expect(screen.getByRole('heading', { name: 'About On-grid solar PV' })).toBeInTheDocument();
    expect(screen.getByAltText('Solar panels installed across a sunlit rooftop')).toBeInTheDocument();
  });
});

describe('service details', () => {
  it('opens a dedicated detail page from a service card', async () => {
    const user = userEvent.setup();
    renderApp('/services');
    await user.click(screen.getByRole('link', { name: /residential solar/i }));
    expect(screen.getByRole('heading', { name: 'About Residential solar' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Solar panels arranged across a residential rooftop' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /enquire now/i })).toHaveAttribute('href', '/contact');
  });

  it('shows the not-found page for an unknown product or service', () => {
    const { unmount } = renderApp('/services/not-a-service');
    expect(screen.getByRole('heading', { name: /gone off-grid/i })).toBeInTheDocument();
    unmount();
    renderApp('/products/not-a-product');
    expect(screen.getByRole('heading', { name: /gone off-grid/i })).toBeInTheDocument();
  });
});

describe('company contact details', () => {
  it('shows the provided address, CIN, WhatsApp support and email', () => {
    renderApp('/contact');
    const contactInfo = within(screen.getByRole('heading', { name: 'Start with a conversation.' }).parentElement);
    expect(contactInfo.getByRole('link', { name: /Energetics Eco Technologies LLP/ })).toHaveAttribute('href', expect.stringContaining('Bellandur'));
    expect(contactInfo.getByText(/#48\/48\/1, Bellandur/)).toBeInTheDocument();
    expect(contactInfo.getByText('CIN: AAQ-9463')).toBeInTheDocument();
    expect(contactInfo.getByRole('link', { name: /help line \/ technical support whatsapp: \+91 99643 11000/i })).toHaveAttribute('href', 'https://wa.me/919964311000');
    expect(contactInfo.getByRole('link', { name: /support@energeticsworld\.com/i })).toHaveAttribute('href', 'mailto:support@energeticsworld.com');
    expect(contactInfo.getByRole('link', { name: 'Open compose email in Gmail' })).toHaveAttribute(
      'href',
      'https://mail.google.com/mail/?view=cm&fs=1&to=support%40energeticsworld.com',
    );
    expect(screen.getByRole('link', { name: 'Compose in Gmail' })).toHaveAttribute(
      'href',
      'https://mail.google.com/mail/?view=cm&fs=1&to=support%40energeticsworld.com',
    );
    expect(screen.getByRole('link', { name: /whatsapp technical support at \+91 99643 11000/i })).toHaveAttribute('href', 'https://wa.me/919964311000');
  });
});

describe('contact form', () => {
  it('announces validation errors and does not submit invalid details', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    render(<MemoryRouter><ContactForm endpoint="https://forms.example.test"></ContactForm></MemoryRouter>);
    await user.type(screen.getByLabelText(/^Email address/), 'not-an-email');
    await user.click(screen.getByRole('button', { name: 'Send enquiry' }));
    expect(screen.getByText('Enter your name.')).toBeInTheDocument();
    expect(screen.getByText('Enter a valid email address.')).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('requires an India-format phone number', async () => {
    const user = userEvent.setup();
    render(<MemoryRouter><ContactForm /></MemoryRouter>);
    await user.type(screen.getByLabelText(/^Your name/), 'Asha Rao');
    await user.type(screen.getByLabelText(/^Email address/), 'asha@example.com');
    await user.type(screen.getByLabelText(/^Phone number/), '12345');
    await user.type(screen.getByLabelText(/^Subject/), 'Solar enquiry');
    await user.type(screen.getByLabelText(/^How can we help/), 'Please contact me.');
    await user.click(screen.getByRole('button', { name: 'Send enquiry' }));
    expect(screen.getByText(/valid indian phone number/i)).toBeInTheDocument();
  });

  it('clearly reports that the form is not connected instead of claiming success', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    render(<MemoryRouter><ContactForm endpoint="" /></MemoryRouter>);
    await user.type(screen.getByLabelText(/^Your name/), 'Asha Rao');
    await user.type(screen.getByLabelText(/^Email address/), 'asha@example.com');
    await user.type(screen.getByLabelText(/^Phone number/), '+91 9964311000');
    await user.type(screen.getByLabelText(/^Subject/), 'Solar enquiry');
    await user.type(screen.getByLabelText(/^How can we help/), 'Please contact me.');
    await user.click(screen.getByRole('button', { name: 'Send enquiry' }));
    expect(screen.getByRole('alert')).toHaveTextContent(/not connected yet/i);
    expect(screen.getByRole('alert')).toHaveTextContent(/has not been sent/i);
    expect(screen.getByRole('alert')).toHaveTextContent(/WhatsApp \+91 99643 11000/i);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('reports successful delivery only after a configured endpoint responds successfully', async () => {
    const user = userEvent.setup();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }));
    render(<MemoryRouter><ContactForm endpoint="https://forms.example.test" /></MemoryRouter>);
    await user.type(screen.getByLabelText(/^Your name/), 'Asha Rao');
    await user.type(screen.getByLabelText(/^Email address/), 'asha@example.com');
    await user.type(screen.getByLabelText(/^Phone number/), '9964311000');
    await user.type(screen.getByLabelText(/^Subject/), 'Solar enquiry');
    await user.type(screen.getByLabelText(/^How can we help/), 'Please contact me.');
    await user.click(screen.getByRole('button', { name: 'Send enquiry' }));
    expect(await screen.findByRole('status')).toHaveTextContent(/enquiry has been sent/i);
  });

  it('reports endpoint failures without showing a success state', async () => {
    const user = userEvent.setup();
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 503 }));
    render(<MemoryRouter><ContactForm endpoint="https://forms.example.test" /></MemoryRouter>);
    await user.type(screen.getByLabelText(/^Your name/), 'Asha Rao');
    await user.type(screen.getByLabelText(/^Email address/), 'asha@example.com');
    await user.type(screen.getByLabelText(/^Phone number/), '9964311000');
    await user.type(screen.getByLabelText(/^Subject/), 'Solar enquiry');
    await user.type(screen.getByLabelText(/^How can we help/), 'Please contact me.');
    await user.click(screen.getByRole('button', { name: 'Send enquiry' }));
    expect(await screen.findByRole('alert')).toHaveTextContent(/could not send your enquiry/i);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
});

describe('accessibility smoke check', () => {
  it('has no axe violations on the home page', async () => {
    const { container } = renderApp('/');
    expect(await axe(container)).toHaveNoViolations();
  });
});
