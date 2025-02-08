import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { MarketCreated } from "../generated/schema"
import { MarketCreated as MarketCreatedEvent } from "../generated/RektPredictionMarket/RektPredictionMarket"
import { handleMarketCreated } from "../src/rekt-prediction-market"
import { createMarketCreatedEvent } from "./rekt-prediction-market-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let marketId = BigInt.fromI32(234)
    let startTime = BigInt.fromI32(234)
    let deadline = BigInt.fromI32(234)
    let newMarketCreatedEvent = createMarketCreatedEvent(
      marketId,
      startTime,
      deadline
    )
    handleMarketCreated(newMarketCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MarketCreated created and stored", () => {
    assert.entityCount("MarketCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MarketCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "marketId",
      "234"
    )
    assert.fieldEquals(
      "MarketCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "startTime",
      "234"
    )
    assert.fieldEquals(
      "MarketCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "deadline",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
