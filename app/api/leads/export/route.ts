import { prisma } from "@/lib/prisma";

function csvEscape(v: unknown) {
  const s = String(v ?? "");
  if (s.includes(",") || s.includes('"') || s.includes("\n")) return '"' + s.replaceAll('"', '""') + '"';
  return s;
}

export async function GET() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });

  const header = [
    "createdAt",
    "fullName",
    "email",
    "phone",
    "city",
    "hasCardVTC",
    "hasVehicle",
    "experience",
    "platforms",
    "weeklyHours",
    "message",
  ];

  const rows = leads.map((l) =>
    [
      l.createdAt.toISOString(),
      l.fullName,
      l.email ?? "",
      l.phone ?? "",
      l.city ?? "",
      l.hasCardVTC ? "yes" : "no",
      l.hasVehicle ? "yes" : "no",
      l.experience,
      l.platforms,
      l.weeklyHours ?? "",
      l.message ?? "",
    ].map(csvEscape).join(",")
  );

  const csv = [header.join(","), ...rows].join("\n");

  return new Response(csv, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": "attachment; filename=vivo-leads.csv",
    },
  });
}
