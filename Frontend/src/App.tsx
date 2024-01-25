import { Routes, Route } from "react-router-dom";
import Login from "./containers/Login";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import Admin from "./admin/Admin";
import Villa from "./containers/Villa";
import NotFound from "./containers/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admin/:param" element={<Admin />} />
      <Route path="/villa/*" element={<Villa />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
