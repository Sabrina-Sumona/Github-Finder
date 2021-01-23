// Get the UI elements
let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

// Add Event Listener
searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;
    if (userText != '') {
        // Fetch API
        fetch(`https://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data => {
                if (data.message == 'Not Found') {
                    // Show alert
                    ui.showAlert("User not Found!", "alert alert-danger");
                } else {
                    //Show profile
                    ui.showProfile(data);
                }
            })
    } else {
        // Clear profile
        ui.clearProfile();
    }
});