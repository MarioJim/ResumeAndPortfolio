import path from 'path';
import { projects } from 'data';
import { FileToWrite } from '../types';

const filedata: string =
`\\cvsection{Software Projects}
\\begin{cventries}
${projects.map(project => {
  if (project.includeInCV)
    return (
`  \\cventry
    {${project.subtitle}}
    {${project.title}}
    {${project.date}}
    {${project.link.replace('https://github.com', '\\faGithub')}}
    {
      \\begin{cvitems}
${project.points.map(point => `        \\item {${point}}`).join('\n')}
      \\end{cvitems}
    }

`);
}).join('')}
\\end{cventries}`;

const file: FileToWrite = {
  filepath: path.join('sections', 'projects.tex'),
  filedata,
}

export default file;
