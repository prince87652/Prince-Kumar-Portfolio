import { motion } from 'framer-motion';

const GitHubSection = () => {
  const username = 'johndoe'; // Replace with actual GitHub username

  return (
    <section className="py-20 md:py-32 relative">
      <div className="floating-orb w-64 h-64 bg-accent right-1/4 top-0 animate-pulse-glow" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My open source contributions and coding activity
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-8">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="glass-card p-2 overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=22d3ee&icon_color=34d399&text_color=94a3b8&bg_color=00000000`}
                alt="GitHub Stats"
                className="max-w-full h-auto"
              />
            </div>
            <div className="glass-card p-2 overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=22d3ee&text_color=94a3b8&bg_color=00000000`}
                alt="Top Languages"
                className="max-w-full h-auto"
              />
            </div>
          </motion.div>

          {/* GitHub Streak */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-2 overflow-hidden"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=22d3ee&fire=34d399&currStreakLabel=22d3ee&sideLabels=94a3b8&dates=64748b&currStreakNum=f1f5f9&sideNums=f1f5f9&background=00000000`}
              alt="GitHub Streak"
              className="max-w-full h-auto"
            />
          </motion.div>

          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl glass-card p-4 overflow-hidden"
          >
            <img
              src={`https://ghchart.rshah.org/22d3ee/${username}`}
              alt="GitHub Contribution Calendar"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
