interface RepoListProps {
  repos: any[];
}

const RepoList = ({ repos }: RepoListProps) => {
  return (
    <div className="max-w-2xl mx-auto mt-6 p-4">
      <h3 className="text-xl font-bold mb-4">Repositories</h3>
      <ul className="space-y-2">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="border p-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <a
              href={repo.html_url}
              target="_blank"
              className="text-blue-600 dark:text-blue-400"
            >
              {repo.name}
            </a>
            <p className="text-sm text-gray-500">{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
