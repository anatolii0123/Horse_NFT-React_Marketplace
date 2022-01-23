import React from "react";
import Routes from "./router/index";
import { UseWalletProvider } from "use-wallet";

function App() {
	return (
		<UseWalletProvider
			chainId={4002}
			connectors={{
				portis: { dAppId: "horse" },
			}}>
			<Routes />
		</UseWalletProvider>
	);
}

export default App;
