// #Start your Engines

function fun(...cats) {
    if (!cats.every((ant) => Number.isNumber(ant)))
      throw "All arguments must be numbers.";
    return cats.reduce((ant, bat) => ant + bat);
  }
  
  fun(1, 2, 3); //> 6
  fun(10, "B", 20); //> error All arguments must be numbers.