import fs from 'fs';
import path from 'path';
import { FileToWrite } from './types';
import additional from './files/additional';
import education from './files/education';
import projects from './files/projects';
import resume from './files/resume';
import skills from './files/skills';

const files: FileToWrite[] = [
  education,
  projects,
  skills,
  additional,
];

const resumeFile = resume(files);

files.push(resumeFile);

files.forEach(
  file => fs.writeFileSync(
    path.join('.', 'build', file.filepath),
    file.filedata
  )
);
