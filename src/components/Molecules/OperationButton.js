import { ACTIONS } from "../../services/ActionService"
import AtomButton from "../Atoms/AtomButton"
import PropTypes from "prop-types";

export default function OperationButton({ dispatch, operation, color }) {
  return (
    <AtomButton 
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
      color = {color}
      text = {operation}
    >
    </AtomButton>
  )
}

OperationButton.defaultProps= {
  color:"warning"
}

OperationButton.propTypes = {
  color: PropTypes.string
}