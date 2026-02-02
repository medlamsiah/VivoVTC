-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullName" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "city" TEXT,
    "hasCardVTC" BOOLEAN NOT NULL,
    "hasVehicle" BOOLEAN NOT NULL,
    "experience" TEXT NOT NULL,
    "platforms" TEXT NOT NULL,
    "weeklyHours" INTEGER,
    "message" TEXT
);

-- CreateTable
CREATE TABLE "Simulation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ca" REAL NOT NULL,
    "net" REAL NOT NULL,
    "leadId" TEXT,
    CONSTRAINT "Simulation_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Simulation_createdAt_idx" ON "Simulation"("createdAt");

-- CreateIndex
CREATE INDEX "Simulation_leadId_idx" ON "Simulation"("leadId");
