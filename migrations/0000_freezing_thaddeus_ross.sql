CREATE TYPE "public"."eventType" AS ENUM('Sopa', 'Cesta de Alimentos', 'Cesta de Natal', 'Leite', 'Cobertores', 'Enxoval');--> statement-breakpoint
CREATE TABLE "event" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "event_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" text NOT NULL,
	"type" "eventType",
	"startDate" date DEFAULT now(),
	"endDate" date DEFAULT now(),
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "event_type_idx" ON "event" USING btree ("id");