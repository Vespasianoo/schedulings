-- CreateTable
CREATE TABLE "Dia" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Dia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agendamento" (
    "id" TEXT NOT NULL,
    "diaId" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "interest" TEXT NOT NULL,
    "entryValue" INTEGER,
    "installment" INTEGER,
    "credit" INTEGER,
    "weekDay" TEXT NOT NULL,
    "hour" TEXT NOT NULL,

    CONSTRAINT "Agendamento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_diaId_fkey" FOREIGN KEY ("diaId") REFERENCES "Dia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
