import { CommandCenter } from "./components/command-center";
import { Account } from "./components/account";

function App() {
  return (
    <div className="ava-wallet-app">
      <Account />
      <CommandCenter />
    </div>
  );
}

export default App;
