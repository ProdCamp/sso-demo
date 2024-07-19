document.getElementById('public-roadmap').addEventListener('click', function() {
    fetch('http://localhost:3000/api/token')
        .then(response => response.json())
        .then(data => {
            const token = data.token;
            const roadmapUrl = `https://sso-demo.prodcamp.com/changelog?token=${token}`;
            window.location.href = roadmapUrl;
        })
        .catch(error => {
            console.error('Error fetching token:', error);
        });
});

console.log('Your App is ready!');
