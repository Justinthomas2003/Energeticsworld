import { ErrorMessage } from '../common/States.jsx';

export default function FormField({ id, label, error, as = 'input', hint, ...props }) {
  const Component = as;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;
  return (
    <div className={`form-field${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>{label}{props.required && <span aria-hidden="true"> *</span>}</label>
      {hint && <p className="form-hint" id={hintId}>{hint}</p>}
      <Component id={id} name={id} aria-invalid={Boolean(error)} aria-describedby={describedBy} {...props} />
      {error && <ErrorMessage id={errorId}>{error}</ErrorMessage>}
    </div>
  );
}
