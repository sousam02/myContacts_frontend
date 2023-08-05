import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { Overlay, Container, Footer } from './styles';

export default function Modal({ danger }) {
  return (
    ReactDOM.createPortal(
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
      </Overlay>,
      document.getElementById('modal-root'),
    )

  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
