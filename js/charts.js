$(document).ready(function () {
  const colorPrimary = '#4A3B45';
  const colorSecondary = '#B7C9D3';
  const colorAccent1 = '#D8C9A3';
  const colorAccent2 = '#9C8AA5';
  const salesTrendCtx = document
    .getElementById('salesTrendChart')
    .getContext('2d');
  new Chart(salesTrendCtx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Revenue ($)',
        data: [1200, 1500, 1100, 1700, 2000, 2400, 1842],
        borderColor: colorPrimary,
        backgroundColor: 'rgba(74, 59, 69, 0.1)',
        tension: 0.35,
        fill: true,
        pointBackgroundColor: colorPrimary,
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const bestSellersCtx = document
    .getElementById('bestSellersChart')
    .getContext('2d');
  new Chart(bestSellersCtx, {
    type: 'doughnut',
    data: {
      labels: [
        'Cappuccino',
        'Latte',
        'Espresso',
        'Iced Coffee',
        'Mocha'
      ],
      datasets: [{
        data: [120, 95, 60, 50, 31],
        backgroundColor: [
          colorPrimary,
          colorSecondary,
          colorAccent1,
          colorAccent2,
          '#7A6B72'
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
  const revenueCategoryCtx = document
    .getElementById('revenueCategoryChart')
    .getContext('2d');
  new Chart(revenueCategoryCtx, {
    type: 'bar',
    data: {
      labels: [
        'Coffee',
        'Pastries',
        'Cold Drinks',
        'Tea'
      ],
      datasets: [{
        label: 'Revenue ($)',
        data: [980, 420, 310, 132],
        backgroundColor: [
          colorPrimary,
          colorSecondary,
          colorAccent1,
          colorAccent2
        ],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
function initMenuCharts() {
  const bestSellersCtx2 = document
    .getElementById('bestSellersChart2')
    .getContext('2d');
  new Chart(bestSellersCtx2, {
    type: 'doughnut',
    data: {
      labels: [
        'Cappuccino',
        'Latte',
        'Espresso',
        'Iced Coffee',
        'Mocha'
      ],
      datasets: [{
        data: [120, 95, 60, 50, 31],
        backgroundColor: [
          '#4A3B45',
          '#B7C9D3',
          '#D8C9A3',
          '#9C8AA5',
          '#7A6B72'
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });

}
function initTrendsCharts() {
  const monthlyCtx = document
    .getElementById('monthlyTrendChart')
    .getContext('2d');
  new Chart(monthlyCtx, {
    type: 'line',
    data: {
      labels: [
        'Week 1',
        'Week 2',
        'Week 3',
        'Week 4'
      ],
      datasets: [{
        label: 'Revenue ($)',
        data: [8200, 9400, 8800, 10500],
        borderColor: '#4A3B45',
        backgroundColor: 'rgba(74, 59, 69, 0.1)',
        tension: 0.35,
        fill: true,
        pointBackgroundColor: '#4A3B45',
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const weekCtx = document
    .getElementById('weekComparisonChart')
    .getContext('2d');
  new Chart(weekCtx, {
    type: 'bar',
    data: {
      labels: [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
      ],
      datasets: [
        {
          label: 'Last Week',
          data: [1000, 1300, 950, 1500, 1800, 2100, 1600],
          backgroundColor: '#B7C9D3',
          borderRadius: 6
        },
        {
          label: 'This Week',
          data: [1200, 1500, 1100, 1700, 2000, 2400, 1842],
          backgroundColor: '#4A3B45',
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}