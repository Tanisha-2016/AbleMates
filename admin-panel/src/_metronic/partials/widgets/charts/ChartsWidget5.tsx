/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef, useState} from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSS, getCSSVariableValue} from '../../../assets/ts/_utils'
import {useThemeMode} from '../../layout/theme-mode/ThemeModeProvider'
import {motion, AnimatePresence} from 'framer-motion'

type Props = {
  className: string
}

const ChartsWidget5: React.FC<Props> = ({className}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()
  const [activeButton, setActiveButton] = useState('year')

  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const height = parseInt(getCSS(chartRef.current, 'height'))
    const chart = new ApexCharts(chartRef.current, getChartOptions(height))
    if (chart) {
      chart.render()
    }

    return chart
  }

  useEffect(() => {
    const chart = refreshChart()

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
  }, [chartRef, mode])

  return (
    <motion.div
      initial={{opacity: 0, scale: 0.95}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5}}
      className={`card ${className}`}
      style={{
        borderRadius: '20px',
        borderTop: `4px solid #1e3a8a`,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        border: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* begin::Header */}
      <div
        className='card-header border-0 pt-5'
        style={{
          background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
          padding: '1.5rem',
        }}
      >
        <motion.h3
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.2, duration: 0.5}}
          className='card-title align-items-start flex-column'
        >
          <span className='card-label fw-bold fs-3 mb-1' style={{color: '#ffffff'}}>
            Recent Customers
          </span>
          <span className='fw-semibold fs-7' style={{color: '#e0e7ff'}}>
            More than 5000 new customers
          </span>
        </motion.h3>

        {/* begin::Toolbar */}
        <div className='card-toolbar' data-kt-buttons='true'>
          {['Year', 'Month', 'Week'].map((period) => (
            <motion.a
              key={period}
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className={`btn btn-sm px-4 me-1`}
              onClick={() => setActiveButton(period.toLowerCase())}
              style={{
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                backgroundColor: activeButton === period.toLowerCase() ? '#ffffff' : 'transparent',
                color: activeButton === period.toLowerCase() ? '#1e3a8a' : '#ffffff',
                border:
                  activeButton === period.toLowerCase()
                    ? `1px solid #ffffff`
                    : `1px dashed #ffffff`,
                boxShadow:
                  activeButton === period.toLowerCase() ? '0 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
              }}
            >
              {period}
            </motion.a>
          ))}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <AnimatePresence>
        <motion.div
          key={activeButton}
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -20}}
          transition={{duration: 0.3}}
          className='card-body'
          style={{padding: '2rem'}}
        >
          {/* begin::Chart */}
          <div ref={chartRef} id='kt_charts_widget_5_chart' style={{height: '350px'}}></div>
          {/* end::Chart */}
        </motion.div>
      </AnimatePresence>
      {/* end::Body */}
    </motion.div>
  )
}

export {ChartsWidget5}

function getChartOptions(height: number): ApexOptions {
  const labelColor = getCSSVariableValue('--bs-gray-500')
  const borderColor = getCSSVariableValue('--bs-gray-200')

  const baseColor = getCSSVariableValue('--bs-primary')
  const secondaryColor = getCSSVariableValue('--bs-info')

  return {
    series: [
      {
        name: 'Net Profit',
        data: [40, 50, 65, 70, 50, 30, 90, 30, 70, 90],
      },
      {
        name: 'Revenue',
        data: [-30, -40, -55, -60, -40, -20, -30, -90, -30, -70],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      stacked: true,
      height: 350,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '12%',
        borderRadius: 5,
        dataLabels: {
          position: 'top',
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      min: -80,
      max: 80,
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      opacity: 1,
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100],
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return '$' + val + ' thousands'
        },
      },
      theme: 'dark',
      x: {
        show: false,
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  }
}
