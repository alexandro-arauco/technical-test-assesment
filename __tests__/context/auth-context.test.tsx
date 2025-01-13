import { renderHook, act } from "@testing-library/react";
import { AuthProvider, useAuth } from "@/app/context/auth-context";
import { useRouter } from "next/navigation";

jest.mock("next/navigation");

describe("AuthContext", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it("provides authentication functionality", async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current.user).toBeNull();

    await act(async () => {
      const success = await result.current.login(
        "test@example.com",
        "password123"
      );
      expect(success).toBe(true);
    });

    expect(result.current.user).toEqual({
      id: "1",
      email: "test@example.com",
      name: "Test User",
      password: "password123",
    });

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});
