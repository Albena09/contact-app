import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactProvider } from "./context/ContactContext";
import Homepage from "./pages/Homepage";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import ContactShow from "./pages/ContactShow";

function App() {
  return (
    <ContactProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="/show/:id" element={<ContactShow />} />
        </Routes>
      </Router>
    </ContactProvider>
  );
}

export default App;
