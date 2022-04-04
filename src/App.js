import { Banner } from "./components/Banner";
import { DesktopOffer } from "./components/DesktopOffer";
import { Header } from "./components/Header";
import { TopHeader } from "./components/TopHeader";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <Banner />
      <h3>ESCOLHA SEU PC</h3>
      <DesktopOffer />
    </>
  );
}

export default App;
