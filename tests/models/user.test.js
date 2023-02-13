import TestsHelpers from "../tests-helpers";
import models from "../../src/models";

describe("User", () => {
  beforeAll(async () => {
    await TestsHelpers.statDb();
  });
  afterAll(async () => {
    await TestsHelpers.statDb();
  });
  describe("static methods", () => {
    describe("hashPassword", () => {
      it("should encrypt the passsword correctly", async () => {
        const { User } = models;
        const passsword = "Test123#";
        const hashedPassword = await User.hashPassword(passsword);
        expect(hashedPassword).toEqual(expect.any(String));
        expect(hashedPassword).not.toEqual(passsword);
      });
    });
    describe("comparePasswords", () => {
      it("should return true if the hashed password is the same as the original password", async () => {
        const { User } = models;
        const passsword = "Test123#";
        const hashedPassword = await User.hashPassword(passsword);
        const arePasswordEqual = await User.comparePasswords(
          passsword,
          hashedPassword
        );
        // const arePasswordEqual = false;
        expect(arePasswordEqual).toBe(true);
      });
      it("should return false if the hashed password is not same as the original password", async () => {
        const { User } = models;
        const passsword = "Test123#";
        const hashedPassword = await User.hashPassword(passsword);
        const arePasswordEqual = await User.comparePasswords(
          "Test123!",
          hashedPassword
        );
        // const arePasswordEqual = false;
        expect(arePasswordEqual).toBe(false);
      });
    });
  });
  describe("hooks", () => {
    beforeEach(async () => {
      await TestsHelpers.syncDb();
    });
    it("should create a user with a hashed password", async () => {
      const { User } = models;
      const email = "test@example.com";
      const password = "Test123#";
      await User.create({ email, password });
      const users = await User.findAll();
      expect(users.length).toBe(1);
      expect(users[0].email).toEqual(email);
      expect(users[0].passsword).not.toEqual(password);
    });
  });
});
