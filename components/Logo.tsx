export function BrandLockup({descriptor}: {descriptor: string}) {
  return <span className="brand-lockup"><span className="brand-monogram" aria-hidden="true">H</span><span><strong>Hospedios</strong><small>{descriptor}</small></span></span>;
}
