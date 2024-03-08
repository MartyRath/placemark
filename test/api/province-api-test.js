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
  });
});