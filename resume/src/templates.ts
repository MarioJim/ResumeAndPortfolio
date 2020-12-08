const itemTemplate = (item: string): string => `        \\item {${item}}`;

export const cventryTemplate = (
  a: string,
  b: string,
  c: string,
  d: string,
  items: string[],
): string => `  \\cventry
    {${a}}
    {${b}}
    {${c}}
    {${d}}
    {
      \\begin{cvitems}
${items.map(itemTemplate).join('\n')}
      \\end{cvitems}
    }`;

export const cvsectionTemplate = (
  title: string,
  cventries: string[],
): string => `
\\cvsection{${title}}
\\begin{cventries}
${cventries.join('\n\n')}
\\end{cventries}`;

export const cvskillTemplate = (
  title: string,
  skills: string,
): string => `  \\cvskill
{${title}}
{${skills}}`;

export const cvskillSectionTemplate = (skills: string[]): string => `
\\cvsection{Skills}
\\begin{cvskills}
${skills.join('\n\n')}
\\end{cvskills}`;

export const cvsummarySectionTemplate = (summary: string): string => `
\\cvsection{Summary}
\\begin{cvparagraph}
  ${summary}
\\end{cvparagraph}`;
