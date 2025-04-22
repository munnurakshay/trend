const ctx = document.getElementById('barchart').getContext('2d');

const barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Marketing', 'Startups', 'AI', 'E-commerce', 'Finance'],
    datasets: [{
      label: 'Trending Topics',
      data: [12, 19, 8, 15, 10],
      backgroundColor: [
        '#4caf50',
        '#2196f3',
        '#ff9800',
        '#e91e63',
        '#9c27b0'
      ],
      borderRadius: 8,
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Top 5 Trending Categories',
        font: { size: 18 }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5
        }
      }
    }
  }
});
