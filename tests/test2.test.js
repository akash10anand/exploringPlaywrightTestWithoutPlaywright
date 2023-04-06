import {test} from "@playwright/test";
import {strictEqual} from "assert/strict"
import {sleep} from "../src/helper"

test("test 2", async()=>{
  await sleep(1000);
  strictEqual(1, 1, "one equals one");
})
