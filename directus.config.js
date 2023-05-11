
module.exports = function (env) {
    return {
        // Railway inputs
        ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
        KEY: env.KEY,
        SECRET: env.SECRET,

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

        // Database variables from Railway PostgreSQL Plugin
        // Reference: https://docs.railway.app/plugins/postgresql
        DB_CLIENT: 'pg',
        DB_HOST: env.PGHOST,
        DB_PORT: env.PGPORT,
        DB_DATABASE: env.PGDATABASE,
        DB_USER: env.PGUSER,
        DB_PASSWORD: env.PGPASSWORD,
        
        CORS_ENABLED: true,
        CORS_ORIGIN: true,
        CORS_ALLOWED_HEADERS: "Set-Cookie,Content-Type,Authorization",

        REFRESH_TOKEN_COOKIE_DOMAIN:
          process.env.REFRESH_TOKEN_COOKIE_DOMAIN || "up.railway.app",
        REFRESH_TOKEN_COOKIE_SECURE: "true",
        REFRESH_TOKEN_COOKIE_SAME_SITE: "None",
    };
};
