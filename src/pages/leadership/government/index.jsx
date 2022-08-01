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
const Government = () => {
   return (
      <TemplateLeaderShipPages
         headerTitle="МАДЫ АЙЫЛ ОКМОТУ"
         socials={['dfs', 'df', 'df']}
         navigation={navigation}
         navigationTitle="МАДЫ АЙЫЛ ОКМОТУ"
      >
         <h1>HELLO</h1>
         <Flex width="100%">sd</Flex>
      </TemplateLeaderShipPages>
   )
}

export default Government
