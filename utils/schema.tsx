import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aioutput", {
    id: serial("id").primaryKey(),
    formData: varchar("formdata").notNull(),
    aiResponse: text("aiResponse"),
    wordCount: integer("word_count").default(0), 
    templateSlug: varchar("templateSlug").notNull(),
    createdBy: varchar("createdBy").notNull(),
    createdAt: varchar("createdAt")
})