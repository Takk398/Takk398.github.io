function copyAccount() {
    const copyText = document.getElementById("accountNumber");
    const copyIcon = document.getElementById("copyIcon");

    navigator.clipboard.writeText(copyText.value)
        .then(() => {
            copyIcon.classList.remove("fa-copy");
            copyIcon.classList.add("fa-clipboard-check");
            // Create tooltip
            const tooltip = document.createElement("div");
            tooltip.textContent = "복사 완료";
            tooltip.classList.add("tooltip");
            copyText.parentElement.appendChild(tooltip);

            // Show tooltip
            tooltip.classList.add("show");

            // Hide tooltip after a few seconds
            setTimeout(() => {
                tooltip.classList.remove("show");
                setTimeout(() => {
                    tooltip.remove();
                }, 500);
            }, 2000); // show for 2 seconds
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

function showAccount() {
    var hiddenDiv = document.getElementById('accountDetailsContainer');
    var informationDiv = document.querySelector('.information');
    if (hiddenDiv.classList.contains('show')) {
        hiddenDiv.classList.remove('show');
        hiddenDiv.classList.add('hidden');
    } else {
        hiddenDiv.classList.remove('hidden');
        hiddenDiv.classList.add('show');
        setTimeout(function() {
            informationDiv.scrollTop = informationDiv.scrollHeight;
        }); // delay the scroll to sync with the transition
    }
}