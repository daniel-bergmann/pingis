// Automagically switching between prod and dev mode

const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000/" : "https://pingis.is/";
