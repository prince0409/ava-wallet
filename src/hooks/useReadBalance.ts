import { useAccount, useReadContract } from "wagmi";
import { formatUnits } from "viem";
import { USDC_CONTRACT } from "../constants/contract";

export const useReadBalance = () => {
  const account = useAccount();
  const { data, error, isPending, refetch } = useReadContract({
    abi: USDC_CONTRACT.abi,
    address: `0x${USDC_CONTRACT.address}`,
    functionName: "balanceOf",
    args: account.addresses,
  });

  return {
    balance: data ? formatUnits(data as bigint, 6) : "0",
    error,
    isPending,
    refetch,
  };
};
