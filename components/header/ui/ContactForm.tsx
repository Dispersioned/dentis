/* eslint-disable react/jsx-props-no-spreading */
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { SubmitBtn } from '../styles/Header';

type ContactFormProps = {
  open: boolean;
  handleClose: () => void;
};

type FormValues = {
  name: string;
  phone: string;
};

export const ContactForm = ({ open, handleClose }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const [status, setStatus] = useState(0);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(data),
    }).then((res) => {
      setStatus(res.status);
    });
    setTimeout(() => {
      setStatus(0);
      handleClose();
      reset();
    }, 5000);
  };

  useEffect(() => {
    return () => {
      setStatus(0);
    };
  }, []);

  return (
    <Dialog
      open={open}
      onClose={() => {
        handleClose();
        reset();
      }}
    >
      <DialogTitle variant="h4">
        {(() => {
          if (status === 0) return 'Записаться на прием';
          if (status === 200) return 'Отправлено, ожидайте звонка';
          return 'Произошла ошибка';
        })()}
      </DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            margin="dense"
            error={!!errors.name}
            helperText={errors.name && errors.name.message}
            label="Ваше имя"
            fullWidth
            variant="standard"
            {...register('name', {
              required: {
                value: true,
                message: 'Обязательно',
              },
            })}
          />
          <TextField
            margin="dense"
            error={!!errors.phone}
            type="tel"
            helperText={errors.phone && errors.phone.message}
            label="Ваш телефон"
            fullWidth
            variant="standard"
            {...register('phone', {
              required: {
                value: true,
                message: 'Обязательно',
              },
              pattern: {
                value: /^(\+?7|8)\d{10}$/,
                message: 'Введите верный номер телефона',
              },
            })}
          />
          <DialogActions>
            <SubmitBtn type="submit" variant="contained">
              Отправить
            </SubmitBtn>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
