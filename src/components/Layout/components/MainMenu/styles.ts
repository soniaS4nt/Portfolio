import styled from 'styled-components'



 export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ItemListStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  padding: 1rem 1.5rem;
  width: 100%;
  a {
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    gap: 1rem;
    a {
    font-size: 1rem;
    font-weight: 300;
  }
  }
`

export const MenuIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);

` 




