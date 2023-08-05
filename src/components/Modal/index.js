import PropTypes from 'prop-types';
import Button from '../Button';
import { Overlay, Container, Footer } from './styles';

export default function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>
          TItulo do modal
        </h1>

        <p>
          Descrição
        </p>

        <Footer>
          <button className="cancel-button" type="button">Cancelar</button>
          <Button danger={danger}>Deletar</Button>
        </Footer>

      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
