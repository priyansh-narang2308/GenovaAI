/** @type {import("drizzle-kit").Config}*/

export default{
    dialect: "postgresql",
    schema: "./utils/schema.tsx",
    dbCredentials: {
        url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
    }
};
