module Tests exposing (..)

import Test exposing (..)
import Expect
import String

import Html
import Calculator exposing (..)


all : Test
all =
    describe "The Calculator Module"
        [ describe "futureValue"
            [ test "Zero periods" <|
                \() ->
                    Expect.equal (futureValue 0.0 0.0 2.65 0.062 0) 2.65
            , test "One period" <|
                \() ->
                    Expect.equal (futureValue 0.0 0.0 2.65 0.062 1) 2.8143000000000002
            , test "Five periods" <|
                \() ->
                    Expect.equal (futureValue 0.0 0.0 2.65 0.062 5) 15.927942909494408
            , test "Ten periods" <|
                \() ->
                    Expect.equal (futureValue 0.0 0.0 2.65 0.062 10.0) 37.44497036944294
            ]
        , describe "rateOfReturn"
            [ test "Zero periods" <|
                \() ->
                    Expect.equal (rateOfReturn 0.0 0.0 2.65 0.062 0 82) 0.03231707317073171
            , test "One period" <|
                \() ->
                    Expect.equal (rateOfReturn 0.0 0.0 2.65 0.062 1 82) 0.03432073170731709
            , test "Five periods" <|
                \() ->
                    Expect.equal (rateOfReturn 0.0 0.0 2.65 0.062 5 82) 0.03614027671403286
            , test "Ten periods" <|
                \() ->
                    Expect.equal (rateOfReturn 0.0 0.0 2.65 0.062 10.0 82) 0.03832999855794661
            ]
        , describe "update"
            [ test "SetPurchasePrice" <|
                \() ->
                    let 
                        company = initialModel.company
                        newCompany = { company | purchasePrice = 30 }
                        newModel = { initialModel | company = newCompany }
                    in
                        Expect.equal (update (SetPurchasePrice "30") initialModel) newModel
            ]
        ]
