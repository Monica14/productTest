import dotenv from 'dotenv'
dotenv.config();

export const environmentConfiguration = {
    PORT : process.env.PORT,
    HOST_IP : process.env.HOST_IP,
    DB_URL : process.env.DB_URL,
    secret_key : process.env.SECRET_KEY
}