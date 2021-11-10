import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { addBook } from '../datasource';
import { Button, InputGroup, Input, Textarea, Label } from './ui';

const VALID_URL_PATTERN =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const ErrorText = styled.span`
  margin-top: 6px;
  text-align: right;
  color: #ee2e4a;
  font-style: italic;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

const Error = ({ message, isVisible = false }) => (
  <ErrorText aria-live="polite" isVisible={isVisible}>
    {message ?? 'This field is required'}
  </ErrorText>
);

export const AddBookForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await addBook(data);
      router.push('/');
    } catch (e) {
      // TODO: Error UI
      console.log('Failed to add new book', e);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          {...(errors.title && { 'aria-invalid': true })}
          {...register('title', { required: true })}
        />
        <Error isVisible={errors.title} />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="author">Author</Label>
        <Input
          id="author"
          name="author"
          {...(errors.title && { 'aria-invalid': true })}
          {...register('author', { required: true })}
        />
        <Error isVisible={errors.author} />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          {...(errors.title && { 'aria-invalid': true })}
          {...register('description', { required: true })}
        />
        <Error isVisible={errors.description} />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          // defaultValue="https://picsum.photos/125/200"
          placeholder="http://mydomain.com/image"
          {...(errors.title && { 'aria-invalid': true })}
          {...register('imageUrl', {
            required: true,
            pattern: VALID_URL_PATTERN,
          })}
        />
        <Error
          isVisible={errors.description}
          message="This field is required and must be a valid URL format."
        />
      </InputGroup>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Save'}
      </Button>
    </Form>
  );
};
