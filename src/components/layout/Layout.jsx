import Nav from "./Nav";
import { ThemeProvider } from "../../context/ThemeContext";

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] pb-20 md:pb-0">
        <Nav />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
}
