import dotenv from 'dotenv';
dotenv.config();

try {
  dotenv.config();
} catch (error) {
  console.error('Error loading environment variables:', error);
  process.exit(1);
}

export const MONGO_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET';
export const SIGN_MESSAGE = 'Sign this message to authenticate your wallet';
export const CONNECTION = process.env.RPC_URL || 'https://api.mainnet-beta.solana.com';
export const UNIT = 180;
export const EXCHANGE_RATE = 100;
export const ADMIN_ACCOUNT = "4Y2QYrRGYonzy8R3fJ4cmLXies6q6tLFJF7ThNFbWfwx";
export const HPL_TOKEN_MINT = ""
