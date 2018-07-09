port module Calculator exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import String
import Debug exposing (log)
import List.Nonempty as Nonempty exposing (Nonempty)
import List.Extra as Extra exposing (unfoldr)


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
    , principal : Float
    , principalList : Nonempty Float
    , yieldList : Nonempty Float
    , xAxis : Nonempty Float
    }


type alias Company =
    { yield : Float
    , fullName : String
    , purchasePrice : Float
    , growth : Float
    , dividend : Float
    }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )


initialModel : Model
initialModel =
    { company = companyDefault
    , holdingPeriod = 5.0
    , principal = 1000.0
    , principalList = Nonempty.fromElement 0.0
    , yieldList = Nonempty.fromElement 0.0
    , xAxis = Nonempty.fromElement 0.0
    }


companyDefault : Company
companyDefault =
    { yield = 0.05
    , fullName = "Select a company to begin"
    , purchasePrice = 20.0
    , growth = 0.07
    , dividend = 1.0
    }


companyPG : Company
companyPG =
    { yield = 0.032
    , fullName = "The Procter & Gamble Company (PG)"
    , purchasePrice = 83.0
    , growth = 0.062
    , dividend = 2.65
    }


companyKO : Company
companyKO =
    { yield = 0.029
    , fullName = "The Coca-Cola Company (KO)"
    , purchasePrice = 45.0
    , growth = 0.084
    , dividend = 1.32
    }


companyWMT : Company
companyWMT =
    { yield = 0.028
    , fullName = "Wal-Mart Stores Inc. (WMT)"
    , purchasePrice = 70.0
    , growth = 0.101
    , dividend = 1.96
    }


companyJNJ : Company
companyJNJ =
    { yield = 0.025
    , fullName = "Johnson & Johnson (JNJ)"
    , purchasePrice = 116.0
    , growth = 0.069
    , dividend = 2.95
    }


companyMMM : Company
companyMMM =
    { yield = 0.024
    , fullName = "3M Company"
    , purchasePrice = 233.0
    , growth = 0.148
    , dividend = 5.44
    }



-- UPDATE


addOneUpToHoldingPeriod : Float -> Float -> Maybe ( Float, Float )
addOneUpToHoldingPeriod n b =
    if b == n then
        Nothing
    else
        Just ( b, b + 1.0 )


buildAxis : Model -> Model
buildAxis model =
    let
        newAxis =
            Nonempty.Nonempty 0.0 (Extra.unfoldr (addOneUpToHoldingPeriod model.holdingPeriod) 1.0)
    in
        { model | xAxis = newAxis }


generateYield : Model -> Float -> Float -> Float
generateYield model a b =
    if a == 0 then
        model.company.yield
    else
        b * (1 + model.company.growth)


generateYieldList : Model -> Model
generateYieldList model =
    let
        generatedYieldList =
            Nonempty.scanl (generateYield model) model.company.yield model.xAxis
    in
        { model | yieldList = generatedYieldList }


generatePrincipal : Model -> Float -> Float -> Float
generatePrincipal model a b =
    if a == 0 then
        (1 + model.company.yield) * b
    else
        (((Nonempty.get (round a) model.yieldList) * b) * (1 + model.company.growth)) + b


generatePrincipalList : Model -> Model
generatePrincipalList model =
    let
        generatedPrincipalList =
            Nonempty.scanl (generatePrincipal model) model.principal model.xAxis
    in
        { model | principalList = generatedPrincipalList }


generateFutureValues : Model -> Model
generateFutureValues model =
    generatePrincipalList <| generateYieldList <| buildAxis model


calculateAnnualReturn : Model -> Float
calculateAnnualReturn model =
    ((Nonempty.get -1 model.principalList / Nonempty.get 0 model.principalList) ^ (1 / model.holdingPeriod)) - 1


calculateTotalReturn : Model -> Float
calculateTotalReturn model =
    (Nonempty.get -1 model.principalList / Nonempty.get 0 model.principalList) - 1


type Msg
    = SetPurchasePrice String
    | SetHoldingPeriod String
    | SelectCompany Company
    | BuildFutureValues
    | Chart


port chart : List Float -> Cmd msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetPurchasePrice newPrice ->
            let
                company =
                    model.company

                dividend =
                    company.dividend

                newPurchasePrice =
                    Result.withDefault 0 (String.toFloat newPrice)

                newCompany =
                    { company | purchasePrice = newPurchasePrice, yield = dividend / newPurchasePrice }

                newModel =
                    { model | company = newCompany }
            in
                update BuildFutureValues newModel

        SetHoldingPeriod newHoldingPeriod ->
            let
                holdingPeriod =
                    Result.withDefault 0 (String.toFloat newHoldingPeriod)

                newModel =
                    { model | holdingPeriod = holdingPeriod }
            in
                update BuildFutureValues newModel

        SelectCompany newCompany ->
            let
                newModel =
                    { model | company = newCompany }
            in
                ( newModel, Cmd.none )

        BuildFutureValues ->
            let
                newModel =
                    generateFutureValues model
            in
                update Chart newModel

        Chart ->
            ( model, chart <| Nonempty.toList model.principalList )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- VIEW


view : Model -> Html Msg
view model =
    div [ class "calculator container" ]
        [ div []
            [ h2 [] [ Html.text model.company.fullName ]
            , div [ class "row extra-margin" ]
                [ div [ attribute "aria-label" "...", class "btn-group btn-group", attribute "role" "group", onClick BuildFutureValues ]
                    [ button [ class "btn btn-default", type_ "button", onClick (SelectCompany companyMMM) ]
                        [ text "MMM" ]
                    , button [ class "btn btn-default", type_ "button", onClick (SelectCompany companyPG) ]
                        [ text "PG" ]
                    , button [ class "btn btn-default", type_ "button", onClick (SelectCompany companyKO) ]
                        [ text "KO" ]
                    , button [ class "btn btn-default", type_ "button", onClick (SelectCompany companyWMT) ]
                        [ text "WMT" ]
                    , button [ class "btn btn-default", type_ "button", onClick (SelectCompany companyJNJ) ]
                        [ text "JNJ" ]
                    ]
                ]
            ]
        , div [ class "row" ]
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
                        [ input [ id "puchasePrice", class "form-control", onInput SetPurchasePrice, value (toString model.company.purchasePrice) ]
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
                        [ select [ id "holdingPeriod", class "form-control", onInput SetHoldingPeriod ]
                            [ option [ value "5" ]
                                [ text "5 years" ]
                            , option [ value "10" ]
                                [ text "10 years" ]
                            , option [ value "20" ]
                                [ text "20 years" ]
                            , option [ value "30" ]
                                [ text "30 years" ]
                            ]
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
                        [ Html.text <| flip (++) "%" <| String.left 4 <| toString <| (*) 100 <| calculateAnnualReturn <| generateFutureValues model ]
                    , div [ class "col-xs-3 col-sm-2" ]
                        []
                    ]
                , div [ class "row extra-margin" ]
                    [ div [ class "col-xs-2 col-sm-1" ]
                        []
                    , div [ class "col-xs-5 col-sm-6" ]
                        [ Html.text "Total Return" ]
                    , div [ class "col-xs-2 col-sm-3" ]
                        [ Html.text <| flip (++) "%" <| String.left 4 <| toString <| (*) 100 <| calculateTotalReturn <| generateFutureValues model ]
                    , div [ class "col-xs-3 col-sm-2" ]
                        []
                    ]
                ]
            ]
        ]
