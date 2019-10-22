module.exports = (data) => {

  return data.reduce((acc, transaction) => {

    const date = String(new Date(transaction.timestamp)).slice(0, 15);

    (acc[date]) ? acc[date] += transaction.price : acc[date] = transaction.price;

    return acc;

  }, {});

};

