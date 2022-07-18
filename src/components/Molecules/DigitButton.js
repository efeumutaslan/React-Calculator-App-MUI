import { ACTIONS } from "../../services/ActionService"
import AtomButton from "../Atoms/AtomButton"

export default function DigitButton({ dispatch, digit }) {
  return (
    <AtomButton color="inherit"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
      text = {digit}
    >
    </AtomButton>
  )
}
