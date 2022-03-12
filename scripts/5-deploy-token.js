import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x61Ae2556FA77ab5E5134f40e4C33fb2e095E8193");

(async () => {
	try {
		// Deploy a standard ERC-20 contract.
		const tokenModule = await app.deployTokenModule({
			// What's your token's name? Ex. "Ethereum"
			name: "Pinwheel Governance Token",
			// What's your token's symbol? Ex. "ETH"
			symbol: "PIN",
		});
		console.log(
			"✅ Successfully deployed token module, address:",
			tokenModule.address
		);
	} catch (error) {
		console.error("failed to deploy token module", error);
	}
})();
