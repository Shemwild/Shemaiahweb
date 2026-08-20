"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Mail, Phone, Briefcase, GraduationCap, Code, FolderGit2, User } from "lucide-react";
import { config } from "@/data/config";
import { EXPERIENCE } from "@/data/constants";

export default function ResumeView() {

  return (
    <div className="flex min-h-screen flex-col font-sans bg-background text-foreground print:bg-white print:text-black">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 767px){ header { display: none !important; } }
            @media print {
              header, nav, .no-print { display: none !important; }
              body { background: white !important; color: black !important; }
              .resume-card { border: none !important; box-shadow: none !important; background: white !important; color: black !important; padding: 0 !important; }
            }
          `,
        }}
      />

      {/* Top Bar */}
      <div className="mx-auto w-full max-w-4xl shrink-0 px-4 pt-16 md:pt-24 no-print">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <div className="flex items-center gap-2" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="mx-auto flex w-full max-w-4xl flex-1 justify-center px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="resume-card w-full rounded-2xl border border-border/60 bg-card p-6 md:p-10 shadow-xl"
        >
          {/* Header */}
          <div className="border-b border-border/60 pb-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground uppercase">
                  Shemaiah Paramesvaran
                </h1>
                <p className="text-lg font-semibold text-primary mt-1 tracking-wider uppercase">
                  Developer
                </p>
              </div>

              <div className="flex flex-col gap-1.5 text-sm text-muted-foreground items-center md:items-end">
                <a href={`tel:${config.phone}`} className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>{config.phone}</span>
                </a>
                <a href={`mailto:${config.email}`} className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>{config.email}</span>
                </a>
              </div>
            </div>

            {/* About Me */}
            <div className="mt-8">
              <h2 className="flex items-center gap-2 text-lg font-bold uppercase tracking-wider text-foreground border-b border-border/40 pb-2">
                <User className="h-5 w-5 text-primary" />
                About Me
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm md:text-base">
                Motivated AI & ML undergraduate with a strong foundation in software development and artificial intelligence. Skilled in communication, leadership, negotiation, and teamwork, with experience coordinating teams and organizing events. Passionate about innovation, continuous learning, and delivering impactful solutions through professionalism.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8">
              <h2 className="flex items-center gap-2 text-lg font-bold uppercase tracking-wider text-foreground border-b border-border/40 pb-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h2>
              <div className="mt-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="font-semibold text-foreground text-base">
                    Bachelor of Technology (B.Tech.) – Computer Science & Engineering (Artificial Intelligence & Machine Learning)
                  </h3>
                  <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap mt-1 sm:mt-0">
                    2024 – 2028 (Expected)
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Karunya Institute of Technology and Sciences, Coimbatore, Tamil Nadu
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="mt-8">
              <h2 className="flex items-center gap-2 text-lg font-bold uppercase tracking-wider text-foreground border-b border-border/40 pb-2">
                <FolderGit2 className="h-5 w-5 text-primary" />
                Projects
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground text-base">
                    AI-Powered Multi-Database Query Platform (ONGC)
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Developed a natural language SQL query platform for ONGC using FastAPI, PostgreSQL, Docker, and Vanna AI, delivering the solution within 30 days (June 2026).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-base">
                    EcoTracker
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Built an AI-enabled sustainability platform to monitor environmental metrics, track carbon footprint, and generate actionable insights.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-base">
                    Smart Oil Leakage Detection System
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Developed an IoT solution using Arduino, ESP32, and cloud monitoring for real-time oil leak detection.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-base">
                    LÖSER High-Tech Helmet
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Smart helmet concept featuring TWS integration for hands-free calls and music, motion sensors for crash detection, and safety technology.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-base">
                    CoastMate
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Smart Coastal Resilience & Trade Network focused on empowering coastal MSMEs through AI and IoT technologies.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-base">
                    Conditional GAN Automated House Layout Generator
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Generative AI cGAN model generating architectural house layout structures based on area (e.g. 1600 sqft) and room count (e.g. 4 rooms) inputs across epoch training progression.
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mt-8">
              <h2 className="flex items-center gap-2 text-lg font-bold uppercase tracking-wider text-foreground border-b border-border/40 pb-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Work Experience
              </h2>
              <div className="mt-4 space-y-5">
                {EXPERIENCE.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <h3 className="font-semibold text-foreground text-base">
                        {exp.title}
                      </h3>
                      <span className="text-xs text-muted-foreground font-medium mt-0.5 sm:mt-0">
                        {exp.startDate} – {exp.endDate}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-primary mt-0.5">
                      {exp.company}
                    </p>
                    <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h2 className="flex items-center gap-2 text-lg font-bold uppercase tracking-wider text-foreground border-b border-border/40 pb-2">
                <Code className="h-5 w-5 text-primary" />
                Skills
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Python", "Java", "C", "C++", "JavaScript", "HTML", "CSS", "React.js", "FastAPI",
                  "Machine Learning", "Deep Learning", "Computer Vision", "NLP", "PostgreSQL", "MySQL",
                  "Docker", "Git", "GitHub", "AWS", "Jupyter", "VS Code", "Arduino", "ESP32", "IoT",
                  "Leadership", "Communication", "Negotiation", "Teamwork", "Team Management",
                  "Problem Solving", "Public Speaking", "Time Management", "Event Management",
                  "Marketing", "Social Media", "Content Creation"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border/60 bg-secondary/30 px-2.5 py-1 text-xs font-medium text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
