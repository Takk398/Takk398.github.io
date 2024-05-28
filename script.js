function copyAccount() {
    const copyText = document.getElementById("accountNumber");
    const copyIcon = document.getElementById("copyIcon");

    navigator.clipboard.writeText(copyText.value)
        .then(() => {
            copyIcon.classList.remove("fa-copy");
            copyIcon.classList.add("fa-clipboard-check");  

            setTimeout(() => {
                copyIcon.classList.remove("fa-clipboard-check");
                copyIcon.classList.add("fa-copy");
            }, 3000); // 1.5 seconds
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}