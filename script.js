document.getElementById('y').textContent=new Date().getFullYear();
// Form opens the visitor's email app. Replace the address, or connect a form service later.
document.getElementById('f').addEventListener('submit',function(e){
 e.preventDefault();
 var d=new FormData(this);
 var body='Name: '+d.get('name')+'\nContact: '+d.get('contact')+'\nNeed: '+d.get('need')+'\n\n'+d.get('msg');
 window.location.href='mailto:hello@yourdomain.com?subject='+encodeURIComponent('New enquiry from '+d.get('name'))+'&body='+encodeURIComponent(body);
 document.getElementById('st').textContent='Opening your email app to send this to Neeraj.';
});
