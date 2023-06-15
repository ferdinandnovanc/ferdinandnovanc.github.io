let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "Babyciaaa";
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/aliciiachls_/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 1 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
      return "sarapan"
      break;
    case "Siang":
      return "makan siang"
      break;
    case "Malam":
      return "makan malam"
      break;
    case "Sore":
      return "makan"
      break;
    default:
      break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'Hawo Babyciaaaa!',
    html: `Selamat ${time()}, Ciaaa udah ${makan()}?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Kalo belum jangan lupa makan yaaa sayaang').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Aku tau kok ciaaa lagi sibuk banget`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Lagi pusing banget, cape banget`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Semangat terus ya kesayangan').then((result) => {
                  Swal.fire(
                    'Nda bole keseringan begadang!',
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'Jaga kesehatan!',
                      '',
                      'error'
                    ).then((result) => {
                      Swal.fire(
                        'Nda bole telat makan!',
                        '',
                        'error'
                      ).then((result) => {
                        Swal.fire('Aku support kamu terus kok cantikkuuuu').then((result) => {
                          Swal.fire({
                            title: 'Oh iya aku mau nanyaaa',
                            text: 'Ada sesuatu yang lagi kamu pingin nda?',
                            showDenyButton: true,
                            confirmButtonText: `Ada hehe`,
                            denyButtonText: `Nda ada kok`,
                          }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                              Swal.fire({
                                title: 'Mo apa ciaaa?',
                                input: 'text',
                                inputPlaceholder: 'ex: seblak, boba, or etc',
                                showCancelButton: false,
                                inputValidator: (value) => {
                                  if (!value) {
                                    return 'Isi dulu dong ay hiwhiw'
                                  }
                                }
                              }).then((result) => {
                                Swal.fire('Otay', 'Nanti aku turutin kemauan ciaaa yaaa', 'success').then((result) => {
                                  Swal.fire("See ya ciaaa kesayangan!^^").then((result) => {
                                    selesai()
                                  });
                                })
                              })
                            } else if (result.isDenied) {
                              Swal.fire('Oh okedeh kalo nda ada').then((result) => {
                                Swal.fire("See ya ciaaa kesayangan!^^").then((result) => {
                                  selesai()
                                });
                              })
                            }
                          })
                        })
                      })
                    })
                  })
                })
              }
            })
          }
        })
      })
    }
  })
});
