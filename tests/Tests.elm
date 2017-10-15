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
        [ describe "A"
            [ test "1" <|
                \() ->
                  let
                    newModel = buildAxis initialModel
                  in
                    Expect.equal (newModel.aggregateList) (Nonempty.Nonempty 0.0 [1.0, 2.0, 3.0, 4.0])
            , test "2" <|
                \() ->
                    Expect.equal (2) 2
            , test "3" <|
                \() ->
                    Expect.equal (3) 3
            , test "4" <|
                \() ->
                    Expect.equal (4) 4
            ]
        , describe "B"
            [ test "1" <|
                \() ->
                    Expect.equal (1) 1
            , test "2" <|
                \() ->
                    Expect.equal (2) 2
            , test "3" <|
                \() ->
                    Expect.equal (3) 3
            , test "4" <|
                \() ->
                    Expect.equal (4) 4
            ]
        ]
