import React from 'react'
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub'
import { SidebarMenuItem } from './SidebarMenuItem'

import {
  RiDashboardLine,
  RiUser3Line,
  RiUserAddLine,
  RiFoldersLine,
  RiSettings3Line,
  RiShieldCheckLine,
  RiTeamLine,
  RiFileList2Line,
  RiAdminLine,
  RiChat1Line,
  RiFlag2Line,
  RiShieldFlashLine,
  RiUserUnfollowLine,
  RiFileHistoryLine,
  RiBarChart2Line,
  RiFileTextLine,
  RiArrowGoBackLine,
  RiFileEditLine,
  RiTicket2Line
} from 'react-icons/ri'

const ICON_SIZE = 22   // ⭐ Yaha se control kar sakti ho

const SidebarMenuMain = () => {
  return (
    <>
      {/* MAIN */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Main</span>
        </div>
      </div>

      <SidebarMenuItem
        to='/dashboard'
        icon={<RiDashboardLine size={ICON_SIZE} />}
        title='Dashboard'
      />

      {/* USER MANAGEMENT */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>User Management</span>
        </div>
      </div>

      <SidebarMenuItem to='/user-management/users' icon={<RiUser3Line size={ICON_SIZE} />} title='Users' />
      <SidebarMenuItem to='/create-user' icon={<RiUserAddLine size={ICON_SIZE} />} title='Create User' />
      <SidebarMenuItem to='/category-management/categories' icon={<RiFoldersLine size={ICON_SIZE} />} title='Categories' />

      {/* ADMINISTRATION */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Administration</span>
        </div>
      </div>

      <SidebarMenuItemWithSub
        to='#'
        title='Account'
        icon={<RiSettings3Line size={ICON_SIZE} />}
      >
        <SidebarMenuItem to='/auth/profile' title='Profile' hasBullet={true} />
        <SidebarMenuItem to='/auth/change-password' title='Change Password' hasBullet={true} />
        <SidebarMenuItem to='/auth/login' title='Logout' hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItem to='/admin/roles' icon={<RiShieldCheckLine size={ICON_SIZE} />} title='Roles & Permissions' />
      <SidebarMenuItem to='/admin/user-roles' icon={<RiTeamLine size={ICON_SIZE} />} title='User Role Mapping' />
      <SidebarMenuItem to='/admin/logs' icon={<RiFileList2Line size={ICON_SIZE} />} title='Access Logs' />
      <SidebarMenuItem to='/admin/admin-users' icon={<RiAdminLine size={ICON_SIZE} />} title='Admin Users' />

      {/* CHAT MANAGEMENT */}
      <div className='menu-item '>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Chat Management</span>
        </div>
      </div>

      <SidebarMenuItem to='/chat/all-chats' icon={<RiChat1Line size={ICON_SIZE} />} title='All Chats' />
      <SidebarMenuItem to='/chat/reported' icon={<RiFlag2Line size={ICON_SIZE} />} title='Reported Chats' />
      <SidebarMenuItem to='/chat/flagged' icon={<RiShieldFlashLine size={ICON_SIZE} />} title='AI Flagged Messages' />
      <SidebarMenuItem to='/chat/blocked-users' icon={<RiUserUnfollowLine size={ICON_SIZE} />} title='Blocked Users' />
      <SidebarMenuItem to='/chat/message-logs' icon={<RiFileHistoryLine size={ICON_SIZE} />} title='Message Logs' />

          {/* JOB BOARD */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Job Board</span>
        </div>
      </div>

      <SidebarMenuItem 
        to='/jobs/all'
        icon={<RiFileTextLine size={ICON_SIZE} />}
        title='All Job Posts'
      />
      <SidebarMenuItem 
        to='/jobs/create'
        icon={<RiFileEditLine size={ICON_SIZE} />}
        title='Create Job'
      />
      <SidebarMenuItem 
        to='/jobs/applications'
        icon={<RiFileHistoryLine size={ICON_SIZE} />}
        title='Applications'
      />
      <SidebarMenuItem 
        to='/jobs/support-worker-availability'
        icon={<RiTeamLine size={ICON_SIZE} />}
        title='Support Worker Availability'
      />
      <SidebarMenuItem 
        to='/jobs/categories'
        icon={<RiFoldersLine size={ICON_SIZE} />}
        title='Job Categories'
      />

      {/* EVENTS */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Events</span>
        </div>
      </div>

      <SidebarMenuItem 
        to='/events/all'
        icon={<RiFileList2Line size={ICON_SIZE} />}
        title='All Events'
      />
      <SidebarMenuItem 
        to='/events/create'
        icon={<RiTicket2Line size={ICON_SIZE} />}
        title='Create Event'
      />
      <SidebarMenuItem 
        to='/events/categories'
        icon={<RiFoldersLine size={ICON_SIZE} />}
        title='Event Categories'
      />
      <SidebarMenuItem 
        to='/events/registrations'
        icon={<RiUser3Line size={ICON_SIZE} />}
        title='Event Registrations'
      />
      <SidebarMenuItem 
        to='/events/reports'
        icon={<RiFlag2Line size={ICON_SIZE} />}
        title='Event Reports / Violations'
      />

      {/* GAMES */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Games</span>
        </div>
      </div>

      <SidebarMenuItem 
        to='/games/posts'
        icon={<RiChat1Line size={ICON_SIZE} />}
        title='Game Connect Posts'
      />
      <SidebarMenuItem 
        to='/games/create'
        icon={<RiFileEditLine size={ICON_SIZE} />}
        title='Create Game Post'
      />
      <SidebarMenuItem 
        to='/games/bingo'
        icon={<RiFileList2Line size={ICON_SIZE} />}
        title='Bingo Management'
      />
      <SidebarMenuItem 
        to='/games/bingo-sessions'
        icon={<RiBarChart2Line size={ICON_SIZE} />}
        title='Bingo Sessions'
      />
      <SidebarMenuItem 
        to='/games/bingo-winners'
        icon={<RiShieldCheckLine size={ICON_SIZE} />}
        title='Bingo Winners'
      />
      <SidebarMenuItem 
        to='/games/bingo-payments'
        icon={<RiFileHistoryLine size={ICON_SIZE} />}
        title='Bingo Payments'
      />

      {/* REWARDS & GAMIFICATION */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Rewards & Gamification</span>
        </div>
      </div>

      <SidebarMenuItem 
        to='/rewards/rules'
        icon={<RiShieldFlashLine size={ICON_SIZE} />}
        title='Reward Rules'
      />
      <SidebarMenuItem 
        to='/rewards/transactions'
        icon={<RiFileTextLine size={ICON_SIZE} />}
        title='Reward Transactions'
      />
      <SidebarMenuItem 
        to='/rewards/points'
        icon={<RiBarChart2Line size={ICON_SIZE} />}
        title='User Points History'
      />

      {/* BUSINESS DIRECTORY */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Business Directory</span>
        </div>
      </div>

      <SidebarMenuItem 
        to='/directory/all'
        icon={<RiFoldersLine size={ICON_SIZE} />}
        title='All Directory Listings'
      />
      <SidebarMenuItem 
        to='/directory/create'
        icon={<RiFileEditLine size={ICON_SIZE} />}
        title='Create Listing'
      />
      <SidebarMenuItem 
        to='/directory/categories'
        icon={<RiFoldersLine size={ICON_SIZE} />}
        title='Directory Categories'
      />
      <SidebarMenuItem 
        to='/directory/reported'
        icon={<RiFlag2Line size={ICON_SIZE} />}
        title='Reported Listings'
      />


     
    </>
  )
}

export { SidebarMenuMain }
