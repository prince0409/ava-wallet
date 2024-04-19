import { useAccount, useConnect, useDisconnect } from "wagmi";
import { truncateAddress } from "../utils/truncate-address";

export function Account() {
  const account = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="account-wrapper">
      <h2>Account</h2>

      <div>
        status: {account.status}
        <br />
        addresses: {truncateAddress(account.addresses?.[0] || "")}
        <br />
        chainId: {account.chainId}
      </div>

      {account.status === "connected" ? (
        <button type="button" onClick={() => disconnect()} className="button">
          Disconnect
        </button>
      ) : (
        <div className="connector-wrapper">
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              type="button"
              className="button"
            >
              {connector.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
