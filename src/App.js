import "./assets/theme.css"
import { useReducer } from "react"
import DigitButton from "./components/Molecules/DigitButton"
import OperationButton from "./components/Molecules/OperationButton"
import { ACTIONS } from "./services/ActionService"
import { reducer, formatOperand } from "./services/CalculationService"
import AtomButton from "./components/Atoms/AtomButton"




function App() {

  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  )

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(previousOperand)} {operation}
        </div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>

      <AtomButton
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        text='AC'
      />


      <AtomButton onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })} text='DEL' />
      <OperationButton color="inherit" operation="%" dispatch={dispatch}/>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />

      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />

      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />

      <AtomButton
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        text='='
      />
    </div>
  )
}

export default App
