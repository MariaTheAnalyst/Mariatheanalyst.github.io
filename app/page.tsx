import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ResumeSection from "@/components/resume-section"
import ProjectsSection from "@/components/projects-section"
import AwardsSection from "@/components/awards-section"
import RecommendationsSection from "@/components/recommendations-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <AwardsSection />
      <RecommendationsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}
