import { RepositoryInfo, Language } from './types';

interface LanguagesMap {
  [key: string]: {
    size: number;
    color: string;
  };
}

export const transformRepos = (repos: RepositoryInfo[]): Language[] => {
  const languages = repos
    .flatMap((repo) => repo.languages.edges)
    .filter((lang) => lang.node.color !== null)
    .reduce<LanguagesMap>(
      (languagesMap, { size, node: { name, color } }) => ({
        ...languagesMap,
        [name]: {
          size: languagesMap[name] ? languagesMap[name].size + size : size,
          color,
        },
      }),
      {},
    );
  const top10Langs = Object.entries(languages)
    .map(([name, { size, color }]) => ({ name, size, color }))
    .sort((a, b) => b.size - a.size)
    .slice(0, 10);
  const totalSize = top10Langs.reduce((acc, val) => acc + val.size, 0);
  return top10Langs.map((lang) => ({ ...lang, size: lang.size / totalSize }));
};
