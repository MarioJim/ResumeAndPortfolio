import { myProfile } from 'data';
import { FileToWrite } from '../types';

const filecontent = (files: FileToWrite[]) => 
`\\documentclass[11pt, a4paper]{awesome-cv}
\\usepackage{fontawesome}
\\geometry{left=1.4cm, top=.8cm, right=1.4cm, bottom=1.8cm, footskip=.5cm}
\\fontdir[fonts/]
\\colorlet{awesome}{awesome-skyblue}
\\setbool{acvSectionColorHighlight}{true}
\\renewcommand{\\acvHeaderSocialSep}{\\quad\\textbar\\quad}
\\makeatletter
\\patchcmd{\\@sectioncolor}{\\color}{\\mdseries\\color}{}{}
\\makeatother

\\name{${myProfile.name.split(" ")[0]}}{${myProfile.name.split(" ")[1]}}
\\position{${myProfile.description}}
\\mobile{${myProfile.phone}}
\\email{${myProfile.mail}}
\\homepage{mariojim.github.io}
\\github{${myProfile.github}}

\\begin{document}
  \\makecvheader[C]

${files.map(({ filepath }) => `  \\input{${filepath}}`).join('\n')}
\\end{document}`;

const file: (files: FileToWrite[]) => FileToWrite = 
  (files: FileToWrite[]) => ({
    filepath: 'resume.tex',
    filedata: filecontent(files),
  });

export default file;
