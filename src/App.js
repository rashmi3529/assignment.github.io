import { UserCard, RepoCard } from 'react-github-cards/dist/medium'
import 'react-github-cards/dist/medium.css';
 
 
export default function App() {
  return (
    <div className="App">
      <div>
    <UserCard username="gauti123456" />
    <RepoCard username="gauti123456" repo="ElectronRemoveAudio" />
  </div>
    </div>
  );
}


