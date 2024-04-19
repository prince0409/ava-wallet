import * as React from "react";
import { type BaseError } from "wagmi";
import Input from "./common/input";
import InputAmount from "./common/input-amount";
import { useReadBalance } from "../hooks/useReadBalance";
import { useSendUSDC } from "../hooks/useSendUSDC";

export function CommandCenter() {
  const { balance, refetch: refetchBalance } = useReadBalance();
  const { txError, txConfirming, sendUSDC, isConfirming, isConfirmed } =
    useSendUSDC();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const to = formData.get("address") as `0x${string}`;
    const value = formData.get("value") as string;
    sendUSDC(to, value);
  }

  React.useEffect(() => {
    if (isConfirmed) refetchBalance();
  }, [isConfirmed, refetchBalance]);

  return (
    <form onSubmit={submit} className="command-center">
      <Input
        label="Send To"
        name="address"
        placeholder="Enter 0x Address"
        type="text"
        className="address-input"
        required
      />
      <InputAmount
        name="value"
        label="Amount"
        placeholder="0.0"
        balance={balance}
        className="input-field-black"
        required
      />
      {txError && (
        <div className="error">
          Error: {(txError as BaseError).shortMessage || txError.message}
        </div>
      )}
      <button disabled={txConfirming} type="submit" className="button">
        {txConfirming ? "Confirming..." : "Send USDC"}
      </button>
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
    </form>
  );
}
