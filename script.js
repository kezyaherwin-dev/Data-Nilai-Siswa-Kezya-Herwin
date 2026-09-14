let riwayat = [];

function grade(n) {
  if (n >= 90) return 'A';
  if (n >= 80) return 'B';
  if (n >= 70) return 'C';
  if (n >= 60) return 'D';
  return 'E';
}

function status(n) {
  return n >= 60 ? 'LULUS' : 'TIDAK LULUS';
}

function login() {
  let u = document.getElementById('username').value;
  let p = document.getElementById('pass').value;

  if (u != "" && p != "") {
    document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
    document.getElementById('page-dashboard').classList.add('active');
  } else {
    document.getElementById('login-msg').innerText = "Isi username & password!";
  }
}

function logout() {
  document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
  document.getElementById('page-login').classList.add('active');
}

function cekNilaiBaru() {
  let nama = document.getElementById('in-nama').value;
  let mapel = document.getElementById('in-mapel').value;
  let nilai = parseInt(document.getElementById('in-nilai').value);

  if (!nama || isNaN(nilai) || nilai < 0 || nilai > 100) {
    alert("Isi nama & nilai 0-100!");
    return;
  }

  let g = grade(nilai);
  let s = status(nilai);

  let box = document.getElementById('hasil-baru');
  box.style.display = 'block';
  box.innerHTML = `Nama: <b>${nama}</b><br>Nilai: ${nilai} - Grade ${g} - ${s}`;

  riwayat.push({ nama, mapel, nilai, g, s });

  let tbody = "";
  for (let r of riwayat) {
    tbody += `<tr><td>${r.nama}</td><td>${r.mapel}</td><td>${r.nilai}</td><td>${r.g}</td><td>${r.s}</td></tr>`;
  }
  document.getElementById('tbody-nilai').innerHTML = tbody;
  document.getElementById('txt-akhir').innerText = riwayat.length;

  document.getElementById('in-nama').value = "";
  document.getElementById('in-nilai').value = "";
}
