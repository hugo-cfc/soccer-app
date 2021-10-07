import { useState } from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineCloseSquare } from 'react-icons/ai';

import { Container } from './style';

export const ModalWarnings: React.FC = () => {
  const elPortalModalWarnings = document.getElementById('button-root')!;
  const [isClosed, setIsClosed] = useState(false);

  return ReactDOM.createPortal(
    <Container closed={isClosed}>
      <div id="warnings-container">
        <button type="button" onClick={() => setIsClosed(true)}>
          <AiOutlineCloseSquare size={20} />
        </button>
        <h1>Avisos</h1>
        <section>
          <p>
            A fonte de informações (API), por ser uma versão gratuita adquirida
            apenas para fins educativos limita a quantidade de requisições
            geradas a partir deste site, caso o site não carregue as
            informações, aguardar 1 minuto e recarregar novamente. Fotos e
            vídeos da aplicação estará no perfil do LinkedIn do desenvolvedor
            caso não seja possível a visualização da mesma.
          </p>

          <p>
            Logos dos clubes, qualidade das logos, tempo de carregamento e
            veracidade das informações é tudo de inteira responsabilidade dos
            desenvolvedores da API:{' '}
            <a href="https://www.football-data.org">
              https://www.football-data.org
            </a>
            .
          </p>

          <p>
            Visite meu perfil no LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/hugo-cesar/">
              linkedin.com/in/hugo-cesar
            </a>
            .
          </p>

          <p>Obrigado! =)</p>
        </section>
      </div>
    </Container>,
    elPortalModalWarnings,
  );
};

export default ModalWarnings;
