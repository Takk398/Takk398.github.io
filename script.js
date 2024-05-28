function copyAccount() {
    const copyText = document.getElementById("accountNumber");
    const copyIcon = document.getElementById("copyIcon");

    navigator.clipboard.writeText(copyText.value)
        .then(() => {
            copyIcon.classList.remove("fa-copy");
            copyIcon.classList.add("fa-clipboard-check");
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}