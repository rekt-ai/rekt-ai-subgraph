import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  MarketCreated,
  MarketParticipation,
  MarketSettled,
  OwnershipTransferred,
  WithdrawBalance
} from "../generated/RektPredictionMarket/RektPredictionMarket"

export function createMarketCreatedEvent(
  marketId: BigInt,
  startTime: BigInt,
  deadline: BigInt
): MarketCreated {
  let marketCreatedEvent = changetype<MarketCreated>(newMockEvent())

  marketCreatedEvent.parameters = new Array()

  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  marketCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "deadline",
      ethereum.Value.fromUnsignedBigInt(deadline)
    )
  )

  return marketCreatedEvent
}

export function createMarketParticipationEvent(
  marketId: BigInt,
  player: Address,
  predictionPrice: BigInt
): MarketParticipation {
  let marketParticipationEvent = changetype<MarketParticipation>(newMockEvent())

  marketParticipationEvent.parameters = new Array()

  marketParticipationEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  marketParticipationEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  marketParticipationEvent.parameters.push(
    new ethereum.EventParam(
      "predictionPrice",
      ethereum.Value.fromUnsignedBigInt(predictionPrice)
    )
  )

  return marketParticipationEvent
}

export function createMarketSettledEvent(
  marketId: BigInt,
  winner: Address,
  finalPrice: BigInt,
  predictionPrice: BigInt,
  totalAmount: BigInt
): MarketSettled {
  let marketSettledEvent = changetype<MarketSettled>(newMockEvent())

  marketSettledEvent.parameters = new Array()

  marketSettledEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  marketSettledEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  marketSettledEvent.parameters.push(
    new ethereum.EventParam(
      "finalPrice",
      ethereum.Value.fromUnsignedBigInt(finalPrice)
    )
  )
  marketSettledEvent.parameters.push(
    new ethereum.EventParam(
      "predictionPrice",
      ethereum.Value.fromUnsignedBigInt(predictionPrice)
    )
  )
  marketSettledEvent.parameters.push(
    new ethereum.EventParam(
      "totalAmount",
      ethereum.Value.fromUnsignedBigInt(totalAmount)
    )
  )

  return marketSettledEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createWithdrawBalanceEvent(
  user: Address,
  amount: BigInt
): WithdrawBalance {
  let withdrawBalanceEvent = changetype<WithdrawBalance>(newMockEvent())

  withdrawBalanceEvent.parameters = new Array()

  withdrawBalanceEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawBalanceEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawBalanceEvent
}
