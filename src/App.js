import Container from "@mui/material/Container";

import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";

export const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Home />
        {/* <FullPost /> */}
        {/*<AddPost />*/}
        {/*<Login />*/}
        {/*<Registration />*/}
      </Container>
    </>
  );
};
