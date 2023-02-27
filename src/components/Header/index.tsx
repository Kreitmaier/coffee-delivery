import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoCoffeeDelivery}
        alt="Imagem de um copo de café de cor roxa com um desenho de foguete na cor branca ao centro do copo. E ao lado o texto Coffee Delivery"
      />
      <nav>
        <div>
          <p>
            <MapPin size={24} color="#8047f8" weight="fill" />
          </p>
          <p>Porto Alegre, RS</p>
        </div>

        <a href="">
          <ShoppingCart size={24} color="#C47F17" weight="fill" />
        </a>
      </nav>
    </HeaderContainer>
  )
}
