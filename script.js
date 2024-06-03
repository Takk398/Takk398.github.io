function copyAccount() {
    const copyText = document.getElementById("accountNumber");
    const copyIcon = document.getElementById("copyIcon");

    navigator.clipboard.writeText(copyText.value)
        .then(() => {
            const tooltip = document.getElementById("copyTooltip"); // Get the existing tooltip
            copyIcon.classList.remove("fa-copy");
            copyIcon.classList.add("fa-clipboard-check");
        
            tooltip.classList.add("show");
        
            setTimeout(() => {
                tooltip.classList.remove("show");
            }, 1000);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

function showAccount() {
    var hiddenDiv = document.getElementById('accountDetailsContainer');
    var informationDiv = document.querySelector('.information');
    if (hiddenDiv.classList.contains('show-account')) {
        hiddenDiv.classList.remove('show-account');
        hiddenDiv.classList.add('hidden');
    } else {
        hiddenDiv.classList.remove('hidden');
        hiddenDiv.classList.add('show-account');
        setTimeout(function() {
            informationDiv.scrollTop = informationDiv.scrollHeight;
        });
    }
}

const directionsLink = document.querySelector('.directions');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-button');

directionsLink.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
