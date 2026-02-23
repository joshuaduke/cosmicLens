import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [new URL("https://images-assets.nasa.gov/image/**")],
	},
};

export default nextConfig;
