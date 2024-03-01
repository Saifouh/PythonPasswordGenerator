document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("passwordForm");
    const passwordsContainer = document.getElementById("passwords");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const length = parseInt(document.getElementById("length").value);
        const amount = parseInt(document.getElementById("amount").value);
        const includeUpper = document.querySelector('input[name="upper"]').checked;
        const includeLower = document.querySelector('input[name="lower"]').checked;
        const includeNums = document.querySelector('input[name="nums"]').checked;
        const includeSyms = document.querySelector('input[name="syms"]').checked;

        const allChars = generateCharacterString(includeUpper, includeLower, includeNums, includeSyms);

        passwordsContainer.innerHTML = ""; // Clear previous passwords

        for (let i = 0; i < amount; i++) {
            const password = generatePassword(allChars, length);
            const passwordElement = document.createElement("div");
            passwordElement.classList.add("password");
            passwordElement.textContent = password;
            passwordsContainer.appendChild(passwordElement);
        }
    });

    function generateCharacterString(includeUpper, includeLower, includeNums, includeSyms) {
        let allChars = "";
        if (includeUpper) allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLower) allChars += "abcdefghijklmnopqrstuvwxyz";
        if (includeNums) allChars += "0123456789";
        if (includeSyms) allChars += "()[]{},;:.-/\\?+*# ";
        return allChars;
    }

    function generatePassword(allChars, length) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }
        return password;
    }
});
