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
    const provinceTestTitle = testProvinces[0].title;
    const provinces = await placemarkService.getProvinceByTitle(provinceTestTitle);
    // GetProvinceByTitle seems to only return array. Workaround below
    const province = provinces.find(p => p.title === provinceTestTitle);
    assert.isNotNull(province);
    assertSubset(testProvinces[0], province);
    assert.deepEqual(province.title, provinceTestTitle)
  });

  test("get all provinces", async () => {
    const allProvinces = await placemarkService.getAllProvinces();

    assert.isArray(allProvinces, "Testing for an array");
    assert.isNotEmpty(allProvinces, "Testing provinces is not empty array");
  });
});