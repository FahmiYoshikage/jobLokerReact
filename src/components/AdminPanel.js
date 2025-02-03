import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPanel = () => {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    image: ""
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(job),
      });

      if (response.ok) {
        alert("Lowongan berhasil ditambahkan!");
        setJob({ title: "", company: "", location: "", description: "", image: "" });
      } else {
        alert("Gagal menambahkan lowongan.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Tambah Lowongan Pekerjaan</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Judul Pekerjaan</label>
          <input type="text" className="form-control" name="title" value={job.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Nama Perusahaan</label>
          <input type="text" className="form-control" name="company" value={job.company} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Lokasi</label>
          <input type="text" className="form-control" name="location" value={job.location} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Deskripsi</label>
          <textarea className="form-control" name="description" value={job.description} onChange={handleChange} required></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">URL Gambar</label>
          <input type="text" className="form-control" name="image" value={job.image} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Tambah Lowongan</button>
      </form>
    </div>
  );
};

export default AdminPanel;
