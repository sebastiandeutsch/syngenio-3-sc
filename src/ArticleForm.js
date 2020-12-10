import { useForm } from 'react-hook-form';

export default function ArticleForm(props) {
  const { article, onAddArticle } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: article
  });

  const handleFormSubmit = (data) => {
    onAddArticle({
      ...data,
      isBought: false
    });
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" ref={register({ required: true })} defaultValue={""} type="text" />
      {errors.name && <span>Darf nicht leer sein</span>}
      <label htmlFor="amount">Amount:</label>
      <input id="amount" name="amount" ref={register({ required: true })} defaultValue={1} type="number" />
      {errors.amount && <span>Darf nicht leer sein</span>}
      <button>hinzufügen</button>
    </form>
  );
}
