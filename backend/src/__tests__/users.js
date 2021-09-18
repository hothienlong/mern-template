import request from "supertest"
import server from "../app"

describe("User Route Test", () => {
    test("Get User: Successful", async () => {
        const response = await request(server).get("/users");
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual({id: 1, name: 'test_user'})
    });
});
