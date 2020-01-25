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
                    newModel = generateFutureValues initialModel
                  in
                    Expect.equal (newModel.xAxis) (Nonempty.Nonempty 0.0 [1.0, 2.0, 3.0, 4.0])
            , test "2" <|
                \() ->
                  let
                    pgModel = { initialModel | company = companyCAT, principal = 1000 }
                    pgFV = generateFutureValues pgModel
                  in
                    Expect.equal (pgFV.principalList) (Nonempty.Nonempty 1000.0 [1037,1078.05483,1123.722634070079,1174.6571503020161,1231.6273788141687])
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
