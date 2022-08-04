import React from 'react'
import TemplateLeaderShipPages from '../../../components/temaplate-leadership-pages'
import { Flex } from '../../../styles/style-for-positions/style'
import { Input } from '../../../components/UI/input/Input'

const navigation = [
   {
      id: 1,
      title: 'Beyabrs',
      nav: 'Beybars',
   },
   {
      id: 2,
      title: 'Beyabrs',
      nav: 'Beybars',
   },
   {
      id: 3,
      title: 'Beyabrs',
      nav: 'Beybars',
   },
]
const Government = ({ children }) => {
   return (
      <TemplateLeaderShipPages
         headerTitle="МАДЫ АЙЫЛ ОКМОТУ"
         socials={['dfs', 'df', 'df']}
         navigation={navigation}
         navigationTitle="МАДЫ АЙЫЛ ОКМОТУ"
      >
         <Flex width="100%">{children}</Flex>
      </TemplateLeaderShipPages>
   )
}

export default Government
