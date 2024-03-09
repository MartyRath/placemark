import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { testUsers, testUserTrees } from "../fixtures.js";

suite("Tree API tests", () => {

  let testTree = null;
  // To prevent failing with updated Joi schemas with _id and _v, isolate created user results in users array
  const users = new Array(testUsers.length);

  setup(async () => {
    await placemarkService.deleteAllUserTrees();
    await placemarkService.deleteAllUsers();
    // Creating test users with ids
    for (let i = 0; i < testUsers.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      users[0] = await placemarkService.createUser(testUsers[i]); }

    const user = testUsers[0];
    testTree = await placemarkService.addUserTree("Leinster", user._id, testUserTrees[0]);
  });

  teardown(async () => {});

  test("add user tree", async () => {
    const user = testUsers[1];
    const userTree = testUserTrees[1];
    const addedUserTree = await placemarkService.addUserTree("Munster", user._id, userTree);
    assert.isNotNull(addedUserTree._id);
    assertSubset(userTree, addedUserTree);
  });

  test("get user trees by user id and province", async () => {
    const user = testUsers[0];
    const province = "Leinster";
    const userTrees = await placemarkService.getUserTreesByUserIdAndProvince(user._id, province);
    assert.equal(userTrees.length, 1);
    assertSubset(testTree, userTrees[0]);
  });

  test("delete all user trees", async () => {
    await placemarkService.deleteAllUserTrees();
    const userTrees = await placemarkService.getAllUserTrees();
    assert.equal(userTrees.length, 0);
  });

  test("delete user tree by tree ID", async () => {
    const retrievedUserTree = await placemarkService.getUserTreeById(testTree._id);
    assertSubset(testTree, retrievedUserTree);
  });

});