const fs = require("node:fs/promises");
const axios = require("axios");
const dayjs = require("dayjs");

async function write(file, content) {
    try {
        await fs.writeFile(file, content, {
            encoding: "utf-8",
            flag: "w",
        });
    } catch (err) {
        console.log(err);
    }
}

dayjs("2017-01-01").unix();
dayjs().unix();

const request = async () => {
    const options = {
        method: "GET",
        url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-timeseries",
        params: {
            symbol: "AAPL",
            period1: dayjs("2017-01-01").unix(),
            period2: dayjs().unix(),
            region: "US",
        },
        headers: {
            "X-RapidAPI-Key":
                "a1090c2a4dmsh3e5c825152c387cp139f3fjsn45a1e13e1e19",
            "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        },
    };
    try {
        const response = await axios.request(options);
        write("./income.json", JSON.stringify(response.data));
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

request();
