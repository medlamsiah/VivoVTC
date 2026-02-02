import Link from "next/link";

type Testimonial = {
  name: string;
  title: string;
  quote: string;
};

const items: Testimonial[] = [
  {
    name: "Nourdine B.",
    title: "Chauffeur VTC",
    quote: "Le questionnaire est rapide et j’ai eu un retour clair. Le simulateur m’a aidé à me projeter.",
  },
  {
    name: "Sofiane K.",
    title: "Chauffeur partenaire",
    quote: "On comprend tout de suite les étapes. Le parcours est simple, et on se sent accompagné.",
  },
  {
    name: "Amine H.",
    title: "Candidat",
    quote: "UX propre et moderne. En 1 minute j’ai envoyé ma candidature sans galérer.",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-soft">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="text-sm font-semibold text-gray-600">Témoignages</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Ils ont candidaté avec VIVO</h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Une expérience simple : candidature en quelques étapes, puis suivi côté administration.
            </p>
          </div>

          <Link href="/candidature" className="btn btn-primary">
            Candidater maintenant
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div
              key={t.name}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-soft"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-vivo/15 via-transparent to-vivo-light/20" />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.title}</div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-soft">
                    <div className="h-0 w-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-gray-900/80" />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-700">“{t.quote}”</p>

                <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-vivo-dark">
                  <span className="h-2 w-2 rounded-full bg-vivo" />
                  Vidéo témoignage (bientôt)
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
