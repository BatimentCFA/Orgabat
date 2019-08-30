var toggle = document.getElementsByClassName('toggle-btn');
toggle.innerHTML = `
                        <span></span>
                        <span></span>
                        <span></span>
                   `;
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

var logged = document.getElementById('loggedIn');
function getLog() {
    var fname = document.getElementById('firstname').value;
    var lname = document.getElementById('lastname').value;
    sessionStorage.setItem('firstname', fname);
    sessionStorage.setItem('lastname', lname);
    // Recharge la page après s'être identifier
    location.reload();
    //
    window.location.href = 'https://127.0.0.1:8000/list'
}

if (sessionStorage.getItem('firstname') && sessionStorage.getItem('lastname')){
    logged.innerHTML = `${sessionStorage.getItem('firstname')} ${sessionStorage.getItem('lastname')}`;
    console.log(`You're logged into as ${sessionStorage.getItem('firstname')} ${sessionStorage.getItem('lastname')}.`);

} else {
    logged.innerHTML = "S'identifier";
}