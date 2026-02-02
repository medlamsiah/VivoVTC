import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Force Next/Vercel to treat this route as dynamic (runtime only)
export const dynamic = "force-dynamic";
// Optional: ensure it runs on Node.js runtime (Prisma needs Node runtime)
export const runtime = "nodejs";

function csvEscape(v: unknown) {
  const s = v === null || v === undefined ? "" : String(v);
  return `"${s.replace(/"/g, '""')}"`;
}

export async function GET() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  const header = [
    "createdAt",
    "hasCardVTC",
    "hasVehicle",
    "experience",
    "hoursPerWeek",
    "platforms",
    "firstName",
    "lastName",
    "email",
    "phone",
    "city",
  ].join(",");

  const rows = leads
    .map((l: any) =>
      [
        l.createdAt?.toISOString?.() ?? "",
        l.hasCardVTC ?? "",
        l.hasVehicle ?? "",
        l.experience ?? "",
        l.hoursPerWeek ?? "",
        Array.isArray(l.platforms) ? l.platforms.join("|") : l.platforms ?? "",
        l.firstName ?? "",
        l.lastName ?? "",
        l.email ?? "",
        l.phone ?? "",
        l.city ?? "",
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
