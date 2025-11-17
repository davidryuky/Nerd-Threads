export const theme = {
  // Base component class names (defined in index.html)
  button: 'theme-button',
  card: 'theme-card',
  input: 'theme-input',
  textGlow: 'text-glow-accent',

  // Layout and container classes
  container: {
    page: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12',
    page4xl: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12',
    section: 'bg-gray-800 p-8 rounded-lg border border-gray-700',
    login: 'w-full max-w-md bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-lg shadow-cyan-500/10',
  },

  // Typography classes (combinations of tailwind utilities)
  heading: {
    page: (center = false) => `text-5xl font-bold text-white ${center ? 'text-center mb-10' : 'mb-8'} ${theme.textGlow}`,
    section: (center = true) => `text-4xl font-bold text-white ${center ? 'text-center mb-10' : 'mb-6'}`,
    sub: 'text-2xl font-bold text-white mb-6',
    subLeft: 'text-3xl font-bold mb-6',
    card: 'text-lg font-bold text-white truncate group-hover:text-cyan-400 transition-colors',
    footer: 'text-sm font-semibold text-gray-400 tracking-wider uppercase',
  },
  text: {
    label: 'font-bold text-cyan-400 mb-3 uppercase tracking-wider text-sm',
    link: 'text-cyan-400 hover:underline',
    body: 'text-gray-300 leading-relaxed',
    prose: 'prose prose-invert prose-lg text-gray-300 space-y-6 leading-relaxed',
  },
  
  // FIX: Added admin styles for dashboard tables.
  admin: {
    table: {
      container: 'bg-gray-800 rounded-lg overflow-hidden border border-gray-700',
      header: 'bg-gray-700/50',
      th: 'p-4 uppercase text-sm text-gray-400 tracking-wider',
      tr: 'border-b border-gray-700 last:border-b-0 hover:bg-gray-700/30 transition-colors',
      td: 'p-4',
    },
  },

  // Dynamic classes for active/inactive states
  navButton: (isActive: boolean) => `text-left p-4 rounded-md transition-colors text-lg ${isActive ? 'bg-cyan-500 text-black' : 'hover:bg-gray-700'}`,
  dashboardNavButton: (isActive: boolean) => `text-left p-4 rounded-md transition-colors ${isActive ? 'bg-cyan-500 text-black' : 'hover:bg-gray-800'}`,
  catalogFilterButton: (isActive: boolean) => `w-full text-left px-3 py-2 rounded-md transition-colors text-gray-300 ${isActive ? 'bg-cyan-500 text-black font-bold' : 'hover:bg-gray-700'}`,
};
