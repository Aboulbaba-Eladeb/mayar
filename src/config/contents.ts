import { HeroHeader, ContentSection } from "@/types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `Unlock the Treasures of Knowledge`,
  subheader: `Dive into the Depths of the Holy Quran. Master the Elegance of Arabic. Flourish with Global English. Transform Your Learning Journey.`,
  image: `/hero-img.webp`,
  
}
export const logoHeader: HeroHeader = {
  header: `Unlock the Treasures of Knowledge`,
  subheader: `Dive into the Depths of the Holy Quran. Master the Elegance of Arabic. Flourish with Global English. Transform Your Learning Journey.`,
  image: `/logo.png`,
  
}
export const eladebHeader: HeroHeader = {
  header: `Unlock the Treasures of Knowledge`,
  subheader: `Dive into the Depths of the Holy Quran. Master the Elegance of Arabic. Flourish with Global English. Transform Your Learning Journey.`,
  image: `/logo1.png`,
  
}
export const featureCards: ContentSection = {
  header: `About Us`,
  subheader: `Dedicated to Enlightening Minds and Enriching Souls`,
  content: [
    {
      text: `Our Mission`,
      subtext: `To provide accessible, high-quality educational experiences in religious and language studies, empowering students worldwide with knowledge and understanding.`,
      icon: "missionIcon", 
    },
    {
      text: `Our Vision`,
      subtext: `To become a beacon of learning and cultural exchange, fostering a global community of scholars and practitioners dedicated to lifelong learning and spiritual growth.`,
      icon: "visionIcon",
    },
    {
      text: `Our Values`,
      subtext: `Commitment to Authenticity, Excellence, and Community Engagement. We uphold these values through steadfast dedication to student success, and a nurturing environment that respects diversity.`,
      icon: "valuesIcon",
    },
  ],
}

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why Mayar Institute?`,
  image: `/features-img.webp`,
  content: [
    {
      text: `Enlightened Learning, Enhanced Reach`,
      subtext: `Elevate your spiritual and linguistic pursuits with our SEO-optimized platform, enhancing accessibility and visibility for learners worldwide.`,
      icon: "globalReach",
    },
    {
      text: `Seamless Education Experience`,
      subtext: `Discover a seamless fusion of timeless knowledge and cutting-edge technology for a smooth and efficient online learning experience.`,
      icon: "performance",
    },
    {
      text: `Tailored Learning Paths`,
      subtext: `Customize your educational journey with ease, choosing courses that align with your pace and interests for a fluid learning experience`,
      icon: "customization",
      
    },
  ],
}