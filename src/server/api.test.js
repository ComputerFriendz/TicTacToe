const request = require("supertest");
const api = require("../../app");
describe("GET /api/tictactoe/:name endpoint", () => {
    it("should return a 200 OK status code", async () => {
        const res = await request(api).get("/tictactoe/_");
        console.log(res.status);
        expect(res.status).toBe(200);
    });
    /*it("should return the greeting in a object", async () => {
        const res = await request(api).get("/api/tictactoe/Diana");
        console.log("hi");
        console.log(res.body.tictactoe);
        expect(res.body.tictactoe).toBe("Hello, Diana!");
    });*/
});