let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "Nanaaaa";
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/auzorav/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 5 && n <= 10) {
    return "pagi"
  } else if (n >= 10 && n <= 15) {
    return "siang"
  } else if (n >= 15 && n <= 18) {
    return "sore"
  } else if (n >= 18 && n <= 24) {
    return "malam"
  }
}

function makan() {
  switch (time()) {
    case "pagi":
      return "sarapan"
      break;
    case "siang":
      return "mamam siang"
      break;
    case "sore":
      return "mamam"
      break;
    case "malam":
      return "mamam malem"
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
    title: 'Hawooo nanaaa!',
    html: `Selamat ${time()}, nana udah ${makan()} belum?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Kalo belum, jangan lupa makan yaaa').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Nopan tau kok nana lagi sibuk banget akhir2 ini`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Lagi pusing banget, cape bangetttt`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Semangat terus ya kamu:)').then((result) => {
                  Swal.fire(
                    'Jangan keseringan begadang!',
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'Jaga kesehatan!',
                      '',
                      'error'
                    ).then((result) => {
                      Swal.fire(
                        'Jangan telat makan!',
                        '',
                        'error'
                      ).then((result) => {
                        Swal.fire('Nopan support nana terus kok:)').then((result) => {
                          Swal.fire({
                            title: 'Oh iya aku mau nanya',
                            text: 'Ada sesuatu yang lagi kamu pingin nda?',
                            showDenyButton: true,
                            confirmButtonText: `Ada hehe`,
                            denyButtonText: `Nda ada kok`,
                          }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                              Swal.fire({
                                title: 'Nana mo apa?',
                                input: 'text',
                                inputPlaceholder: 'ex: Sunday, Mcd, Escim Aice, Ultra Karamel, Nescafe, or etc',
                                showCancelButton: false,
                                inputValidator: (value) => {
                                  if (!value) {
                                    return 'Diisi dulu dwong whehe'
                                  }
                                }
                              }).then((result) => {
                                Swal.fire('Otay', 'Nanti aku turutin kemauan kamu yaaa', 'success').then((result) => {
                                  Swal.fire("See ya kebo!^^").then((result) => {
                                    selesai()
                                  });
                                })
                              })
                            } else if (result.isDenied) {
                              Swal.fire('Oh okaiiideh kalo nda ada').then((result) => {
                                Swal.fire("See ya kebo!^^").then((result) => {
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
