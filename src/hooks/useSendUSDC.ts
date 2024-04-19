import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { parseUnits } from "viem";
import { USDC_CONTRACT } from "../constants/contract";

export const useSendUSDC = () => {
  const {
    data: hash,
    error: txError,
    isPending: txConfirming,
    writeContract,
  } = useWriteContract();

  const data = useWaitForTransactionReceipt({
    hash,
  });

  const { isLoading: isConfirming, isSuccess: isConfirmed } = data;

  const sendUSDC = (to: string, value: string) =>
    writeContract({
      abi: USDC_CONTRACT.abi,
      address: `0x${USDC_CONTRACT.address}`,
      functionName: "transfer",
      args: [to, parseUnits(value, 6)],
    });

  return { txError, txConfirming, sendUSDC, isConfirming, isConfirmed };
};
