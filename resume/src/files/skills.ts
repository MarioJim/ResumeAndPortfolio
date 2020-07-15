import path from 'path';
import { skills } from 'data';
import { FileToWrite } from '../types';

const filedata: string = `
\\cvsection{Skills}
\\begin{cvskills}
${skills
  .map(
    skill =>
      `  \\cvskill
    {${skill.title}}
    {${skill.points}}`,
  )
  .join('\n\n')}
\\end{cvskills}`;

const file: FileToWrite = {
  filepath: path.join('sections', 'skills.tex'),
  filedata,
};

export default file;
