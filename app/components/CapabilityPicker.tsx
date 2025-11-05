"use client";

import { useMemo, useState } from 'react';

type Capability = {
  id: string;
  title: string;
  details: string[];
};

const CAPABILITIES: Capability[] = [
  {
    id: 'codegen',
    title: 'Sinh m? v? refactor',
    details: [
      'T?o t?nh n?ng m?i v?i chu?n code r? r?ng',
      'Refactor c? ki?m so?t v? gi? nguy?n h?nh vi',
      'Th?m test v? t? ??ng ho? CI'
    ]
  },
  {
    id: 'fix',
    title: 'S?a l?i v? t?i ?u',
    details: [
      'Ph?n t?ch chi ti?t nguy?n nh?n g?c r?',
      'C?i thi?n hi?u n?ng render, query, I/O',
      'Gi?m n? k? thu?t t?ng b??c'
    ]
  },
  {
    id: 'infra',
    title: 'Thi?t l?p & tri?n khai',
    details: [
      'C?u h?nh Next.js/Vercel, Docker c? b?n',
      'Vi?t pipeline CI/CD ??n gi?n',
      'Gi?m s?t log v? c?nh b?o'
    ]
  },
  {
    id: 'advice',
    title: 'T? v?n ki?n tr?c',
    details: [
      'L?a ch?n c?ng ngh? ph? h?p y?u c?u',
      'Thi?t k? module r? r?ng, d? m? r?ng',
      'Chu?n ho? API, schema d? li?u'
    ]
  }
];

export default function CapabilityPicker() {
  const [search, setSearch] = useState('');
  const [activeId, setActiveId] = useState<string>('codegen');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return CAPABILITIES;
    return CAPABILITIES.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.details.some(d => d.toLowerCase().includes(q))
    );
  }, [search]);

  const active = filtered.find(c => c.id === activeId) ?? filtered[0] ?? CAPABILITIES[0];

  return (
    <div id="demo" className="grid gap-6 lg:grid-cols-3">
      <div className="card p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-700">Ch?n kh? n?ng</h3>
          <span className="badge">Demo</span>
        </div>
        <div className="mt-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="T?m: tri?n khai, t?i ?u..."
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-brand-500"
          />
        </div>
        <ul className="mt-3 grid gap-2">
          {filtered.map(c => (
            <li key={c.id}>
              <button
                onClick={() => setActiveId(c.id)}
                className={`w-full rounded-xl px-3 py-2 text-left text-sm transition ${
                  active.id === c.id ? 'bg-brand-50 ring-1 ring-brand-200' : 'hover:bg-gray-50'
                }`}
              >
                {c.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="card p-5 lg:col-span-2">
        <h3 className="text-base font-semibold">{active.title}</h3>
        <ul className="mt-3 grid gap-2 text-sm text-gray-700">
          {active.details.map((d, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 size-1.5 rounded-full bg-brand-500" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <button className="btn-primary">B?t ??u c?ng t?i</button>
        </div>
      </div>
    </div>
  );
}
