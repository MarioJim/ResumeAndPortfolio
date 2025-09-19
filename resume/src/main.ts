import { myProfile } from 'data';
import fs from 'fs';
import path from 'path';

import {
  educationSection,
  experienceSection,
  skillsSection,
} from './sections.ts';

const [firstName, lastName] = myProfile.name.split(' ');

const resumeFile = `
\\documentclass[11pt, a4paper]{awesome-cv}
\\geometry{left=1.5cm, top=1.2cm, right=1.5cm, bottom=1.5cm, footskip=0.5cm}
\\renewcommand{\\acvHeaderSocialSep}{\\quad\\textbar\\quad}
\\makeatletter
\\patchcmd{\\@sectioncolor}{\\color}{\\mdseries\\color}{}{}
\\makeatother

\\name{${firstName}}{${lastName}}
\\position{${myProfile.position}}
\\email{${myProfile.mail}}
\\homepage{marioj.dev}
\\linkedin{${myProfile.linkedin}}
\\github{${myProfile.github}}

\\begin{document}
\\makecvheader
${experienceSection}
${educationSection}
${skillsSection}
\\end{document}
`
  .replaceAll('~', '\\~{}')
  .replaceAll('%', '\\%');

const filepath = path.join('build', 'mario_jimenez_resume.tex');
fs.writeFileSync(filepath, resumeFile);
