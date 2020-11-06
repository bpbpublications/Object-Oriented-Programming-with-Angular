
  type float = number;
  type long = number;
  type int = number;

  function divide(number1: int, number2: long): float {
    return number1 + number2;
  }

  const result: float = divide(10, 20);
  console.log(result);
  