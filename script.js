// script.js (on the website)
window.onload = () => {
    // Fetch reports from the server (your ngrok URL will be used here)
    fetch('https://01ae-105-234-160-29.ngrok-free.app/get-reports') // Replace with your ngrok URL
        .then(response => response.json())
        .then(data => {
            const reportsList = document.getElementById('reports-list');
            reportsList.innerHTML = ''; // Clear previous content

            if (data.length > 0) {
                data.forEach(report => {
                    const reportItem = document.createElement('div');
                    reportItem.classList.add('report-item');

                    const reportTitle = document.createElement('h3');
                    reportTitle.textContent = report.title || 'Untitled Report';
                    reportItem.appendChild(reportTitle);

                    const reportDescription = document.createElement('p');
                    reportDescription.textContent = report.description || 'No description provided.';
                    reportItem.appendChild(reportDescription);

                    // Add the report item to the list
                    reportsList.appendChild(reportItem);
                });
            } else {
                reportsList.innerHTML = '<p>No reports available yet.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching reports:', error);
        });
};
