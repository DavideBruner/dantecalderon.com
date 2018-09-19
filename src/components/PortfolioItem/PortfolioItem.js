import React from 'react'
import Link from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { AwesomeButton } from 'react-awesome-button'

const ItemWrapper = styled.article`
	box-shadow: 0px 0px 3px #989898;
	border-radius: 4px 4px 0 0;
	cursor: pointer;
`

const ItemContainer = styled.div`
	position: relative;
	text-align: center;
	overflow: hidden;
`

const Title = styled.h3`
	color: #758282;
	font-family: 'Open Sans', serif;
	font-size: 15px;
	text-transform: uppercase;
	width: 100%;
	text-align: center;
	margin: 0;
`

const Content = styled.p`
	color: white;
	font-weight: 600;
`

const Cover = styled(Img)`
	img {

	}
`

const TopBar = styled.div`
	height: 30px;
	background: #e0e3e6;
	width: 100%;
	display: flex;
	align-items: center;
	border-radius: 4px 4px 0 0;

	.TopBarButtons {
		background: white;
		border-radius: 50%;
		height: 9px;
		width: 9px;
		position: relative;
		margin-left: 5px;
		&:after {
			content: '';
			    background: white;
			    border-radius: 50%;
			    position: absolute;
			    left: 260%;
			    top: 0;
			    height: 9px;
			    width: 9px;

		}

		&:before {
			content: '';
			background: white;
			border-radius: 50%;
			height: 9px;
			width: 9px;
			position: absolute;
			left: 130%;
			top: 0;
		}
	}
`

const ItemBody = styled.div`
	position: absolute;
	background: -moz-linear-gradient(270deg, rgba(5,5,5,0.75) 0%, rgba(0,0,0,0.35) 100%); /* ff3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(5,5,5,0.75)), color-stop(100%, rgba(0,0,0,0.35))); /* safari4+,chrome */
background: -webkit-linear-gradient(270deg, rgba(5,5,5,0.75) 0%, rgba(0,0,0,0.35) 100%); /* safari5.1+,chrome10+ */
background: -o-linear-gradient(270deg, rgba(5,5,5,0.75) 0%, rgba(0,0,0,0.35) 100%); /* opera 11.10+ */
background: -ms-linear-gradient(270deg, rgba(5,5,5,0.75) 0%, rgba(0,0,0,0.35) 100%); /* ie10+ */
background: linear-gradient(180deg, rgba(5,5,5,0.75) 0%, rgba(0,0,0,0.35) 100%); /* w3c */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#050505', endColorstr='#000000',GradientType=0 ); /* ie6-9 */
	left: 0;
	top: 0;
	padding: 10px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	opacity: 0;

     justify-content: space-between;
	transform:  scale3d(1.1, 1.1, 1);

`

const ItemLink = styled(Link)`
	text-decoration: none;

	&:hover .PortfolioItem__body {
		opacity: 1;
		transform:  scale3d(1,1,1);

	}

	&:hover .PortfolioItem__tagswrapper{
		transform:  translateY(-10px);
	}
`

const TagsWrapper = styled.div`
`

const Tag = styled(Link)`
	padding: 2px 7px;
	background: #282828;
	border-bottom: 2px solid #130E0E;
	color: #6A6A6A;
	border-radius: 3px;
	text-decoration: none;
	margin: 2px 2px;
	font-size: 14px;
	font-weight: 600;
	display: inline-block;
	box-shadow: 0 0 4px #333;
	text-transform: uppercase;

	&:hover {
		background: #131313;
		color: #BCBCBC;
	}
`

export default props => (
	<ItemLink to={ props.data.path }>
		<ItemWrapper>
		 	<TopBar>
				<div className="TopBarButtons"></div>
				<Title>{ props.data.title }</Title>
			</TopBar>
			<ItemContainer>
				<Cover sizes={ props.data.thumbnail } />
				<ItemBody className="PortfolioItem__body">
					<Content>{ props.data.subtitle }</Content>
					<TagsWrapper className="PortfolioItem__tagswrapper">
						{
							props.data.tags.map((value, index) => {
								return (
									<Tag key={ index }>
										<clr-icon shape="tag" class="icon-item" size="18"/>
										{ " " + value }
									</Tag>
								)
							})
						}
					</TagsWrapper>
					<AwesomeButton
						type="secondary"
						className="ItemView">
						<clr-icon shape="eye" class="icon-item" size="20"/> VER
					</AwesomeButton>
				</ItemBody>
			</ItemContainer>
		</ItemWrapper>
	</ItemLink>
)