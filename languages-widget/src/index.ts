import { promises as fs } from 'fs';
import { fetchFromGitHub } from './query';
import { renderSVG } from './render';
import { transformRepos } from './transform';

(async () => {
  const repos = await fetchFromGitHub();
  const langs = transformRepos(repos);
  const svgFile = renderSVG(langs);
  await fs.writeFile('lang_widget.svg', svgFile);
})();
