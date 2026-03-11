// Chart.js configuration and initialization for Reports page

document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
});

function initializeCharts() {
    // 1. Placement Status Distribution (Pie Chart)
    const placementStatusCtx = document.getElementById('placementStatusChart');
    if (placementStatusCtx) {
        new Chart(placementStatusCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Placed', 'Unplaced', 'Higher Studies'],
                datasets: [{
                    data: [987, 258, 0],
                    backgroundColor: [
                        '#ff6b35',
                        '#ef4444',
                        '#6b7280'
                    ],
                    borderColor: '#1a1f3a',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#aaa',
                            padding: 15,
                            font: { size: 12 }
                        }
                    }
                }
            }
        });
    }

    // 2. Department-wise Placement (Bar Chart)
    const deptCtx = document.getElementById('deptPlacementChart');
    if (deptCtx) {
        new Chart(deptCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['CS', 'IT', 'ECE', 'ME', 'CE', 'Other'],
                datasets: [{
                    label: 'Students Placed',
                    data: [234, 212, 198, 165, 140, 105],
                    backgroundColor: '#ff6b35',
                    borderRadius: 5,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        labels: { color: '#aaa', font: { size: 11 } }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: '#888', font: { size: 11 } },
                        grid: { color: '#2a2f4a' }
                    },
                    y: {
                        ticks: { color: '#888', font: { size: 11 } },
                        grid: { color: 'transparent' }
                    }
                }
            }
        });
    }

    // 3. Monthly Placement Trend (Line Chart)
    const monthlyCtx = document.getElementById('monthlyTrendChart');
    if (monthlyCtx) {
        new Chart(monthlyCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Placements',
                    data: [45, 65, 82, 95, 110, 125, 142, 158, 172, 185, 198, 210],
                    borderColor: '#ff6b35',
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#ff6b35',
                    pointBorderColor: '#1a1f3a',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { color: '#aaa', font: { size: 11 } }
                    }
                },
                scales: {
                    y: {
                        ticks: { color: '#888', font: { size: 11 } },
                        grid: { color: '#2a2f4a' },
                        beginAtZero: true
                    },
                    x: {
                        ticks: { color: '#888', font: { size: 11 } },
                        grid: { color: '#2a2f4a' }
                    }
                }
            }
        });
    }

    // 4. Salary Distribution (Bar Chart)
    const salaryCtx = document.getElementById('salaryDistributionChart');
    if (salaryCtx) {
        new Chart(salaryCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['7-9 LPA', '9-11 LPA', '11-13 LPA', '13-15 LPA', '15-20 LPA', '20+ LPA'],
                datasets: [{
                    label: 'Number of Students',
                    data: [145, 220, 325, 195, 85, 17],
                    backgroundColor: '#ff6b35',
                    borderRadius: 5,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { color: '#aaa', font: { size: 11 } }
                    }
                },
                scales: {
                    y: {
                        ticks: { color: '#888', font: { size: 11 } },
                        grid: { color: '#2a2f4a' },
                        beginAtZero: true
                    },
                    x: {
                        ticks: { color: '#888', font: { size: 11 } },
                        grid: { color: 'transparent' }
                    }
                }
            }
        });
    }
}