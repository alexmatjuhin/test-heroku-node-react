import dotenvConfig from './dotenvConfig';

const variables = {
    environment: process.env.CURRENT_ENVIRONMENT ?? dotenvConfig.parsed?.CURRENT_ENVIRONMENT ?? "N/A",
    port: process.env.PORT ?? dotenvConfig.parsed?.PORT ?? "8080"
}

export default variables;