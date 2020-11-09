import { myProfile } from 'data';
import { FileToWrite } from '../types';

const filecontent = (files: FileToWrite[]) =>
  `\\documentclass[11pt, a4paper]{awesome-cv}
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

${files.map(({ filepath }) => `  \\input{${filepath}}`).join('\n')}
\\end{document}`;

const file: (files: FileToWrite[]) => FileToWrite = (files: FileToWrite[]) => ({
  filepath: 'resume.tex',
  filedata: filecontent(files),
});

export default file;
