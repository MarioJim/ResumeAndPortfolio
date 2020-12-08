import child_process from 'child_process';
import { myProfile } from 'data';
import { promises as fs } from 'fs';
import path from 'path';
import util from 'util';

import {
  additionalSection,
  educationSection,
  experienceSection,
  projectsSection,
  skillsSection,
} from './sections';

const resumeFile = `
\\documentclass[11pt, a4paper]{awesome-cv}
\\geometry{left=1.5cm, top=1.2cm, right=1.5cm, bottom=1.5cm, footskip=0.5cm}
\\renewcommand{\\acvHeaderSocialSep}{\\quad\\textbar\\quad}
\\makeatletter
\\patchcmd{\\@sectioncolor}{\\color}{\\mdseries\\color}{}{}
\\makeatother

\\name{${myProfile.name.split(' ')[0]}}{${myProfile.name.split(' ')[1]}}
\\position{${myProfile.position}}
\\email{${myProfile.mail}}
\\homepage{mariojim.github.io}
\\github{github.com/${myProfile.github}}
\\linkedin{linkedin.com/in/${myProfile.linkedin}}

\\begin{document}
  \\makecvheader[C]
${experienceSection}
${educationSection}
${projectsSection}
${skillsSection}
${additionalSection}
\\end{document}
`;

const exec = util.promisify(child_process.exec);

(async () => {
  console.log('Cleaning...');
  await exec('rm -rf build');
  await exec('mkdir -p build/sections');

  console.log('Writing resume.tex...');
  await fs.writeFile(path.join('build', 'resume.tex'), resumeFile);

  console.log('Copying static files...');
  await exec('cp -r static/* build');
})();
