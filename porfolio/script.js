
var Effect = new Typed(".typedText",{
    strings : ["Siva subramanya bharathy","Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
  })

function sendMail(){
    let parms = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        // subject : document.getElementById('subject').value,
        message : document.getElementById('message').value,
    }
    emailjs.send('service_grz3oui', 'template_lsmw5rs', parms).then(alert('Email sent!!!'))
}