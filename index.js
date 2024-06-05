
document.addEventListener('DOMContentLoaded', function() {
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalText = document.getElementById('modal-text');
const consentForm = document.getElementById('consent-form');
const declineBtn = document.getElementById('decline-btn');

setTimeout(function() {
    modal.style.display = 'inline';
    }, 1500);

    modalCloseBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    consentForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        modalText.innerHTML = `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading" alt="Loading">
            <p id="uploadText">Uploading your data to the dark web...</p>
        </div>
        `;
        console.log('form submitted');
    });


    declineBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

});
    /*
Challenge:
1. Take control of the "modal-text" element. 
2. Make it so that when a user clicks on 
   the accept button, the HTML string below
   is inserted into the modal-text div.*/


