const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data)
    })
};

fortuneBtn.addEventListener('click', getFortune)


const quoteBtn = document.getElementById("quoteButton")

const getQuote = () => {
    axios.get("http://localhost:4000/api/quote/")
    .then(res => {
        const data = res.data;
        alert(data)
    })
};

quoteBtn.addEventListener('click', getQuote)

const eomtionBtn = document.getElementById("emotionButton")

const getEmotions = () => {
    axios.get("http://localhost:4000/api/emotions/")
    .then(res => {
        const data = res.data;
        alert(data)
    })
};

quoteBtn.addEventListener('click', getEmotions)