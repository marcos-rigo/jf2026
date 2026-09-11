'use client';

import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function SecurityChart() {
  const chartRef = useRef(null);

  const data = {
    labels: ['Sistemas Vulnerables\n(Sin 2FA)', 'Sistemas Asegurados\n(2FA)'],
    datasets: [
      {
        label: 'Cantidad de Cuentas',
        data: [65, 35],
        backgroundColor: ['rgba(239, 68, 68, 0.9)', 'rgba(16, 185, 129, 0.9)'],
        borderColor: ['#EF4444', '#10B981'],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
        barThickness: 60,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#0F172A',
        padding: 12,
        titleColor: '#F1F5F9',
        bodyColor: '#CBD5E1',
        borderColor: '#334155',
        borderWidth: 1,
        callbacks: {
          label: function (context) {
            return context.parsed.y + ' cuentas';
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#334155',
          stepSize: 25,
        },
        grid: {
          color: 'rgba(51, 65, 85, 0.12)',
        },
      },
      x: {
        ticks: {
          color: '#334155',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="h-64 w-full">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
}
