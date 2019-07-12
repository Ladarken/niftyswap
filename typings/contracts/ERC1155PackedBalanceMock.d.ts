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

interface ERC1155PackedBalanceMockInterface extends Interface {
  functions: {
    safeBatchTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _ids, _amounts, _data]: [
        string,
        string,
        (BigNumberish)[],
        (BigNumberish)[],
        Arrayish
      ]): string;
    }>;

    burnMock: TypedFunctionDescription<{
      encode([_from, _id, _value]: [
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    setApprovalForAll: TypedFunctionDescription<{
      encode([_operator, _approved]: [string, boolean]): string;
    }>;

    metaSafeBatchTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _ids, _amounts, _isGasFee, _data]: [
        string,
        string,
        (BigNumberish)[],
        (BigNumberish)[],
        boolean,
        Arrayish
      ]): string;
    }>;

    mintMock: TypedFunctionDescription<{
      encode([_to, _id, _value, _data]: [
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    batchBurnMock: TypedFunctionDescription<{
      encode([_from, _ids, _values]: [
        string,
        (BigNumberish)[],
        (BigNumberish)[]
      ]): string;
    }>;

    metaSafeTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _id, _amount, _isGasFee, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        boolean,
        Arrayish
      ]): string;
    }>;

    batchMintMock: TypedFunctionDescription<{
      encode([_to, _ids, _values, _data]: [
        string,
        (BigNumberish)[],
        (BigNumberish)[],
        Arrayish
      ]): string;
    }>;

    safeTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _id, _amount, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    metaSetApprovalForAll: TypedFunctionDescription<{
      encode([_owner, _operator, _approved, _isGasFee, _data]: [
        string,
        string,
        boolean,
        boolean,
        Arrayish
      ]): string;
    }>;
  };

  events: {
    TransferSingle: TypedEventDescription<{
      encodeTopics([_operator, _from, _to, _id, _amount]: [
        string | null,
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    TransferBatch: TypedEventDescription<{
      encodeTopics([_operator, _from, _to, _ids, _amounts]: [
        string | null,
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    ApprovalForAll: TypedEventDescription<{
      encodeTopics([_owner, _operator, _approved]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    URI: TypedEventDescription<{
      encodeTopics([_uri, _id]: [null, BigNumberish | null]): string[];
    }>;
  };
}

export class ERC1155PackedBalanceMock extends Contract {
  connect(
    signerOrProvider: Signer | Provider | string
  ): ERC1155PackedBalanceMock;
  attach(addressOrName: string): ERC1155PackedBalanceMock;
  deployed(): Promise<ERC1155PackedBalanceMock>;

  on(event: EventFilter | string, listener: Listener): ERC1155PackedBalanceMock;
  once(
    event: EventFilter | string,
    listener: Listener
  ): ERC1155PackedBalanceMock;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ERC1155PackedBalanceMock;
  removeAllListeners(eventName: EventFilter | string): ERC1155PackedBalanceMock;
  removeListener(eventName: any, listener: Listener): ERC1155PackedBalanceMock;

  interface: ERC1155PackedBalanceMockInterface;

  functions: {
    balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;

    supportsInterface(_interfaceID: Arrayish): Promise<boolean>;

    getNonce(_signer: string): Promise<BigNumber>;

    balanceOfBatch(
      _owners: (string)[],
      _ids: (BigNumberish)[]
    ): Promise<(BigNumber)[]>;

    getIDBinIndex(
      _id: BigNumberish
    ): Promise<{
      bin: BigNumber;
      index: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

    getValueInBin(
      _binAmount: BigNumberish,
      _index: BigNumberish
    ): Promise<BigNumber>;

    isValidSignature(
      _signerAddress: string,
      _hash: Arrayish,
      _data: Arrayish,
      _sig: Arrayish
    ): Promise<boolean>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    burnMock(
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    mintMock(
      _to: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    batchBurnMock(
      _from: string,
      _ids: (BigNumberish)[],
      _values: (BigNumberish)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    batchMintMock(
      _to: string,
      _ids: (BigNumberish)[],
      _values: (BigNumberish)[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  filters: {
    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _amount: null
    ): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _amounts: null
    ): EventFilter;

    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;

    URI(_uri: null, _id: BigNumberish | null): EventFilter;
  };

  estimate: {
    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: Arrayish
    ): Promise<BigNumber>;

    burnMock(
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish
    ): Promise<BigNumber>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<BigNumber>;

    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;

    mintMock(
      _to: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    batchBurnMock(
      _from: string,
      _ids: (BigNumberish)[],
      _values: (BigNumberish)[]
    ): Promise<BigNumber>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;

    batchMintMock(
      _to: string,
      _ids: (BigNumberish)[],
      _values: (BigNumberish)[],
      _data: Arrayish
    ): Promise<BigNumber>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;
  };
}
