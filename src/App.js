import "./_app.scss";
import "./_base.scss"
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./components/Screens/HomeScreen";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const handToggleSidebar = () => setSidebar(value => !value);
  return (
    <>
      <Header handToggleSidebar={handToggleSidebar} />
      <div className="app_container" >
        <Sidebar sidebar={sidebar} handToggleSidebar={handToggleSidebar} />
        <Container fluid className="app_main">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
