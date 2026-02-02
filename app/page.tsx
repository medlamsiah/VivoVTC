import Image from "next/image";
import Link from "next/link";
import { AvatarGroup } from "@/components/avatar-group";
import { Accordion } from "@/components/accordion";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  const manifesto = [
    {
      title: "Un secteur en plein déséquilibre",
      content:
        "Temps personnel limité, pression des plateformes, revenus variables : le métier est exigeant. VIVO structure le parcours et vous aide à vous projeter.",
    },
    {
      title: "Des conditions de travail précaires",
      content:
        "Beaucoup de chauffeurs subissent une organisation sub-optimale. Nous proposons une candidature guidée et une approche orientée simplicité et transparence.",
    },
    {
      title: "+45h sur la route / semaine",
      content:
        "Le temps compte. Notre questionnaire est pensé pour être complété rapidement (1 question par écran), puis les équipes reprennent contact avec vous.",
    },
  ];

  return (
    <div>
      {/* HERO (inspiré par Stairling, palette VIVO turquoise) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/chauffeur-vtc.jpg"
            alt="Chauffeur VTC"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                <span className="h-2 w-2 rounded-full bg-vivo" />
                Rejoignez les chauffeurs VIVO
              </div>

              <div className="mt-5">
                <AvatarGroup />
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl md:leading-[1.05]">
                VIVO simplifie votre quotidien de chauffeur VTC
              </h1>

              <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
                Candidature guidée en quelques étapes, simulateur clair et suivi des demandes.
                Un parcours pensé conversion, simple et rapide.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/candidature" className="btn btn-primary">
                  Candidater maintenant
                </Link>
                <Link href="/simulateur" className="btn border-white/20 bg-white/10 text-white hover:bg-white/15">
                  Simuler mes revenus
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/80">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-vivo" />
                  1 question = 1 écran
                </span>
                <span className="hidden h-4 w-px bg-white/20 sm:block" />
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-vivo" />
                  Simulation transparente
                </span>
                <span className="hidden h-4 w-px bg-white/20 sm:block" />
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-vivo" />
                  Réponse rapide
                </span>
              </div>
            </div>

            {/* CARD (style encart) */}
            <div className="md:justify-self-end">
              <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-6 shadow-soft backdrop-blur">
                <div className="text-sm font-semibold text-white">Candidater en 1 minute</div>
                <div className="mt-2 text-sm text-white/80">
                  Démarrez le questionnaire et recevez un retour rapide.
                </div>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/80">
                    Étapes courtes • Progression visible
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/80">
                    Profil qualifié • Données sécurisées
                  </div>
                </div>

                <Link href="/candidature" className="btn btn-primary mt-6 w-full">
                  Démarrer
                </Link>

                <div className="mt-3 text-xs text-white/70">
                  En soumettant vos données, vous acceptez d’être contacté par l’équipe VIVO.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION MANIFESTE (inspirée de tes captures) */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Chauffeur VTC n’est pas un
              <span className="text-vivo"> métier facile</span>
            </h2>
            <p className="mt-4 max-w-xl text-gray-600">
              VIVO est pensé pour simplifier le parcours : candidature rapide, projection des revenus, et suivi structuré.
            </p>
            <Link href="/candidature" className="btn btn-primary mt-7">
              Candidater
            </Link>
          </div>

          <div>
            <Accordion items={manifesto} />
          </div>
        </div>
      </section>

      {/* SECTION TITRE CENTRAL (inspirée de "Rejoignez la révolution") */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-soft">
          <div className="text-sm font-semibold text-gray-600">L’OFFRE VIVO</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Rejoignez la dynamique :
            <span className="text-vivo"> devenez Chauffeur VTC</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Travaillez sur Uber, Bolt et d’autres plateformes. VIVO propose un parcours simple pour candidater et estimer vos revenus.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/candidature" className="btn btn-primary">
              Candidater maintenant
            </Link>
            <Link href="/simulateur" className="btn">
              Simuler mes revenus
            </Link>
          </div>
        </div>
      </section>

      {/* PARTENAIRES (inspiration: logos) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-soft">
          <div className="text-sm text-gray-600">Plateformes VTC partenaires</div>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-lg font-semibold text-gray-900">
            <span className="rounded-2xl bg-gray-50 px-4 py-2">Uber</span>
            <span className="rounded-2xl bg-gray-50 px-4 py-2">Heetch</span>
            <span className="rounded-2xl bg-gray-50 px-4 py-2">Bolt</span>
            <span className="rounded-2xl bg-gray-50 px-4 py-2">FreeNow</span>
            <span className="rounded-2xl bg-gray-50 px-4 py-2">LeCab</span>
            <span className="rounded-2xl bg-gray-50 px-4 py-2">+ autres</span>
          </div>
        </div>
      </section>

      {/* FEATURES (grille comme tes captures) */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-vivo p-8 text-white shadow-soft">
            <div className="text-sm font-semibold text-white/90">Roulez à votre rythme</div>
            <div className="mt-2 text-2xl font-semibold">Organisation simple et onboarding rapide</div>
            <p className="mt-3 text-white/90">
              Candidature guidée, sans formulaire long. Vous avancez étape par étape.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/95">
              <span className="h-2 w-2 rounded-full bg-white" />
              Travaillez où et quand vous voulez
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-soft">
            <div className="text-sm font-semibold text-gray-700">Optimisez votre activité</div>
            <div className="mt-2 text-2xl font-semibold">Simulateur clair et transparent</div>
            <p className="mt-3 text-gray-600">
              Estimez vos revenus nets en fonction de votre chiffre d’affaires et de votre rythme.
            </p>
            <Link href="/simulateur" className="btn mt-6">Tester le simulateur</Link>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-soft">
            <div className="text-sm font-semibold text-gray-700">Sécurisez votre avenir</div>
            <div className="mt-2 text-2xl font-semibold">Données structurées et suivi</div>
            <p className="mt-3 text-gray-600">
              Les candidatures sont enregistrées et consultables côté administration (dashboard).
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-gray-600">
              <span className="h-2 w-2 rounded-full bg-vivo" />
              Statistiques + export CSV
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-900 p-8 text-white shadow-soft">
            <div className="text-sm font-semibold text-white/90">Zéro paperasse inutile</div>
            <div className="mt-2 text-2xl font-semibold">Un parcours pensé pour convertir</div>
            <p className="mt-3 text-white/85">
              UX inspirée des meilleurs parcours de candidature (progression, recap, envoi sécurisé).
            </p>
            <Link href="/candidature" className="btn btn-primary mt-6">Je candidate</Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
