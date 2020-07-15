import path from 'path';
import { experiences } from 'data';
import { FileToWrite } from '../types';

const filedata: string = `\\cvsection{Work Experience}
\\begin{cventries}
${experiences
  .map(
    experience =>
      `  \\cventry
    {${experience.workPlace}}
    {${experience.title}}
    {${experience.date}}
    {${experience.location}}
    {
      \\begin{cvitems}
${experience.points.map(point => `        \\item {${point}}`).join('\n')}
      \\end{cvitems}
    }`,
  )
  .join('\n\n')}
\\end{cventries}`;

const file: FileToWrite = {
  filepath: path.join('sections', 'experience.tex'),
  filedata,
};

export default file;
