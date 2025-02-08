import {
  MarketCreated as MarketCreatedEvent,
  MarketParticipation as MarketParticipationEvent,
  MarketSettled as MarketSettledEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  WithdrawBalance as WithdrawBalanceEvent
} from "../generated/RektPredictionMarket/RektPredictionMarket"
import {
  MarketCreated,
  MarketParticipation,
  MarketSettled,
  OwnershipTransferred,
  WithdrawBalance
} from "../generated/schema"

export function handleMarketCreated(event: MarketCreatedEvent): void {
  let entity = new MarketCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.startTime = event.params.startTime
  entity.deadline = event.params.deadline

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketParticipation(
  event: MarketParticipationEvent
): void {
  let entity = new MarketParticipation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.player = event.params.player
  entity.predictionPrice = event.params.predictionPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketSettled(event: MarketSettledEvent): void {
  let entity = new MarketSettled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.marketId = event.params.marketId
  entity.winner = event.params.winner
  entity.finalPrice = event.params.finalPrice
  entity.predictionPrice = event.params.predictionPrice
  entity.totalAmount = event.params.totalAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawBalance(event: WithdrawBalanceEvent): void {
  let entity = new WithdrawBalance(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
