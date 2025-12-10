/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget10: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div
        className='card-header border-0 pt-5'
        style={{background: 'linear-gradient(90deg, #1e3a8a, #3b82f6)', color: 'white'}}
      >
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1' style={{color: '#ffffff'}}>
            Expired Products
          </span>
          <span className='text-muted mt-1 fw-semibold fs-7' style={{color: '#ffffff'}}>
            Over 500 members
          </span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <a
            href='#'
            className='btn btn-sm btn-light rounded-pill btn-active-color-primary  border border-dashed border-white'
          >
            <KTIcon iconName='plus' className='fs-3' />
            New Member
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-striped table-hover align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-9-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>Authors</th>
                <th className='min-w-140px'>Company</th>
                <th className='min-w-120px'>Progress</th>
                <th className='min-w-100px text-end'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {[
                {
                  name: 'Ana Simmons',
                  skills: 'HTML, JS, ReactJS',
                  company: 'Intertico',
                  progress: 50,
                  avatar: '/media/avatars/300-14.jpg',
                },
                {
                  name: 'Jessie Clarcson',
                  skills: 'C#, ASP.NET, MS SQL',
                  company: 'Agoda',
                  progress: 70,
                  avatar: '/media/avatars/300-2.jpg',
                },
                {
                  name: 'Lebron Wayde',
                  skills: 'PHP, Laravel, VueJS',
                  company: 'RoadGee',
                  progress: 60,
                  avatar: '/media/avatars/300-5.jpg',
                },
                {
                  name: 'Natali Goodwin',
                  skills: 'Python, PostgreSQL, ReactJS',
                  company: 'The Hill',
                  progress: 50,
                  avatar: '/media/avatars/300-20.jpg',
                },
                {
                  name: 'Kevin Leonard',
                  skills: 'HTML, JS, ReactJS',
                  company: 'RoadGee',
                  progress: 90,
                  avatar: '/media/avatars/300-23.jpg',
                },
              ].map((item, index) => (
                <tr key={index} className='table-row-hover'>
                  <td>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input
                        className='form-check-input widget-9-check'
                        type='checkbox'
                        value='1'
                      />
                    </div>
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl(item.avatar)} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          {item.name}
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          {item.skills}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      {item.company}
                    </a>
                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                      Web, UI/UX Design
                    </span>
                  </td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='d-flex flex-stack mb-2'>
                        <span className='text-muted me-2 fs-7 fw-semibold'>{item.progress}%</span>
                      </div>
                      <div className='progress h-6px w-100'>
                        <div
                          className='progress-bar'
                          role='progressbar'
                          style={{
                            width: `${item.progress}%`,
                            borderRadius: '5px',
                            background: `linear-gradient(90deg, ${
                              item.progress < 60
                                ? '#dc3545'
                                : item.progress < 80
                                ? '#ffc107'
                                : '#28a745'
                            }, ${
                              item.progress < 60
                                ? '#ffcccc'
                                : item.progress < 80
                                ? '#fff3cd'
                                : '#d4edda'
                            })`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <a
                        href='#'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1 rounded-circle border border-dashed'
                      >
                        <KTIcon iconName='switch' className='fs-3' />
                      </a>
                      <a
                        href='#'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1 rounded-circle border border-dashed'
                      >
                        <KTIcon iconName='pencil' className='fs-3' />
                      </a>
                      <a
                        href='#'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm rounded-circle border border-dashed'
                      >
                        <KTIcon iconName='trash' className='fs-3' />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget10}
