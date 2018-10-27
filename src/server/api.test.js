const request = require("supertest");
const app = require("../../app");

describe("GET /api/tictactoe/:name endpoint", () => {
    it("should return a 200 OK status code", async () => {
        const res = await request(app).get("/tictactoe/_");
        expect(res.status).toBe(200);
    });
    it("should return the greeting in a object", async () => {
        const res = await request(app).get("/api/tictactoe/x");
        expect(res.body.tictactoe).toBe("x");
    });
});
