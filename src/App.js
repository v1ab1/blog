import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";

export const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id " element={<FullPost />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
        </Routes>
      </Container>
    </>
  );
};
