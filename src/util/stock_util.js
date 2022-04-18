/* eslint-disable import/prefer-default-export */
export async function fetchStockChart(ticker, range) {
  let interval;
  let file;
  switch (range) {
    case "5y":
      interval = 48;
      file = 1;
      break;
    case "1Y":
      interval = 9;
      file = 2;
      break;
    case "3M":
      interval = 4;
      file = 3;
      break;
    case "1M":
      interval = 1;
      file = 4;
      break;
    case "1D":
      interval = 12;
      file = 5;
      break;
    default:
      interval = 100;
      file = 1;
      break;
  }
  console.log("===>Interval:", interval);
  const response = await fetch(`http://localhost:3001/dataa${file}`).catch(
    (err) => console.log(err)
  );
  const parsed = await response.json();
  return parsed;
}

export async function fetchSymbols() {
  const response = await fetch(`http://localhost:3002/symbolss`);
  const json = await response.json();
  console.log("===>SYMBOL:", JSON.stringify(json.data));
  return json;
}
