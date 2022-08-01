import React from 'react'
import TemplateLeaderShipPages from '../../../components/temaplate-leadership-pages'
import { Flex } from '../../../styles/style-for-positions/style'
import { Input } from '../../../components/UI/input/Input'

const Government = () => {
   return (
      <TemplateLeaderShipPages
         headerTitle="МАДЫ АЙЫЛ ОКМОТУ"
         socials={['dfs', 'df', 'df']}
      >
         <h1>HELLO</h1>
         <Flex width="100%">
            <Input title="Name" label="Name" error required />
         </Flex>
      </TemplateLeaderShipPages>
   )
}

export default Government
