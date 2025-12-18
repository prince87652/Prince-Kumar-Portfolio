import { motion } from "framer-motion";
import { Code, Briefcase, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="floating-orb w-72 h-72 bg-primary/40 top-20 -left-40 animate-pulse-glow" />
      <div
        className="floating-orb w-64 h-64 bg-accent/40 bottom-20 -right-40 animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A little background about who I am and what I do
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am a <span className="text-primary font-medium">Full Stack Developer</span>{" "}
              with hands-on experience in building modern, scalable web
              applications using the <span className="text-primary">MERN stack</span>.
              I enjoy turning complex problems into simple, elegant solutions.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              My journey into web development started with curiosity about how
              websites work, and it has grown into a passion for creating
              user-focused interfaces and reliable backend systems.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe in writing clean, maintainable code and continuously
              improving my skills by building real-world projects.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {/* Card 1 */}
            <div className="glass-card p-6 flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-primary/10">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">
                  Technical Skills
                </h4>
                <p className="text-muted-foreground">
                  React, Node.js, Express, MongoDB, Redux, Tailwind CSS,
                  JavaScript, TypeScript
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-6 flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-accent/10">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">
                  Practical Experience
                </h4>
                <p className="text-muted-foreground">
                  Built multiple real-world projects including booking systems,
                  dashboards, and management tools.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-6 flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">
                  Continuous Learning
                </h4>
                <p className="text-muted-foreground">
                  Actively improving my skills through projects, practice, and
                  industry-focused learning.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
