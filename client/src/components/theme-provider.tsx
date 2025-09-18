import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeProviderContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeProviderContext = createContext<
  ThemeProviderContextType | undefined
>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    console.log("🎨 ThemeProvider: Initializing theme state");

    if (typeof window === "undefined") {
      console.log("🎨 ThemeProvider: Server-side, defaulting to light");
      return "light";
    }

    // Check current document class
    const currentClass = document.documentElement.className;
    console.log("🎨 ThemeProvider: Current document className:", currentClass);

    if (currentClass.includes("dark")) {
      console.log("🎨 ThemeProvider: Found dark class on document");
      return "dark";
    }
    if (currentClass.includes("light")) {
      console.log("🎨 ThemeProvider: Found light class on document");
      return "light";
    }

    // Check localStorage
    try {
      const savedTheme = localStorage.getItem("theme") as Theme;
      console.log("🎨 ThemeProvider: localStorage theme:", savedTheme);

      if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
        console.log("🎨 ThemeProvider: Using saved theme:", savedTheme);
        return savedTheme;
      }
    } catch (error) {
      console.warn(
        "🎨 ThemeProvider: Failed to read from localStorage:",
        error,
      );
    }

    // Check system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    console.log("🎨 ThemeProvider: System prefers dark:", prefersDark);

    const systemTheme = prefersDark ? "dark" : "light";
    console.log("🎨 ThemeProvider: Using system theme:", systemTheme);

    return systemTheme;
  });

  useEffect(() => {
    console.log("🎨 ThemeProvider: useEffect triggered, theme:", theme);

    if (typeof window === "undefined") {
      console.log("🎨 ThemeProvider: Server-side, skipping DOM update");
      return;
    }

    const root = document.documentElement;
    const currentClasses = Array.from(root.classList);

    console.log(
      "🎨 ThemeProvider: Current classes before update:",
      currentClasses,
    );

    // Remove existing theme classes
    root.classList.remove("light", "dark");

    // Add new theme class
    root.classList.add(theme);

    const newClasses = Array.from(root.classList);
    console.log("🎨 ThemeProvider: New classes after update:", newClasses);

    // Save to localStorage
    try {
      localStorage.setItem("theme", theme);
      console.log("🎨 ThemeProvider: Saved theme to localStorage:", theme);
    } catch (error) {
      console.warn("🎨 ThemeProvider: Failed to save to localStorage:", error);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("🎨 ThemeProvider: Toggling theme from", theme, "to", newTheme);
    setTheme(newTheme);
  };

  const changeTheme = (newTheme: Theme) => {
    console.log("🎨 ThemeProvider: Changing theme to:", newTheme);
    setTheme(newTheme);
  };

  const value = {
    theme,
    setTheme: changeTheme,
    toggleTheme,
  };

  console.log("🎨 ThemeProvider: Rendering with theme:", theme);

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
