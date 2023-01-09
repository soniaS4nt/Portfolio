export interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
  }

  export interface Repositories {
    items: Repository[];
  }

  export interface Props {
    repository: Repository;
  }