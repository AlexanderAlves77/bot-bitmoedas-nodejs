const api = require('./api');

setInterval(async () => {
  const result = await api.depth();
  console.log(`Highest Buy: ${result.bids[0][0]}`);
  console.log(`Lowest Sell: ${result.asks[0][0]}`);

  const buy = parseInt(result.bids[0][0]);
  const sell = parseInt(result.asks[0][0]);
  if (sell < 200000) {
    console.log('Hora de Comprar!!!');
  } else if (buy > 230000) {
    console.log('Hora de Vender!!!');
  } else {
    console.log('Esperando o mercado se mexer...');
  }
}, process.env.CRAWLER_INTERVAL);
