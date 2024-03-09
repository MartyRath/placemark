import { EventEmitter } from "events";
import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { assertSubset } from "../test-utils.js";
import { maggie, singleTestProvince, testProvinces } from "../fixtures.js";


EventEmitter.setMaxListeners(25);

suite("Province API tests", () => {

  let user = null;
  setup(async () => {
    placemarkService.clearAuth();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggie);
    await placemarkService.deleteAllUsers();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggie);
    singleTestProvince.userid = user._id;
  });

  teardown(async () => {});

  test("get one province", async () => {
    const province = await placemarkService.getProvinceByTitle(singleTestProvince.title);
    assert.isNotNull(province);
    assertSubset(province, testProvinces);
  });

  test("get all provinces", async () => {
    const allProvinces = await placemarkService.getAllProvinces();

    assert.isArray(allProvinces, "Testing for an array");
    assert.isNotEmpty(allProvinces, "Testing provinces is not empty array");
  });
});