import resolveConfig from 'tailwindcss/resolveConfig.js';

import tailwindConfig from './tailwind.config.js';

const { theme } = resolveConfig(tailwindConfig);
const keys = ['screens', 'colors'];
const trimmedTheme = {};
for (const key of keys) {
	trimmedTheme[key] = theme[key];
}

console.log({ theme });

// do something with theme
