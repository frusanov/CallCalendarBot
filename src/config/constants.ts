import * as dotenv from 'dotenv';
dotenv.config();

export const SCOPES = ['https://www.googleapis.com/auth/calendar'];

export const NODE_ENV = process.env.NODE_ENV as 'production' | 'development' | 'test';
export const BOT_TOKEN = process.env.BOT_TOKEN as string;
export const ADMIN_ID = process.env.ADMIN_ID as string;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
