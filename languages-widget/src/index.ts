import { fetchFromGitHub } from './query';
import { transformRepos } from './transform';
import { renderSVG } from './render';
import { promises as fs } from 'fs';

(async () => {
  const repos = await fetchFromGitHub();
  const langs = transformRepos(repos);
  const svgFile = renderSVG(langs);
  await fs.writeFile('lang_widget.svg', svgFile);
})();
