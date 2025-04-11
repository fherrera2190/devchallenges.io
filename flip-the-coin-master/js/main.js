const button = document.querySelector("button");
const coin = document.querySelector(".coin");


button.addEventListener("click", () => {



    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            if (i % 2 === 0) {
                coin.setAttribute("src", "./resources/heads.svg");
                document.querySelector("#result").textContent = "Heads";

            } else {
                coin.setAttribute("src", "./resources/tails.svg");
                document.querySelector("#result").textContent = "Tails";

            }
        }, i * 100);
    }

    const result = Math.random() < 0.5 ? "Heads" : "Tails";

    if (result === "Heads") {
        coin.setAttribute("src", "./resources/heads.svg");
    } else {
        coin.setAttribute("src", "./resources/tails.svg");
    }
    document.querySelector("#result").textContent = result;

})