import React, { useState } from 'react'

export const AddToDo = ({ addTodo }) => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const submit = (e) => {
		e.preventDefault();
		if (!title || !desc) {
			alert("Title or Description cannot be blank");
		}
		else {
			addTodo(title, desc);
			setTitle("");
			setDesc("");
		}
	}
	return (
		<div className="container my-4">
			<h3>Add a Todo</h3>
			<form onSubmit={submit}>
				<div className="mb-2">
					<label htmlFor="title" className="form-label">Todo Title</label>
					<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="title" />
				</div>
				<div className="mb-2">
					<label htmlFor="desc" className="form-label">Description</label>
					<input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
				</div>
				<button type="submit" className="btn btn-success btn-sm">Submit</button>
			</form>
		</div>
	)
}	