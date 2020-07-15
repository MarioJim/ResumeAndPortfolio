import path from 'path';
import { schools } from 'data';
import { FileToWrite } from '../types';

const filedata: string = `\\cvsection{Education}
\\begin{cventries}
${schools
  .map(
    school =>
      `  \\cventry
    {${school.schoolName}}
    {${school.title}}
    {${school.date}}
    {${school.location}}
    {
      \\begin{cvitems}
${school.points.map(point => `        \\item {${point}}`).join('\n')}
      \\end{cvitems}
    }`,
  )
  .join('\n\n')}
\\end{cventries}`;

const file: FileToWrite = {
  filepath: path.join('sections', 'education.tex'),
  filedata,
};

export default file;
