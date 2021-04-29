export interface RepositoryInfo {
  nameWithOwner: string;
  databaseId: number;
  languages: {
    edges: {
      size: number;
      node: {
        color: string;
        name: string;
      };
    }[];
  };
}

export interface GHResponse {
  viewer: {
    repositories: {
      nodes: RepositoryInfo[];
    };
  };
}

export interface Language {
  name: string;
  size: number;
  color: string;
}

export interface LanguageRectangle {
  color: string;
  start: number;
  size: number;
}
