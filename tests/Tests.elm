module Tests exposing (..)

import Test exposing (..)
import Expect
import String

import Html
import Calculator exposing (..)

import List.Nonempty as Nonempty exposing (Nonempty)

all : Test
all =
    describe "The Calculator Module"
        [ describe "generateDividends"
            [ test "Zero periods" <|
                \() ->
                    Expect.equal (Nonempty.get -1 <| generateDividends 0.0 (Nonempty.fromElement 0.0) 2.65 0.062 0) 2.65
            , test "One period" <|
                \() ->
                    Expect.equal (Nonempty.get -1 <| generateDividends 0.0 (Nonempty.fromElement 0.0) 2.65 0.062 1) 2.8143000000000002
            , test "Five periods" <|
                \() ->
                    Expect.equal (Nonempty.get -1 <| generateDividends 0.0 (Nonempty.fromElement 0.0) 2.65 0.062 5) 3.5798799062040056
            , test "Ten periods" <|
                \() ->
                    Expect.equal (Nonempty.get -1 <| generateDividends 0.0 (Nonempty.fromElement 0.0) 2.65 0.062 10.0) 4.8360528840917745
            ]
        , describe "rateOfReturn"
            [ test "Zero periods" <|
                \() ->
                    Expect.equal (rateOfReturn 0.0 (Nonempty.fromElement 0.0) 2.65 0.062 0 82) 0.03231707317073171
            , test "One period" <|
                \() ->
                    Expect.equal (rateOfReturn 0.0 (Nonempty.fromElement 0.0) 2.65 0.062 1 82) 0.03432073170731709
            --, test "Five periods" <|
            --    \() ->
            --        Expect.equal (rateOfReturn 0.0 (Nonempty.fromElement 0.0) 2.65 0.062 5 82) 0.03614027671403286
            --, test "Ten periods" <|
            --    \() ->
            --        Expect.equal (rateOfReturn 0.0 (Nonempty.fromElement 0.0) 2.65 0.062 10.0 82) 0.03832999855794661
            ]
        --, describe "update"
        --    [ test "SetPurchasePrice" <|
        --        \() ->
        --            let 
        --                company = initialModel.company
        --                newCompany = { company | purchasePrice = 30 }
        --                newModel = { initialModel | company = newCompany }
        --                (actualModel, _) = (update (SetPurchasePrice "30") initialModel)
        --            in
        --                Expect.equal actualModel newModel
        --    ]
        ]

