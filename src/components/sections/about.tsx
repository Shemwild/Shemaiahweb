import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import Link from "next/link";
import { Button } from "../ui/button";
import { FileText } from "lucide-react";

const AboutSection = () => (
  <SectionWrapper id="about" className="min-h-screen max-w-5xl mx-auto px-4 py-24">
    <SectionHeader id="about" title="About" desc="Professionalism & Innovation" className="mb-16" />
    <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
      <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p>I am a motivated AI &amp; ML undergraduate at Karunya Institute of Technology and Sciences with a strong foundation in software development and artificial intelligence.</p>
        <p>Skilled in communication, leadership, negotiation, and teamwork, with experience coordinating teams and organizing technical events.</p>
        <p>Passionate about innovation, continuous learning, and delivering impactful solutions through professionalism across software, hardware, AI, and IoT.</p>
        <blockquote className="border-l-2 border-primary pl-5 text-base italic text-foreground/80">
          “Passionate about innovation, continuous learning, and delivering impactful solutions through professionalism.”
        </blockquote>
        <div className="pt-4">
          <Link href="/resume">
            <Button className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              View Full Résumé
            </Button>
          </Link>
        </div>
      </div>
      <div className="border-l border-border pl-6 text-sm text-muted-foreground">
        <p className="mb-3 font-semibold text-foreground">Education</p>
        <p className="font-medium text-foreground">B.Tech. Computer Science &amp; Engineering</p>
        <p>(Artificial Intelligence &amp; Machine Learning)</p>
        <p>Karunya Institute of Technology and Sciences, Coimbatore</p>
        <p className="text-xs text-muted-foreground/80 mt-1">2024 – 2028 (Expected)</p>
        <p className="mt-8 mb-3 font-semibold text-foreground">Contact</p>
        <p>Email: {config.email}</p>
        <p>Phone: {config.phone}</p>
        <p className="mt-8 mb-3 font-semibold text-foreground">Core Skills</p>
        <p>Python · Java · C/C++ · React.js · FastAPI · Machine Learning · Deep Learning · Computer Vision · NLP · PostgreSQL · MySQL · Docker · Git · AWS · Arduino · ESP32 · IoT</p>
        <p className="mt-8 mb-3 font-semibold text-foreground">Soft Skills &amp; Leadership</p>
        <p>Leadership · Communication · Negotiation · Teamwork · Team Management · Problem Solving · Public Speaking · Time Management · Event Management · Marketing · Social Media · Content Creation</p>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;