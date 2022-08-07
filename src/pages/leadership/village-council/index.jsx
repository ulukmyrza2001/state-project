import React from 'react'
import TemplateLeaderShipPages from '../../../components/temaplate-leadership-pages'

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

const VillageCouncil = () => {
   const pathsArray = [
      {
         path: '/',
         name: 'Уй',
      },
      {
         path: '/jetekchilik/aiyldyk-kenesh',
         name: 'Айылдык кенеш',
      },
   ]
   return (
      <div>
         <TemplateLeaderShipPages
            headerTitle="МАДЫ АЙЫЛ ОКМОТУНУН АЙЫЛДЫК КЕНЕШИ"
            socials={['dfs', 'sdf', 'sd']}
            navigation={navigation}
            navigationTitle="МАДЫ АЙЫЛ ОКМОТУНУН АЙЫЛДЫК КЕНЕШИ"
            breadCrumbsPaths={pathsArray}
         >
            <p>
               hello world Lorem ipsum dolor sit amet consectetur, adipisicing
               elit. A ducimus consequatur ex tenetur rerum, dicta quibusdam,
               rem, fugiat modi odio consequuntur veritatis fuga ut aspernatur
               vel explicabo possimus hic? Voluptate?{' '}
            </p>
         </TemplateLeaderShipPages>
      </div>
   )
}

export default VillageCouncil
