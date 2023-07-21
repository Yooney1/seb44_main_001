import { styled } from 'styled-components';
import Logo from '../../../common/assets/logo/MOMO.png';
import NotFound404 from '../../../common/assets/images/NotFound404.png';

export default function NotFound() {
  return (
    <Wrapper>
      <img src={Logo} alt="logo" />
      <img src={NotFound404} alt="NotFound404" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
