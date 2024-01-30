import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 90vh;
  position: sticky;
  position: -webkit-sticky;
  background-color: ${props => props.bgColor};
  @media (max-width: 768px) {
    flex-direction: row;
    height: fit-content;
    width: 100vw;
  }
`

export const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
    height: 30px;
    width: 100vw;
    overflow-x: scroll;
  }
`
export const TextItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.isActive};
  width: 100%;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 30px;
  }
`
export const ItemText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  width: 150px;
  margin-left: 20px;
`

export const SideBarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const BottomText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  width: 140px;
  font-size: 20px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const IconImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
  cursor: pointer;
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${props => props.color};
  @media (max-width: 768px) {
    font-weight: normal;
    margin-bottom: 0px;
  }
`
