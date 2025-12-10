/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget3,
  TablesWidget10,
  ChartsWidget5,
} from '../../../_metronic/partials/widgets'
import {CardsWidgetNew} from '../../../_metronic/partials/widgets/_new/cards/CardWidgetNew'
import {CardsWidgetNew2} from '../../../_metronic/partials/widgets/_new/cards/CardWidgetNew2'

const DashboardPage: FC = () => (
  <>
    <div className='row g-5'>
      {/* Card 1 */}
      <div className='col-12 col-md-6 col-lg-3'>
        <CardsWidgetNew
          className='mb-5'
          description='Total Purchase Due'
          color='#FFF'
          text='#F1416C'
          img={toAbsoluteUrl('/media/avatars/300-2.jpg')}
          amount='69'
        />
      </div>

      {/* Card 2 */}
      <div className='col-12 col-md-6 col-lg-3'>
        <CardsWidgetNew
          className='mb-5'
          description='Professionals'
          color='#FFF'
          text='#009ef7'
          img={toAbsoluteUrl('/media/illustrations/misc/upgrade.svg')}
          amount='357'
        />
      </div>

      {/* Card 3 */}
      <div className='col-12 col-md-6 col-lg-3'>
        <CardsWidgetNew
          className='mb-5'
          description='Pending Tasks'
          color='#FFF'
          text='#FFC700'
          img={toAbsoluteUrl('/media/illustrations/misc/upgrade.svg')}
          amount='120'
        />
      </div>

      {/* Card 4 */}
      <div className='col-12 col-md-6 col-lg-3'>
        <CardsWidgetNew
          className='mb-5'
          description='Completed Projects'
          color='#FFF'
          text='#50CD89'
          img={toAbsoluteUrl('/media/illustrations/misc/upgrade.svg')}
          amount='85'
        />
      </div>
    </div>

    <div className='row g-5'>
      {/* Card 1 */}
      <div className='col-12 col-md-6 col-lg-3'>
        <CardsWidgetNew2
          className='mb-5'
          description='Active Projects'
          color='#F1416C'
          img={toAbsoluteUrl('/media/avatars/300-2.jpg')}
          amount='69'
        />
      </div>

      {/* Card 2 */}
      <div className='col-12 col-md-6 col-lg-3'>
        <CardsWidgetNew2
          className='mb-5'
          description='Professionals'
          color='#009ef7'
          img={toAbsoluteUrl('/media/avatars/300-2.jpg')}
          amount='357'
        />
      </div>

      {/* Card 3 */}
      <div className='col-12 col-md-6 col-lg-3'>
        <CardsWidgetNew2
          className='mb-5'
          description='Pending Tasks'
          color='#FFC700'
          img={toAbsoluteUrl('/media/avatars/300-2.jpg')}
          amount='120'
        />
      </div>

      {/* Card 4 */}
      <div className='col-12 col-md-6 col-lg-3'>
        <CardsWidgetNew2
          className='mb-5'
          description='Completed Projects'
          color='#50CD89'
          img={toAbsoluteUrl('/media/avatars/300-2.jpg')}
          amount='85'
        />
      </div>
    </div>
    <div className='row g-5'>
      <div className='col-12 col-md-9 col-lg-12'>
        <ChartsWidget5 className='card-xl-stretch mb-5 mb-xl-8' />
      </div>
    </div>

    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const DashboardWrapper: FC = () => {
  return (
    <>
        <PageTitle breadcrumbs={[]}>Dashboard</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
