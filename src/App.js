import { useEffect, useState } from 'react';
import './App.css';
import GithubProfileFinder from './components/GithubProfileFinder';

function App() {
  const [username, SetUsername] = useState("premnewbie");
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function fetchProfile() {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      console.log(data);
      setProfileData(data);
      setLoading(false);
    } catch (err) {
      setErrorMsg(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  function handleSubmit() {
    fetchProfile();
  }

  if (loading) {
    return <div>Loading data. Please wait !!!</div>;
  }
  return (
    <div className="App">
      <div className="form">
        <input
          type="text"
          placeholder="Enter a username"
          value={username}
          onInput={(e) => SetUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Get profile Details</button>
      </div>
      {profileData?<GithubProfileFinder user={profileData}/>:<div>Error has occured. {errorMsg}</div>}
    </div>
  );
}

export default App;
