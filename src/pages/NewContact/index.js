/* eslint-disable react/jsx-no-bind */
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      await ContactsService.createContact(contact);

      toast({ type: 'success', text: 'Contato criado com sucesso' });
    } catch {
      toast({ type: 'danger', text: 'Ocorreu um erro ao criar um usuário' });
    }
  }
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm onSubmit={handleSubmit} buttonLabel="Cadastrar" />
    </>
  );
}
