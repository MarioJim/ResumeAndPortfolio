import path from 'path';
import { FileToWrite } from '../types';

// TODO: Replace for imports from data
interface Job {
  title: string
  organization: string
  location: string
  date: string
  points: string[]
}

const jobs: Job[] = [];

const filedata: string =
`\\cvsection{Work Experience}
\\begin{cventries}
${jobs.map(job => 
`  \\cventry
    {${job.organization}}
    {${job.title}}
    {${job.date}}
    {${job.location}}
    {
      \\begin{cvitems}
${job.points.map(point => `        \\item {${point}}`).join('\n')}
      \\end{cvitems}
    }`).join('\n\n')}
\\end{cventries}`;

const file: FileToWrite = {
  filepath: path.join('sections', 'experience.tex'),
  filedata,
}

export default file;
