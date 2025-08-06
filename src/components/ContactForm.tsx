"use client";

import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import styles from "../styles/components/ContactForm.module.css";

import toast from "react-hot-toast";

type FormData = {
  nome: string;
  sobrenome: string;
  email: string;
  telefone1: string;
  telefone2: string;
  titulo: string;
  mensagem: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading("Enviando...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("E-mail enviado com sucesso!", { id: toastId });
        reset();
      } else {
        toast.error(result.error || "Erro ao enviar o e-mail.", {
          id: toastId,
        });
      }
    } catch {
      toast.error("Erro inesperado no envio.", { id: toastId });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label>
            Nome<span>*</span>
          </label>
          <input {...register("nome", { required: true })} placeholder="Nome" />
          {errors.nome && (
            <span className={styles.error}>Campo obrigatório</span>
          )}
        </div>

        <div className={styles.field}>
          <label>
            Sobrenome<span>*</span>
          </label>
          <input
            {...register("sobrenome", { required: true })}
            placeholder="Sobrenome"
          />
          {errors.sobrenome && (
            <span className={styles.error}>Campo obrigatório</span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label>
          E-mail<span>*</span>
        </label>
        <input
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+\.\S+$/,
          })}
          placeholder="Exemplo@mail.com"
        />
        {errors.email && <span className={styles.error}>E-mail inválido</span>}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label>
            Telefone<span>*</span>
          </label>
          <Controller
            name="telefone1"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <IMaskInput
                mask="(00) 00000-0000"
                {...field}
                inputRef={field.ref}
                onAccept={(value) => field.onChange(value)}
                className={styles.input}
                placeholder="(99) 99999-9999"
              />
            )}
          />

          {errors.telefone1 && (
            <span className={styles.error}>Campo obrigatório</span>
          )}
        </div>

        <div className={styles.field}>
          <label>Telefone 2</label>
          <Controller
            name="telefone2"
            control={control}
            render={({ field }) => (
              <IMaskInput
                mask="(00) 00000-0000"
                {...field}
                inputRef={field.ref}
                onAccept={(value) => field.onChange(value)}
                className={styles.input}
                placeholder="(99) 99999-9999"
              />
            )}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label>
          Título da mensagem<span>*</span>
        </label>
        <input
          {...register("titulo", { required: true })}
          placeholder="Título"
        />
        {errors.titulo && (
          <span className={styles.error}>Campo obrigatório</span>
        )}
      </div>

      <div className={styles.field}>
        <label>
          Descrição da mensagem<span>*</span>
        </label>
        <textarea
          {...register("mensagem", { required: true })}
          placeholder="Descrição"
        />
        {errors.mensagem && (
          <span className={styles.error}>Campo obrigatório</span>
        )}
      </div>

      <button type="submit" className={styles.button}>
        Enviar
      </button>
    </form>
  );
}
