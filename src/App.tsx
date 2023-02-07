import { AuthProvider } from "./context/AuthContext";
import { Signup } from "./pages/Signup";

export function App() {
  return (
      <AuthProvider>
        <Signup />
      </AuthProvider>
  );
}
