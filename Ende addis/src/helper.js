const timeOut = function () {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      return reject(new Error("fetching data took too long"));
    }, 10000);
  });
};

export const fetcher = async function () {
  try {
    const fetchComment = fetch("../data.json");

    const res = await Promise.race([fetchComment, timeOut()]);

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

// export const pussy = setTimeout(handleTimeOut, 15000);
