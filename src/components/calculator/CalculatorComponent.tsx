import { useForm } from 'react-hook-form';
import { useState } from 'react';

//import { calculatingFee } from '../../calculatorLogic/calculate';
import calculator from '../../calculatorLogic/FullCalculator';
import { IForm } from '../../global/interfaces';
import InputComponent from './InputComponent';

import './calculator.scss';

function CalculatorComponent() {
  const [ deliveryPrice, setdeliveryPrice]= useState(0);
  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: {
      cartValue: 5,
      distance: 500,
      amount: 1,
      datetime: new Date().toISOString().slice(0, -8),
    }
  });

  const onSubmit = (data: IForm) => {
    setdeliveryPrice(calculator.calculateFee(data));
    //it could be done more simple without decorators with file calculate.tsx
    //setdeliveryPrice(calculatingFee(data));
  }

  return (
    <main className="calculator">
      <div className="calculator__container">
        <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            label={"Cart Value"}
            type={"number"}
            id={"value"}
            ariaLabel={"Your cart value"}
            registerName={register("cartValue")}
            step={"0.1"}
            min={1}
            currency={"€"}
          />

          <InputComponent
            label={"Delivery Distance"}
            type={"number"}
            id={"distance"}
            ariaLabel={"Delivery Distance"}
            registerName={register("distance")}
            step={"1"}
            min={1}
            currency={"m"}
          />

          <InputComponent
            label={"Amount of items"}
            type={"number"}
            id={"amount"}
            ariaLabel={"Amount of items in cart"}
            registerName={register("amount")}
            step={"1"}
            min={1}
            currency={""}
          />

          <InputComponent
            label={"Time"}
            type={"datetime-local"}
            id={"date"}
            ariaLabel={"Date and time of delivery"}
            registerName={register("datetime")}
            step={"1"}
            min={new Date().toISOString().slice(0, -8)}
            currency={""}
          />

          <input
            type="submit"
            value="Calculate delivery price"
            className="submit__btn"
            aria-label="Calculate"
          />
        </form>

        <div className="price__container">
          <p className="delivery-price__title">Delivery price:</p>
          <div className="delivery-price" aria-label="Your delivery price">
            {deliveryPrice}
            <span className="currency"> €</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CalculatorComponent;
