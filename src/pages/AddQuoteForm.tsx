import React, { useState } from "react";
import { useCreateQuoteMutation } from "../query/quotes.query";
import "../pages/styles/AddQuoteForm.css";
import { useManageInputs } from "../hooks/useManageInputs";
import queryClient from "../query/queryClient";
import {  QUERY_QUOTE_KEY } from "../constants/query.constant";


function AddQuoteForm() {
  const [tagInput, setTagInput] = useState("");

  const createBookMutation = useCreateQuoteMutation();
  const { values, handleChange, reset, setValues } = useManageInputs({
    text: "",
    bookTitle: "",
    bookAuthor: "",
    tag: "",
    tagList: [] as string[]
  });
  
  const addTag = () => {
    if (tagInput.trim() && !values.tagList.includes(tagInput.trim())) {
      setValues({
        ...values,
        tagList: [...values.tagList, tagInput.trim()]
      });
      setTagInput("");
    }
  }

  const removeTag = (target: string) => {
    setValues({ ...values, tagList: values.tagList.filter((tag: string) => tag !== target) })
  }

  const handleCreateQuote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { text, bookTitle, bookAuthor, tagList } = values;
    await createBookMutation.mutateAsync(
      { text, bookTitle, bookAuthor, tagList, isFavourite: false },
      {
        onSuccess: (res: any) => {
          queryClient.invalidateQueries({ queryKey: [QUERY_QUOTE_KEY] });
          reset();
        }
      }
    );
  };

  return (
    <div>
      <form className="quote-form" onSubmit={handleCreateQuote}>
        <h2>Add a Quote</h2>

        <label>Text</label>
        <input
          type="text"
          name="text"
          value={values.text}
          onChange={handleChange}
          required
        />

        <label>Book Title (optional)</label>
        <input
          type="text"
          name="bookTitle"
          value={values.bookTitle}
          onChange={handleChange}
        />

        <label>Author (optional)</label>
        <input
          type="text"
          name="bookAuthor"
          value={values.bookAuthor}
          onChange={handleChange}
        />

        <label>Tags</label>
        <div className="tags-wrapper">
          {values.tagList.map((tag) => (
            <span className="tag" key={tag}>
              {tag}{" "}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="remove-tag"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <div className="tag-input-wrapper">
          <input
            type="text"
            name="tag"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if(e.key === "Enter") {
                e.preventDefault();
                addTag();
              }
            }}
            placeholder="Type a tag and press Enter"
          />
        </div>

        <button type="submit">Add Quote</button>
      </form>
    </div>
  );
}

export default AddQuoteForm;
