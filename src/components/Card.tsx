interface UserCardProps {
  user: any;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-4 text-center dark:bg-gray-800 dark:text-white">
      <img
        src={user.avatar_url}
        alt="Avatar"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h2 className="text-2xl font-bold mt-2">{user.name || user.login}</h2>
      <p className="text-gray-600 dark:text-gray-300">@{user.login}</p>
      <p className="mt-2">{user.bio}</p>

      <div className="flex justify-around mt-4">
        <div>
          <strong>{user.followers}</strong>
          <p>Followers</p>
        </div>
        <div>
          <strong>{user.following}</strong>
          <p>Following</p>
        </div>
        <div>
          <strong>{user.public_repos}</strong>
          <p>Repos</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
