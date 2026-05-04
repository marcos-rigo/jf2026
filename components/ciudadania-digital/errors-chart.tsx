'use client';

import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function ErrorsChart() {
  const chartRef = useRef(null);

  const data = {
    labels: ['Cookies / Términos', 'Huella Residual', 'Engagement Tóxico'],
    datasets: [
      {
        data: [30, 45, 25],
        backgroundColor: [
          'rgba(100, 116, 255, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(249, 158, 11, 0.8)',
        ],
        borderColor: ['#6474FF', '#8B5CF6', '#F99E0B'],
        borderWidth: 2,
        hoverBorderColor: '#fff',
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: '75%',
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#94A3B8',
          padding: 20,
          font: { size: 12 },
          boxWidth: 12,
          boxHeight: 12,
        },
      },
      tooltip: {
        backgroundColor: '#1E293B',
        padding: 12,
        titleColor: '#E2E8F0',
        bodyColor: '#94A3B8',
        borderColor: '#334155',
        borderWidth: 1,
        callbacks: {
          label: function (context) {
            return context.label + ': ' + context.parsed + '%';
          },
        },
      },
    },
  };

  return (
    <div className="h-64 w-full flex items-center justify-center">
      <Doughnut ref={chartRef} data={data} options={options} />
    </div>
  );
}
