import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function TeamMember({ member, index }) {
  const isImageLeft = index % 2 === 0; // alternate layout
  const { label, name, role, bio, image, skills = [], socials = {} } = member;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group bg-white rounded-[32px] p-8 md:p-12 transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Image */}
        <div className={`w-full lg:w-1/2 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative w-full h-0 pb-[100%] rounded-[24px] overflow-hidden shadow-sm">
            <img
              src={image}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-[24px]"
            />
            {/* Role badge */}
            <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-green-400 border-2 border-white" />
          </div>
        </div>
        {/* Content */}
        <div className={`w-full lg:w-1/2 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'} text-center lg:text-left space-y-4`}>
          <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</span>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900">{name}</h3>
          <p className="text-primary font-semibold text-sm">{role}</p>
          <p className="text-slate-600 text-sm leading-relaxed">{bio}</p>
          {/* Skills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full hover:scale-105 transition-transform"
              >
                {skill}
              </span>
            ))}
          </div>
          {/* Social */}
          <div className="flex justify-center lg:justify-start gap-3 mt-4">
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-teal-50 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {socials.twitter && (
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-teal-50 hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {socials.github && (
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-teal-50 hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
