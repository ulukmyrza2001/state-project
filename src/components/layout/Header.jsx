import React from 'react'
import styled from 'styled-components'

const navigations = [
	{
		id: Math.random().toString(),
		title: 'Жетекчилик',
	},
	{
		id: Math.random().toString(),
		title: 'Билим беруу',
	},
	{
		id: Math.random().toString(),
		title: 'Саламаттыкты сактоо',
	},
	{
		id: Math.random().toString(),
		title: 'Жаштар иштери',
	},
	{
		id: Math.random().toString(),
		title: 'Дин иштери',
	},
	{
		id: Math.random().toString(),
		title: 'Айыл чарба',
	},
]

const Header = () => {
	return (
		<HeaderStyled>
			<List>
				{navigations.map((item) => (
					<NavButton>{item.title}</NavButton>
				))}
			</List>
		</HeaderStyled>
	)
}
const HeaderStyled = styled.header`
	width: 100%;
	padding: 1rem;
	background-color: transparent;
`
const List = styled.ul``
const NavButton = styled.li``

export default Header
