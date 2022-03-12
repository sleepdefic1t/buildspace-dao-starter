import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
	"0x3622aD6e09DE656ee8cb70B1391B2FAB549F6A8A"
);

(async () => {
	try {
		await bundleDrop.createBatch([
			{
				name: "Pinwheel Access",
				description: "This NFT will give you access to PinwheelDAO!",
				image: readFileSync("src/assets/Pinwheel.png"),
			},
		]);
		console.log("✅ Successfully created a new NFT in the drop!");
	} catch (error) {
		console.error("failed to create the new NFT", error);
	}
})();
