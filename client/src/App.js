import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <RouterProvider router={routes} />
      </UserContextProvider>
    </div>
  );
}

export default App;
