document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const inputCode = document.getElementById('access-code').value.trim();
    fetch('codes.json')
        .then(response => response.json())
        .then(codes => {
            if (codes[inputCode] === "unused") {
                alert("Access Granted! Welcome to the Command Center.");
                // Simulate granting access
                codes[inputCode] = "used";
                console.log("Code marked as used:", inputCode);
            } else {
                document.getElementById('error-message').classList.remove('hidden');
            }
        })
        .catch(error => {
            console.error("Error fetching codes:", error);
        });
});
