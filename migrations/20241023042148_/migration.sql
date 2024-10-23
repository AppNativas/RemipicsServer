-- CreateTable
CREATE TABLE "usuario" (
    "usuario_id" SERIAL NOT NULL,
    "correo" VARCHAR(255) NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "apellido" VARCHAR(255),
    "fecha_naci" DATE,
    "sexo" VARCHAR(20),
    "contraseña" VARCHAR(255) NOT NULL,
    "direccion" VARCHAR(255),

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("usuario_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_correo_key" ON "usuario"("correo");
