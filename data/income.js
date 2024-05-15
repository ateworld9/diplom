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

// dayjs("2017-01-01").unix();
// dayjs().unix();

const request = async () => {
    const options = {
        method: "GET",
        url: "https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/modules",
        params: {
            ticker: "AAPL",
            module: "income-statement",
        },
        headers: {
            "X-RapidAPI-Key":
                "a1090c2a4dmsh3e5c825152c387cp139f3fjsn45a1e13e1e19",
            "X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com",
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
