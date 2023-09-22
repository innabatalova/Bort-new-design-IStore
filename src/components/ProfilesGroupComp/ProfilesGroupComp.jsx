import React from 'react'

const ProfilesGroupComp = ({ classProfilesGroupCompProps, groupProfilesGroupCompProps, statusProfilesGroupCompProps } ) => {
  return(
    <div className='profiles-group__comp'>
      <div className={`profiles-group__comp__item ` + classProfilesGroupCompProps}>{groupProfilesGroupCompProps}</div>
      <div className={`profiles-group__comp__item ` + classProfilesGroupCompProps}>{statusProfilesGroupCompProps}</div>
    </div>
  )
}

export default ProfilesGroupComp