import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x0f8482A6a7f79049a8115A9D4b400c6F891530B4");

(async () => {
  try {
    await editionDrop.createBatch([
      {
	    name: "Pinwheel Membership",
		description: "This NFT will give you access to Pinwheel DAO!",
		image: readFileSync("src/assets/pinwheel.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
