import React from 'react';
import { useForm } from 'react-hook-form';
import { addBook } from '../datasource';

const VALID_URL_PATTERN =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export const AddBookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => await addBook(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register('title', { required: true })} />
      {errors.title && <span>This field is required</span>}

      <input {...register('author', { required: true })} />
      {errors.author && <span>This field is required</span>}

      <input {...register('description', { required: true })} />
      {errors.description && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input
        defaultValue="https://picsum.photos/125/200"
        {...register('imageUrl', {
          required: true,
          pattern: VALID_URL_PATTERN,
        })}
      />
      {/* errors will return when field validation fails  */}
      {errors.imageUrl && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
