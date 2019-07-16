/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ERC20MockInterface extends Interface {
  functions: {
    approve: TypedFunctionDescription<{
      encode([spender, value]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([from, to, value]: [string, string, BigNumberish]): string;
    }>;

    increaseAllowance: TypedFunctionDescription<{
      encode([spender, addedValue]: [string, BigNumberish]): string;
    }>;

    decreaseAllowance: TypedFunctionDescription<{
      encode([spender, subtractedValue]: [string, BigNumberish]): string;
    }>;

    transfer: TypedFunctionDescription<{
      encode([to, value]: [string, BigNumberish]): string;
    }>;
  };

  events: {
    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    Approval: TypedEventDescription<{
      encodeTopics([owner, spender, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class ERC20Mock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ERC20Mock;
  attach(addressOrName: string): ERC20Mock;
  deployed(): Promise<ERC20Mock>;

  on(event: EventFilter | string, listener: Listener): ERC20Mock;
  once(event: EventFilter | string, listener: Listener): ERC20Mock;
  addListener(eventName: EventFilter | string, listener: Listener): ERC20Mock;
  removeAllListeners(eventName: EventFilter | string): ERC20Mock;
  removeListener(eventName: any, listener: Listener): ERC20Mock;

  interface: ERC20MockInterface;

  functions: {
    balanceOf(owner: string): Promise<BigNumber>;

    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    name(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    symbol(): Promise<string>;
  };

  filters: {
    Transfer(from: string | null, to: string | null, value: null): EventFilter;

    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;
  };

  estimate: {
    approve(spender: string, value: BigNumberish): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish
    ): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish
    ): Promise<BigNumber>;

    transfer(to: string, value: BigNumberish): Promise<BigNumber>;
  };
}