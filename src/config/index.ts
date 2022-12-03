import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;
export const GB_FEATURES_API = process.env.GB_FEATURES_API;
export const MP_TOKEN = process.env.MP_TOKEN;
export const MP_ID = process.env.MP_ID;
