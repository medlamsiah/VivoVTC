import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function csvEscape(value: unknown) {
  const s = value === null || value === undefined ? "" : String(value);
  return `"${s.replace(/"/g, '""')}"`;
}

export async function GET() {
  const { prisma } = await import("@/lib/prisma");

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

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
  ].join(",");

  const rows = leads
    .map((l: any) =>
      [
        l.createdAt?.toISOString?.() ?? "",
        l.fullName ?? "",
        l.email ?? "",
        l.phone ?? "",
        l.city ?? "",
        l.hasCardVTC ?? "",
        l.hasVehicle ?? "",
        l.experience ?? "",
        l.platforms ?? "",
        l.weeklyHours ?? "",
        l.message ?? "",
      ]
        .map(csvEscape)
        .join(",")
    )
    .join("\n");

  const csv = `${header}\n${rows}\n`;

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="vivo_leads.csv"',
      "Cache-Control": "no-store",
    },
  });
}
