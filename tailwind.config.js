// tailwind.config.js
module.exports = {
    purge: {
      content: ['./src/**/*.html', './src/**/*.js'], // Adjust paths to your project structure
      options: {
        safelist: ['class-to-keep'], // Add any classes you don't want to be purged
      },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };  