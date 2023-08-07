/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetheight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + ']').classList.add('active');
      });
    };
  });
  /* sticky navbar */
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /*  remove toggle icon and navbar when click navbar link (scroll)*/

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};
// send form data to whatsapp//
function whatsapp() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('Mobile').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  var url = "https://wa.me/26777695718?text=" + "Name of customer:" + name + "<br>"
    + "Mobile No.:" + mobile + "<br>"
    + "EMAIL ID:" + email + "<br>"
    + "Subject:" + subject + "<br>"
    + "Message:" + message;

  window.open(url, "_blank").focus();


}
//send  form data to email.
function sendEmail() {
  Email.send({
    
    host: "smtp.gmail.com",
    Username: "michaelmahumba099@gmail.com",
    Password: "michaelmahumba23",
    To: 'michaelmahumba099@gmail.com',
    From: document.getElementById("email").value,
    Subject: document.getElementById("subject").value,
    Body: "Name" + document.getElementById("name").value
    + "<br> Email: " +document.getElementById("email").value
    + "<br> Mobile No: " +document.getElementById("Mobile").value
    + "<br> Message: " +document.getElementById("message").value



  }).then(message => alert("Message Sent Successfully"));

}
