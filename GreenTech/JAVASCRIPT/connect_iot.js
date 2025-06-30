
  document.getElementById('connect-button').addEventListener('click', () => {
  document.getElementById('status').textContent = 'Connecting...';

  // Simulate connection and populate mock data
  setTimeout(() => {
    document.getElementById('status').textContent = 'Connected to Device';
    document.getElementById('soil-moisture').textContent = '45%';
    document.getElementById('temperature').textContent = '23°C';
    document.getElementById('humidity').textContent = '68%';
    document.getElementById('ph-level').textContent = '6.5';
    document.getElementById('device-status').textContent = 'Connected';
  }, 2000);
});

  
  
