const variables = {
    test: process.env.TEST_VARIABLE_NAME ?? "N/A",
    environment: process.env.CURRENT_ENVIRONMENT ?? "N/A"
}

export default variables;