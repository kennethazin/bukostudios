/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL,
  },
};
export default nextConfig;
