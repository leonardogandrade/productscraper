const request = require("supertest");
const app = require('../../server');
const mongoose = require('mongoose');
const mongoTest = "mongodb://localhost:27017/productscraper_test";

//Import Models
require('../../src/models/product-model');

describe("Test info endpoint", () => {
  it("It should retrieve a 200 http code", async () => {
    const response = await request(app).get("/api/info");
    expect(response.status).toBe(200);
  });
});

describe("Test scrap endpoint", () => {
  beforeAll(() => {
    mongoose.connect(mongoTest);
  });

  afterAll(() => {
    mongoose.disconnect();
  });

  it("Persist data", async () => {
    const response = await request(app).get("/api/scrap?url=https://www.saraiva.com.br/fifa-22-br-ps4-20074001/p");
    expect(response.status).toBe(200);
  });
});