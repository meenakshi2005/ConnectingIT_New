import CertificateCard from "./CertificateCard";


export default function CertificationSection({ title, items }) {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <CertificateCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
