import { assert } from "chai";
import { db } from "../src/models/db.js";
import { testUserTrees, testUsers } from "./fixtures.js";
import { assertSubset } from "./test-utils.js";

suite("User Tree Model tests", () => {

  let userTreeList = null;

  setup(async () => {
    // Initialize the database with the desired store type
    db.init("mongo");
    // Clear any existing data from the user tree store
    await db.userTreeStore.deleteAllUserTrees();
    // Add a user tree for testing
    const user = testUsers[0];
    userTreeList = await db.userTreeStore.addUserTree("Leinster", user._id, testUserTrees[0]);
  });

  test("add user tree", async () => {
    const user = testUsers[1];
    const userTree = testUserTrees[1];
    const addedUserTree = await db.userTreeStore.addUserTree("Munster", user._id, userTree);
    assert.isNotNull(addedUserTree._id);
    assertSubset(userTree, addedUserTree);
  });

  test("get user trees by user id and province", async () => {
    const user = testUsers[0];
    const province = "Leinster";
    const userTrees = await db.userTreeStore.getUserTreesByUserIdAndProvince(user._id, province);
    assert.equal(userTrees.length, 1);
    assertSubset(userTreeList, userTrees[0]);
  });

  test("delete all user trees", async () => {
    await db.userTreeStore.deleteAllUserTrees();
    const userTrees = await db.userTreeStore.getAllUserTrees();
    assert.equal(userTrees.length, 0);
  });

  test("get user tree by ID", async () => {
    const retrievedUserTree = await db.userTreeStore.getUserTreeById(userTreeList._id);
    assertSubset(userTreeList, retrievedUserTree);
  });

  test("delete user tree by ID", async () => {
    await db.userTreeStore.deleteUserTree(userTreeList._id);
    const userTrees = await db.userTreeStore.getAllUserTrees();
    assert.equal(userTrees.length, 0);
  });

  test("delete user tree - fail", async () => {
    await db.userTreeStore.deleteUserTree("bad-id");
    const userTrees = await db.userTreeStore.getAllUserTrees();
    assert.equal(userTrees.length, 1);
  });
});