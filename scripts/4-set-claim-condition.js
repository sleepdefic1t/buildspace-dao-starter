import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
	"0x3622aD6e09DE656ee8cb70B1391B2FAB549F6A8A"
);

(async () => {
	try {
		const claimConditionFactory = bundleDrop.getClaimConditionFactory();
		// Specify conditions.
		claimConditionFactory.newClaimPhase({
			startTime: new Date(),
			maxQuantity: 50_000,
			maxQuantityPerTransaction: 1,
		});

		await bundleDrop.setClaimCondition(0, claimConditionFactory);
		console.log("✅ Sucessfully set claim condition!");
	} catch (error) {
		console.error("Failed to set claim condition", error);
	}
})();
