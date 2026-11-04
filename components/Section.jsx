export default function Section({ id, title, children }) {
  return (
    <section id={id} className="wrap py-16 sm:py-20">
      <h2 className="mb-8 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {children}
    </section>
  );
}
