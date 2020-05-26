import path from 'path';
import { FileToWrite } from '../types';

// TODO: Replace for imports from data
const summary: string = '';

const filedata: string =
  `\\cvsection{Summary}
\\begin{cvparagraph}
  ${summary}
\\end{cvparagraph}`;

const file: FileToWrite = {
  filepath: path.join('sections', 'summary.tex'),
  filedata,
}

export default file;
