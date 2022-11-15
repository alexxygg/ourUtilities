import "./App.css";
import LinksAndScripts from "./LinksAndScripts";
import GoodSites from "./GoodSites";
import FavColors from "./FavColors";
import SvgTest from "./SvgTest";
import UsefulSnippets from "./UsefulSnippets";
import NiceRow from "./NiceBar";
import NavBar from "./NavBar";
import FooterDemo from "./FooterDemo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LinksAndScripts />
      <GoodSites />
      <FavColors />
      <UsefulSnippets />
      <NiceRow />
      <FooterDemo />
    </div>
  );
}

export default App;
