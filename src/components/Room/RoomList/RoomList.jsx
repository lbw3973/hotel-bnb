import React, { useContext } from 'react'
import RoomItem from '@/components/Room/RoomItem/RoomItem'

import * as S from '@/components/Room/RoomList/RoomList.style'

const RoomList = ({ rooms }) => {
  return (
    <S.Main>
      <S.Container>
        {rooms.map((room) => (
          <RoomItem room={room} key={room.id} />
        ))}
      </S.Container>
    </S.Main>
  )
}

export default RoomList
