port module MyThing exposing (..)

import Html exposing (..)
import Html.App as Html
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import String


main =
  Html.program
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }


-- MODEL

type alias Model =
  { input1 : String,
    input2 : String,
    suggestions : String
  }

init : (Model, Cmd Msg)
init =
  (Model "" "" "", Cmd.none)


-- UPDATE

type Msg
  = SetInput1 String
  | SetInput2 String
  | Check
  | Suggest String


port check : String -> Cmd msg

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    SetInput1 newWord ->
      ( Model newWord "" "", Cmd.none )

    SetInput2 newWord ->
      ( Model "" newWord "", Cmd.none )

    Check ->
      ( model, check model.input1 )

    Suggest newSuggestions ->
      ( Model model.input1 "" newSuggestions, Cmd.none )


-- SUBSCRIPTIONS

port suggestions : (String -> msg) -> Sub msg

subscriptions : Model -> Sub Msg
subscriptions model =
  suggestions Suggest


-- VIEW

view : Model -> Html Msg
view model =
  div [] [
    input [ onInput SetInput1 ] []
    , input [] []
    , button [ onClick Check ] [ text "Check" ]
    , div [] [ text (model.suggestions ++ model.suggestions) ]
  ]