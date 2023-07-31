import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>
      <Header>
        <strong>3 Contatos</strong>
        <a href="/"> + Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Moises Sousa</strong>
              <small>instagram</small>
            </div>
            <span>moises.sousa583@gmail.com</span>
            <span>(85) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
