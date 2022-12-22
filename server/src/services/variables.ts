import { dotenvConfig } from '../libs/dotenvConfig';

const variables = {
    test: process.env.TEST_VARIABLE_NAME ?? dotenvConfig.parsed.TEST_VARIABLE_NAME ?? "N/A",
    environment: process.env.CURRENT_ENVIRONMENT ?? dotenvConfig.parsed.CURRENT_ENVIRONMENT ?? "N/A"
}

export default variables;