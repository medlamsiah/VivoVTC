import { prisma } from "@/lib/prisma";
import { SectionTitle, StatCard } from "@/components/ui";
import { LeadsCharts } from "@/components/leads-charts";
import { ExportCsvButton } from "@/components/export-csv";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const total = await prisma.lead.count();
  const last7 = await prisma.lead.count({
    where: { createdAt: { gte: new Date(Date.now() - 7 * 24 * 3600 * 1000) } },
  });

  const byCard = await prisma.lead.groupBy({
    by: ["hasCardVTC"],
    _count: { _all: true },
  });
  const byVehicle = await prisma.lead.groupBy({
    by: ["hasVehicle"],
    _count: { _all: true },
  });
  const byExp = await prisma.lead.groupBy({
    by: ["experience"],
    _count: { _all: true },
  });

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-start justify-between gap-4">
        <SectionTitle
          title="Dashboard (MVP)"
          subtitle="Vue rapide des réponses au questionnaire. Cette partie peut évoluer (auth, filtres, segmentation…)."
        />
        <ExportCsvButton />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Candidatures" value={String(total)} hint="Total en base" />
        <StatCard label="7 derniers jours" value={String(last7)} hint="Entrées récentes" />
        <StatCard label="Dernière MAJ" value={new Date().toLocaleString("fr-FR")} hint="côté serveur" />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <LeadsCharts byCard={byCard} byVehicle={byVehicle} byExp={byExp} />
        <div className="card p-6">
          <div className="text-sm font-semibold">Dernières candidatures</div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-gray-500">
                <tr>
                  <th className="py-2">Date</th>
                  <th>Nom</th>
                  <th>Ville</th>
                  <th>Carte</th>
                  <th>Véhicule</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id} className="border-t border-gray-100">
                    <td className="py-2">{new Date(l.createdAt).toLocaleDateString("fr-FR")}</td>
                    <td className="font-medium">{l.fullName}</td>
                    <td className="text-gray-600">{l.city ?? "-"}</td>
                    <td>{l.hasCardVTC ? "Oui" : "Non"}</td>
                    <td>{l.hasVehicle ? "Oui" : "Non"}</td>
                  </tr>
                ))}
                {leads.length === 0 ? (
                  <tr>
                    <td className="py-6 text-gray-500" colSpan={5}>
                      Aucune candidature pour le moment.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
