import { defineConfig } from "vite";

export default defineConfig({
	base: "/reveal-js-presentacion/",
	server: {
		host: "127.0.0.1",
		port: 8000,
	},
	build: {
		outDir: "docs",
		emptyOutDir: true,
	},
});
