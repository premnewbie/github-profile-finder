export default function GithubProfileFinder({ user }) {
  const {
    avatar_url,
    html_url,
    login,
    created_at,
    public_repos,
    following,
    followers,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div>
      {
        <div className="profile">
          <img src={avatar_url} alt="user" className="avatar" />
          <div>
            <a href={html_url}>@{login}</a>
            <span style={{ marginLeft: "1rem" }}>
              User joined on{" "}
              {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                month: "short",
              })} ${createdDate.getFullYear()}`}
            </span>
          </div>
          <div>Repos: {public_repos}</div>
          <div>Following: {following}</div>
          <div>Followers: {followers}</div>
        </div>
      }
    </div>
  );
}
