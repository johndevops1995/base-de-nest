export default () => ({
  environment: process.env.NODE_ENV || 'develop',
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
  },
  rabbitmq: {
    connection: process.env.RABBITMQ_CONNECTION,
  },
  redis: {
    saveCachePrefixUserPropertyProfile: 'XXUPF',
    saveCachePrefixProfile: 'XXPF',
    url: process.env.REDIS_URL,
  },
  azureStorage: {
    connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
    containerName: process.env.AZURE_STORAGE_CONTAINER_NAME,
  },
});

