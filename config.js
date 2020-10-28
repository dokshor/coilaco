IS_PRODUCTION = process.env.NODE_ENV === 'production'
DATABASE = (!IS_PRODUCTION) ? "coilaco-development" : "coilaco-production";