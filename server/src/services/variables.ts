import { dotenvConfig } from '../libs/dotenvConfig';

const variables = {
    test: process.env.TEST_VARIABLE_NAME ?? dotenvConfig.parsed.TEST_VARIABLE_NAME ?? "N/A",
    environment: process.env.CURRENT_ENVIRONMENT ?? dotenvConfig.parsed.CURRENT_ENVIRONMENT ?? "N/A",
    port: process.env.PORT ?? process.env.PORT ?? "8080"
}

export default variables;