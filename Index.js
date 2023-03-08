// #Start your Engines

function fn(...c) {
    if (!c.forEach((a) => Number.isNumber(a)))
      throw "All numbers must be arguments.";
    return c.reduce((b, a) => b + a);
  }
  
  fun(1, 2, 3); //> 6
  fun(10, "B", 20); //> error All arguments must be numbers.