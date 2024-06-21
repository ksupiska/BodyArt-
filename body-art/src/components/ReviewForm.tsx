import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { format } from "date-fns";
import { useDropzone } from "react-dropzone";

import "../css/review-form.css";

interface IFormInput {
  name: string;
  age: number;
  email: string;
  comment: string;
  photo?: string | null; // Используем string вместо File
}

const ReviewForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
  const [comments, setComments] = useState<(IFormInput & { date: string })[]>([]);
  const [photoBase64, setPhotoBase64] = useState<string | null>(null); // Хранение base64 строки вместо File

  // Загрузка отзывов из localStorage при загрузке компонента
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    setComments(savedReviews);
  }, []);

  // Функция для сохранения отзыва в localStorage
  const saveReview = (reviewData: IFormInput) => {
    const date = format(new Date(), "dd/MM/yyyy HH:mm");
    const newComment = { ...reviewData, photo: photoBase64, date };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem("reviews", JSON.stringify(updatedComments));
    setPhotoBase64(null); // Очистить фото после отправки
    reset(); // Очистить поля формы
  };

  const handleDelete = (index: number) => {
    const filteredComments = comments.filter((_, i) => i !== index);
    setComments(filteredComments);
    localStorage.setItem("reviews", JSON.stringify(filteredComments));
  };

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoBase64(reader.result as string);
      };
      reader.readAsDataURL(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="container">
      <form onSubmit={handleSubmit(saveReview)}>
        <div className="form-group">
          <label>Имя</label>
          <input {...register("name", { required: "Это поле обязательно" })} />
          {errors.name && <span className="error-message">{errors.name.message}</span>}
        </div>

        <div className="form-group">
          <label>Возраст</label>
          <input type="number" {...register("age", { required: "Это поле обязательно", min: 1 })} />
          {errors.age && <span className="error-message">{errors.age.message}</span>}
        </div>

        <div className="form-group">
          <label>Электронная почта</label>
          <input
            {...register("email", {
              required: "Это поле обязательно",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Неверный формат электронной почты",
              },
            })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label>Отзыв</label>
          <textarea {...register("comment", { required: "Это поле обязательно" })} />
          {errors.comment && <span className="error-message">{errors.comment.message}</span>}
        </div>

        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          {photoBase64 ? (
            <img src={photoBase64} alt="Загруженное фото" className="comment-image" />
          ) : (
            <p>Перетащите сюда фото или нажмите, чтобы выбрать</p>
          )}
        </div>

        <button type="submit">Отправить отзыв</button>
      </form>

      <div className="comments-section">
        <h2>Отзывы</h2>
        {comments.map((comment, index) => (
          <div key={index} className="comment-box">
            <p>Имя: {comment.name}</p>
            <p>Возраст: {comment.age}</p>
            <p>Электронная почта: {comment.email}</p>
            <p>Комментарий: {comment.comment}</p>
            <p>Дата: {comment.date}</p>
            {comment.photo && <img src={comment.photo} alt="Комментарий фото" className="comment-image" />}
            <button onClick={() => handleDelete(index)} className="delete-button">
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewForm;
