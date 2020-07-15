import path from 'path';
import { additional } from 'data';
import { FileToWrite } from '../types';

const filedata: string = `
\\cvsection{Additional Experience and Awards}
\\begin{cventries}
${additional
  .map(
    add =>
      `  \\cventry
    {${add.location}}
    {${add.title}}
    {${add.date}}
    {}
    {
      \\begin{cvitems}
${add.points.map(point => `        \\item {${point}}`).join('\n')}
      \\end{cvitems}
    }`,
  )
  .join('\n\n')}
\\end{cventries}`;

const file: FileToWrite = {
  filepath: path.join('sections', 'additional.tex'),
  filedata,
};

export default file;
