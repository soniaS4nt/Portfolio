import styled from 'styled-components'

export const ItemListStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  padding: 2rem 1.5rem;
  width: 100%;
  a {
    font-size: 1rem;
    font-weight: 700;
    transition: transform .2s;
  }

a:hover {
    color: orangered;
    text-decoration: none;
    transform: scale(1.2);
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



