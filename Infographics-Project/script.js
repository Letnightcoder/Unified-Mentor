const years = [
      1880, 1890, 1900, 1910, 1920, 1930, 1940, 1950,
      1960, 1970, 1980, 1990, 2000, 2010, 2020
    ];

    const temps = [
      -0.2, -0.3, -0.1, -0.4, -0.2, 0.0, 0.1, -0.1,
      -0.1, 0.0, 0.2, 0.4, 0.6, 0.8, 1.0
    ];

    const ctx = document.getElementById('climateChart').getContext('2d');

    const climateChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: 'Temperature Anomaly (°C)',
          data: temps,
          borderColor: '#0077b6',
          backgroundColor: 'rgba(0, 119, 182, 0.1)',
          tension: 0.3,
          fill: true,
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            enabled: false,
            external: function(context) {
              const tooltip = document.getElementById('tooltip');
              const tooltipModel = context.tooltip;
              if (tooltipModel.opacity === 0) {
                tooltip.style.display = 'none';
                return;
              }

              if (tooltipModel.body) {
                const year = tooltipModel.dataPoints[0].label;
                const temp = tooltipModel.dataPoints[0].formattedValue;
                tooltip.innerHTML = `<strong>Year:</strong> ${year} <br><strong>Temperature:</strong> ${temp}°C`;
                tooltip.style.display = 'block';
              }
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Year'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Temperature Anomaly (°C)'
            }
          }
        }
      }
    });