const axios = require("axios");

const BACKEND_URL = "http://localhost:3000";

describe("Auth Endpoints", () => {
  let testEmail;
  const testPassword = "password123";

  // Run before all tests — create a user for signin
  beforeAll(async () => {
    testEmail = `test-user${Date.now()}@test.com`;
    await axios.post(`${BACKEND_URL}/api/auth/signup`, {
      name: "Test User",
      email: testEmail,
      password: testPassword,
    });
  });

  test("Sign up with valid data", async () => {
    const response = await axios.post(`${BACKEND_URL}/api/auth/signup`, {
      name: `test-user${Date.now()}`,
      email: `test-user${Date.now()}@test.com`,
      password: "password123",
    });

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("user");
    expect(response.data).toHaveProperty("token");
  });

  test("Sign in with valid credentials", async () => {
    const response = await axios.post(`${BACKEND_URL}/api/auth/signin`, {
      email: testEmail,
      password: testPassword,
    });

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("user");
    expect(response.data).toHaveProperty("token");
  });

  test("Sign in with invalid credentials", async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/auth/signin`, {
        email: testEmail,
        password: "wrongpassword",
      });
    } catch (error) {
      expect(error.response.status).toBe(401);
      expect(error.response.data).toHaveProperty("error");
    }
  });
});
