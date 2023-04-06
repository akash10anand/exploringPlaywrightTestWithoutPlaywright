import {test} from "@playwright/test";
import {strictEqual} from "assert/strict"
import {sleep} from "../src/helper"

test.describe.parallel("parallel tests", async () =>{
  test("test 3", async()=>{
    await sleep(1000);
    strictEqual(1, 1, "one equals one");
  })
  
  test("test 4", async()=>{
    await sleep(1000);
    strictEqual(1, 1, "one equals one");
  })
  
  test("test 5", async()=>{
    await sleep(1000);
    strictEqual(1, 1, "one equals one");
  })
})
