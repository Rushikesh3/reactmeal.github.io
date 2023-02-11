import React, { useState } from 'react'
import { useRef } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount===0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
        console.log(enteredAmount)
        console.log(enteredAmountNumber)
        console.log("Error")
      setAmountIsValid(false);
     return;
    }
    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
        //   id: `amount_${props.id}`,
            id:"amount",
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      ></Input>
      <button>+Add</button>
      {!amountIsValid && <p>Please Enter a valid amount (1-5)</p>}
    </form>
  )
}

export default MealItemForm
