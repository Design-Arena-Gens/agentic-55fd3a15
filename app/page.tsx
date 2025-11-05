import CapabilityPicker from './components/CapabilityPicker';

export default function Page() {
  return (
    <div className="container-xl">
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-200">
          <span className="size-1.5 rounded-full bg-brand-500" />
          Tr? l? ph?t tri?n ? s?n s?ng h? tr?
        </div>
        <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
          T?i c? th? gi?p g? cho b?n?
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-gray-600">
          Vi?t m?, s?a l?i, thi?t k? ki?n tr?c, t?i ?u hi?u n?ng, thi?t l?p CI/CD, v? tri?n khai ?ng d?ng.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#demo" className="btn-primary">Kh?m ph? nhanh</a>
          <a href="#features" className="rounded-xl px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-300 transition hover:bg-gray-50">Xem t?nh n?ng</a>
        </div>
      </section>

      <section id="features" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[{
          title: 'T? ??ng ho? c?ng vi?c dev',
          desc: 'T?o PR, vi?t test, c?p nh?t docs, gi? chu?n code.'
        }, {
          title: 'Ph?n t?ch & s?a l?i',
          desc: 'T?m nguy?n nh?n g?c, t?o b?n s?a an to?n v? ki?m th?.'
        }, {
          title: 'Tri?n khai d? d?ng',
          desc: 'Next.js + Vercel t?i ?u s?n cho s?n xu?t.'
        }].map((f, i) => (
          <div key={i} className="card p-5">
            <h3 className="text-base font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-700">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-14">
        <CapabilityPicker />
      </section>
    </div>
  );
}
