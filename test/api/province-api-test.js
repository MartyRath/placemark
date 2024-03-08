import { EventEmitter } from "events";
import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { assertSubset } from "../test-utils.js";
import { testProvinces } from "../fixtures.js";


EventEmitter.setMaxListeners(25);

suite("Province API tests", () => {


  setup(async () => {
  });

  teardown(async () => {});

  test("get one province", async () => {
  });

  test("get all provinces", async () => {
    // Retrieve all provinces
    const allProvinces = await placemarkService.getAllProvinces();

    // Assertions
    assert.isArray(allProvinces, "Testing for an array");
    assert.isNotEmpty(allProvinces, "Testing provinces is not empty array");
    assert.deepEqual(allProvinces, testProvinces, "All provinces are the same as testProvinces");
  });
});