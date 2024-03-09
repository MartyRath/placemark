import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { testUsers, testUserTrees } from "../fixtures.js";

suite("Tree API tests", () => {

  let testUserTree = null;

  setup(async () => {
    await placemarkService.deleteAllUserTrees();
    // Add a user tree for testing
    const user = testUsers[0];
    testUserTree = await placemarkService.addUserTree("Leinster", user._id, testUserTrees[0]);
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
    assertSubset(testUserTree, userTrees[0]);
  });

  test("delete all user trees", async () => {
    await placemarkService.deleteAllUserTrees();
    const userTrees = await placemarkService.getAllUserTrees();
    assert.equal(userTrees.length, 0);
  });

  test("get user tree by ID", async () => {
    const retrievedUserTree = await placemarkService.getUserTreeById(testUserTree._id);
    assertSubset(testUserTree, retrievedUserTree);
  });

  test("delete user tree by ID", async () => {
    await placemarkService.deleteUserTree(testUserTree._id);
    const userTrees = await placemarkService.getAllUserTrees();
    assert.equal(userTrees.length, 0);
  });

  test("delete user tree - fail", async () => {
    await placemarkService.deleteUserTree("bad-id");
    const userTrees = await placemarkService.getAllUserTrees();
    assert.equal(userTrees.length, 1);
  });
});