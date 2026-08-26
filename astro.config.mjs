// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.google(),
        name: 'Lexend',
        cssVariable: '--font-lexend',
        subsets: ['latin'],
        fallbacks: ['sans-serif'],
    }]
});
