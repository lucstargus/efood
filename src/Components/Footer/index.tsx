import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import instagram from '../../assets/images/instagram.svg'
import * as S from './styles'

export const Footer = () => (
  <S.Footer>
    <div>
      <S.Logo src={logo} alt="EFood" />
    </div>
    <div>
      <S.SocialMediaList>
        <li>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={twitter} alt="" />
          </a>
        </li>
      </S.SocialMediaList>
    </div>
    <div>
      <S.FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </S.FooterText>
    </div>
  </S.Footer>
)
