import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TodoContextType } from "../contexts/TodoContextType";

type AddTodoForm = {
  title: string;
};

const schema = yup
  .object()
  .shape({
    title: yup.string().required("Tarefa inválida"),
  })
  .required();

const AddTodo = () => {
  const { addTodo } = useContext<TodoContextType>(TodoContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddTodoForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AddTodoForm, e: any) => {
    addTodo(data.title);
    e.target.reset();
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Nova tarefa</h4>
      <div className='uk-margin uk-width-1-1'>
        <input
          type='text'
          id='title'
          placeholder='Nova tarefa...'
          className='uk-input'
          {...register("title")}
        />
        <span>
          <small>
            <strong className='uk-text-danger'>{errors.title?.message}</strong>
          </small>
        </span>
      </div>
      <div className='uk-width-1-1'>
        <button type='submit' className='uk-button uk-button-primary'>
          Salvar
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
