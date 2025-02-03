import React from "react";

const Notification = () => {
    return (
      <section className="upper">
      <div className="upper-container">
        <h1>Lowongan Kerja? </h1>
        <p className="p-black">Daftar sekarang dan rasakan kemudahan dalam mencari pekerjaan dengan bimbingan dari profesional</p>

        <div className="email-box">
          <input type="email" placeholder="Enter your email address" />
          <button>Get Notified</button>
        </div>
        <p>Isi alamat email untuk mendapatkan info terbaru </p>
      </div>
    </section>
    )
}

export default Notification;