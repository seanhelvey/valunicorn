port module Calculator exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import String
import Debug exposing (log)
import List.Nonempty as Nonempty exposing (Nonempty)

main =
  Html.program
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }


-- MODEL

type alias Model =
  { company : Company 
  , holdingPeriod : Float
  , futureValue : Float
  , aggregateList : Nonempty Float
  }

type alias Company =
  { yield : Float
  , fullName : String
  , purchasePrice : Float
  , growth : Float
  , dividend : Float
  }  

init: (Model, Cmd Msg)
init = 
  (initialModel, Cmd.none)

initialModel : Model
initialModel = 
  { company = companyDefault
  , holdingPeriod = 10.0
  , futureValue = 0.0
  , aggregateList = Nonempty.fromElement 0.0
  }

companyDefault : Company
companyDefault = 
  { yield = 0.0
  , fullName = "Select a company to begin"
  , purchasePrice = 0.0
  , growth = 0.0
  , dividend = 0.0
  }

companyPG : Company
companyPG = 
  { yield = 0.032
  , fullName = "The Procter & Gamble Company (PG)"
  , purchasePrice = 83.00
  , growth = 0.062
  , dividend = 2.65
  }

companyKO : Company
companyKO = 
  { yield = 0.029
  , fullName = "The Coca-Cola Company (KO)"
  , purchasePrice = 45.00
  , growth = 0.084
  , dividend = 1.32
  }

companyWMT : Company
companyWMT = 
  { yield = 0.028
  , fullName = "Wal-Mart Stores Inc. (WMT)"
  , purchasePrice = 70.00
  , growth = 0.101
  , dividend = 1.96
  }

companyJNJ : Company
companyJNJ = 
  { yield = 0.025
  , fullName = "Johnson & Johnson (JNJ)"
  , purchasePrice = 116.00
  , growth = 0.069
  , dividend = 2.95
  }  

-- UPDATE

generateDividends : Float -> Nonempty Float -> Float -> Float -> Float -> Nonempty Float
generateDividends x accList d g n =
  if (x == 0) then
    generateDividends (x+1) accList (d*(1+g)) g n
  else if (x == n) then
    let
      priorD = Nonempty.get -1 accList
    in
      Nonempty.append accList (Nonempty.fromElement (priorD+d))
  else
    let 
      priorD = Nonempty.get -1 accList
      newAccList = Nonempty.append accList (Nonempty.fromElement (priorD+d))
    in 
      if (x == 1) then
        generateDividends (x+1) (Nonempty.fromElement d) (d*(1+g)) g n        
      else
        generateDividends (x+1) newAccList (d*(1+g)) g n


--generateDividends : Float -> Nonempty Float -> Float -> Float -> Float -> Nonempty Float
--generateDividends x accList d g n =
--  if (x == 0) then
--    generateDividends (x+1) accList (d*(1+g)) g n
--  else if (x == n) then
--    Nonempty.append accList (Nonempty.fromElement d)
--  else
--    let 
--      newAccList = Nonempty.append accList (Nonempty.fromElement d)
--    in 
--      if (x == 1) then
--        generateDividends (x+1) (Nonempty.fromElement d) (d*(1+g)) g n        
--      else
--        generateDividends (x+1) newAccList (d*(1+g)) g n


rateOfReturn : Float -> Nonempty Float -> Float -> Float -> Float -> Float -> Float
rateOfReturn x acc d g n p =  
  if (n == 0) then
    ((Nonempty.get -1 (generateDividends x acc d g n)) / p)
  else 
    (((Nonempty.get -1 (generateDividends x acc d g n)) / p) + 1) ^ (1 / n) - 1

totalReturn : Float -> Nonempty Float -> Float
totalReturn p =
  Nonempty.get -1 >> flip (/) p

calculateReturn : Model -> Model
calculateReturn model =
  { model | aggregateList = generateDividends 0.0 (Nonempty.fromElement 0.0) model.company.dividend model.company.growth model.holdingPeriod }  

type Msg
  = SetPurchasePrice String
  | SetHoldingPeriod String
  | SelectCompany Company
  | Calculate
  | Chart


port chart : List Float -> Cmd msg

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    SetPurchasePrice newPrice ->
      let
        company = model.company
        dividend = company.dividend
        newPurchasePrice = Result.withDefault 0 (String.toFloat newPrice)
        newCompany = { company | purchasePrice = newPurchasePrice, yield = dividend / newPurchasePrice }
        newModel = { model | company = newCompany }
      in
        update Calculate newModel

    SetHoldingPeriod newHoldingPeriod ->
      let
        holdingPeriod = Result.withDefault 0 (String.toFloat newHoldingPeriod) 
        newModel = { model | holdingPeriod = holdingPeriod }
      in
        update Calculate newModel

    SelectCompany newCompany ->
      let
        newModel = { model | company = newCompany }
      in
        ( newModel, Cmd.none )

    Calculate ->
      let
        newModel = calculateReturn model
      in
        update Chart newModel

    Chart ->
      ( model, chart <| Nonempty.toList model.aggregateList )


subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.none

-- VIEW

view : Model -> Html Msg
view model =
  div [ class "calculator container" ]
    [ div [] [
      h2 [] [ Html.text model.company.fullName ]
      , div [ class "row extra-margin" ]
        [
          div [ attribute "aria-label" "...", class "btn-group btn-group", attribute "role" "group", onClick Calculate]
              [ button [ class "btn btn-default", type_ "button", onClick (SelectCompany companyPG)]
                  [ text "PG" ]
              , button [ class "btn btn-default", type_ "button", onClick (SelectCompany companyKO)]
                  [ text "KO" ]
              , button [ class "btn btn-default", type_ "button", onClick (SelectCompany companyWMT)]
                  [ text "WMT" ]
              , button [ class "btn btn-default", type_ "button", onClick (SelectCompany companyJNJ)]
                  [ text "JNJ" ]
              ]
        ]
      ], div [ class "row" ]
      [ div [ class "col-sm-4" ]
        [ h3 []
          [ Html.text "Company" ]
        , div [ class "row extra-margin" ]
          [ div [ class "col-xs-2 col-sm-1" ]
            []
          , div [ class "col-xs-5 col-sm-7" ]
            [ Html.text "Current Yield" ]
          , div [ class "col-xs-2 col-sm-1" ]
            [ Html.text ((String.left 4 (toString (model.company.yield * 100))) ++ "%") ]
          , div [ class "col-xs-3 col-sm-3" ]
            []
          ]
        , div [ class "row extra-margin" ]
          [ div [ class "col-xs-2 col-sm-1" ]
            []
          , div [ class "col-xs-5 col-sm-7" ]
            [ Html.text "Dividend Growth" ]
          , div [ class "col-xs-2 col-sm-1" ]
            [ Html.text ((String.left 4 (toString (model.company.growth * 100))) ++ "%") ]
          , div [ class "col-xs-3 col-sm-3" ]
            []
          ]
        ]
      , div [ class "col-sm-4" ]
        [ h3 []
          [ Html.text "Inputs" ]
        , div [ class "row extra-margin" ]
          [ div [ class "col-xs-2 col-sm-2" ]
            []
          , div [ class "col-xs-4 col-sm-4" ]
            [ Html.text "Purchase Price" ]
          , div [ class "col-xs-4 col-sm-4" ]
            [ input [ id "puchasePrice", class "form-control", onInput SetPurchasePrice, value (toString model.company.purchasePrice)]
              []
            ]
          , div [ class "col-xs-2 col-sm-2" ]
            []
          ]
        , div [ class "row extra-margin" ]
          [ div [ class "col-xs-2 col-sm-2" ]
            []
          , div [ class "col-xs-4 col-sm-4" ]
            [ Html.text "Holding Period" ]
          , div [ class "col-xs-4 col-sm-4" ]
            [ input [ id "holdingPeriod", class "form-control", onInput SetHoldingPeriod, value (toString model.holdingPeriod)]
              []
            ]
          , div [ class "col-xs-2 col-sm-2" ]
            []
          ]
        ]
      , div [ class "col-sm-4" ]
        [ h3 []
          [ Html.text "Outputs" ]
        , div [ class "row extra-margin" ]
          [ div [ class "col-xs-2 col-sm-1" ]
            []
          , div [ class "col-xs-5 col-sm-6" ]
            [ Html.text "Annual Return" ]
          , div [ class "col-xs-2 col-sm-3" ]
            [ Html.text "" ]--((String.left 4 (toString (model.annualReturn * 100))) ++ "%") ]
          , div [ class "col-xs-3 col-sm-2" ]
            []
          ]
        , div [ class "row extra-margin" ]
          [ div [ class "col-xs-2 col-sm-1" ]
            []
          , div [ class "col-xs-5 col-sm-6" ]
            [ Html.text "Total Return" ]
          , div [ class "col-xs-2 col-sm-3" ]
            [ Html.text <| flip (++) "%" <| String.left 4 <| toString <| (*) 100 <| totalReturn model.company.purchasePrice model.aggregateList ]
          , div [ class "col-xs-3 col-sm-2" ]
            []
          ]
        ]
      ]
    ]