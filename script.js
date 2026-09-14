let riwayat = [];

function grade(n) {

    if (n >= 90) {
        return 'A';

    } else if (n >= 80) {
        return 'B';

    } else if (n >= 70) {
        return 'C';

    } else if (n >= 60) {
        return 'D';

    } else {
        return 'E';
    }
}


function status(n) {
    return n >= 60? 'LULUS': 'TIDAK LULUS';
}


function login() {

    let u = document.getElementById('username').value;
    let p = document.getElementById('pass').value;

    if (u != "" && p != "") {

        document.querySelectorAll('.page').forEach(x =>x.classList.remove('active'));
        document.getElementById('page-dashboard').classList.add('active');

     } else {

        document.getElementById('login-msg').innerText = "Isi username & password!";
    }

}

function logout() {

    document.querySelectorAll('.page').forEach(x => x.classList.remove('active') );
    document.getElementById('page-login').classList.add('active');
}

function cekNilaiBaru() {

    let nama = document.getElementById('in-nama').value;
    let mapel = document.getElementById('in-mapel').value;
    let nilai = parseInt(document.getElementById('in-nilai').value);

    if (
        !nama ||
        !mapel ||
        isNaN(nilai) ||
        nilai < 0 ||
        nilai > 100
    ) {

        alert("Isi nama, mata pelajaran & nilai 0-100!");
    return;
    }

    let g = grade(nilai);
    let s = status(nilai);

    let box = document.getElementById('hasil-baru');

    box.style.display = 'block';

    box.innerHTML = `

        <div>
            Nama:<b>${nama}</b>
        </div>

        <div>
            Mata Pelajaran:<b>${mapel}</b>
        </div>

        <div>
            Nilai:<b>${nilai}</b>
        </div>

        <div>
            Grade:<b>${g}</b>
        </div>

        <div>
            Status: <b>${s}</b>
        </div>

    `;

    riwayat.push({
        nama: nama,
        mapel: mapel,
        nilai: nilai,
        g: g,
        s: s
    });

    let tbody = "";

     for (let r of riwayat) {

        tbody += `
            <tr>

                <td>${r.nama}</td>
                <td>${r.mapel}</td>
                <td>${r.nilai}</td>
                <td>${r.g}</td>
                <td>${r.s}</td>
            
            </tr>

        `;
    }

    document.getElementById('tbody-nilai').innerHTML = tbody;
    document.getElementById('txt-akhir').innerText = riwayat.length;
    document.getElementById('in-nama').value = "";
    document.getElementById('in-nilai').value = "";

}
