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

function openMap() {
    document.getElementById("mapModal").style.display = "block";
  }

  function closeMap() {
    document.getElementById("mapModal").style.display = "none";
  }

  // Close the modal when the user clicks anywhere outside of the modal content
  window.onclick = function(event) {
    var modal = document.getElementById("mapModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }