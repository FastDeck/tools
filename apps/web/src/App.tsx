import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  }),
};

const workspaces = [
  {
    icon: '🌐',
    iconClass: 'card__icon--web',
    title: 'Web App',
    description:
      'A blazing-fast React application powered by Vite. Modern UI with premium aesthetics, dark mode, and fluid animations.',
    tag: 'Active',
    tagClass: 'card__tag--active',
    package: '@fastdeck/web',
  },
  {
    icon: '🖥️',
    iconClass: 'card__icon--desktop',
    title: 'Desktop App',
    description:
      'A native desktop experience built with Electron.js. Cross-platform support for macOS, Windows, and Linux.',
    tag: 'Planned',
    tagClass: 'card__tag--planned',
    package: '@fastdeck/desktop',
  },
  {
    icon: '📱',
    iconClass: 'card__icon--mobile',
    title: 'Mobile App',
    description:
      'A React Native application delivering a smooth, native mobile experience for iOS and Android.',
    tag: 'Planned',
    tagClass: 'card__tag--planned',
    package: '@fastdeck/mobile',
  },
  {
    icon: '📦',
    iconClass: 'card__icon--shared',
    title: 'Shared Package',
    description:
      'Common types, utilities, and constants shared across all platforms. Write once, use everywhere.',
    tag: 'Active',
    tagClass: 'card__tag--active',
    package: '@fastdeck/shared',
  },
];

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav__brand">
          <div className="nav__logo" aria-hidden="true">FD</div>
          <span className="nav__title">FastDeck</span>
        </div>
        <ul className="nav__links">
          <li><a href="#workspaces" className="nav__link">Workspaces</a></li>
          <li>
            <a
              href="https://github.com/FastDeck/tools"
              className="nav__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <header className="hero">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <span className="hero__badge-dot" />
          Monorepo v0.1.0
        </motion.div>

        <h1 className="hero__title">
          Build for{' '}
          <span className="hero__title-gradient">every platform</span>
        </h1>

        <p className="hero__subtitle">
          A unified monorepo powering web, desktop, and mobile applications.
          One codebase, shared logic, premium experiences everywhere.
        </p>

        <div className="hero__actions">
          <motion.button
            className="btn btn--primary"
            id="get-started-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              document
                .getElementById('workspaces')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started
            <span aria-hidden="true">→</span>
          </motion.button>
          <motion.a
            className="btn btn--secondary"
            id="github-btn"
            href="https://github.com/FastDeck/tools"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            View on GitHub
          </motion.a>
        </div>
      </header>

      {/* Workspaces */}
      <section className="section" id="workspaces">
        <div className="section__header">
          <p className="section__eyebrow">Workspaces</p>
          <h2 className="section__title">Project Architecture</h2>
        </div>

        <div className="card-grid">
          {workspaces.map((ws, i) => (
            <motion.article
              key={ws.package}
              className="card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeInUp}
            >
              <div className={`card__icon ${ws.iconClass}`}>{ws.icon}</div>
              <h3 className="card__title">{ws.title}</h3>
              <p className="card__description">{ws.description}</p>
              <span className={`card__tag ${ws.tagClass}`}>{ws.tag}</span>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          Built with <span className="footer__heart">♥</span> by FastDeck
          &middot; MIT License
        </p>
      </footer>
    </div>
  );
}

export default App;
