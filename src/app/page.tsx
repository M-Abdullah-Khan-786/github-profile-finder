"use client";

import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import SearchBar from "../components/FindUser";
import UserCard from "../components/Card";
import RepoList from "../components/RepoList";

export default function HomePage() {
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  const handleSearch = async (username: string) => {
    try {
      if (!username.trim()) {
        setError("Username cannot be empty!");
        setUser(null);
        setRepos([]);
        return;
      }
      setError("");
      setUser(null);
      setRepos([]);
      const userRes = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const repoRes = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setUser(userRes.data);
      setRepos(repoRes.data);
    } catch (err) {
      setError("User not found!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      {user && <UserCard user={user} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
}
