// @ts-check
import withPlaiceholder from "@plaiceholder/next";
 
/**
 * @type {import('next').NextConfig}
 */
const config = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
 
export default withPlaiceholder(config);


