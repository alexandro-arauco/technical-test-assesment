"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const MOCK_USER = {
  id: "1",
  email: "test@example.com",
  password: "password123", // In a real app, never store plain text passwords
  name: "Test User",
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = Cookies.get("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e: unknown) {
        console.error("Error parsing user data from cookie");
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === MOCK_USER.email && password === MOCK_USER.password) {
        const { password: _, ...userWithoutPassword } = MOCK_USER;

        // Set user in state
        setUser(userWithoutPassword);

        // Store user data and auth token in cookies
        Cookies.set("user", JSON.stringify(userWithoutPassword));
        Cookies.set("auth", "true");

        setIsLoading(false);
        return true;
      }

      setIsLoading(false);
      return false;
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    // Clear user state
    setUser(null);

    // Remove cookies
    Cookies.remove("user");
    Cookies.remove("auth");

    // Redirect to login
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
