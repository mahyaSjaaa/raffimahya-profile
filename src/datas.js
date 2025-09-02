export const datas = [
    {
      id: 1,
      judul: "SmartLock Berbasis Face Recognition dan Aplikasi Android dengan User Authorization",
      github: "ok",
      jenis: "coding",
      img:"",
      fitur: [
        {fitur: "User Authorization Mobile Apps"}, {fitur: 'Fitur Message pada SmartLock'}, {fitur: 'Face Recognition'}, {fitur: 'Capture wajah anomali'}, {fitur: 'Cloud Storage'}, {fitur: 'Multi-user'}
      ],
      teknologi: [
        {teknologi: 'Kotlin'},
        {teknologi: 'Firebase'},
        {teknologi: 'Python'},
        {teknologi: 'TensorFlow'},
        {teknologi: 'ESP32-CAM'},
        {teknologi: 'Sensor Infrared'},
        {teknologi: 'LCD OLED'},
        {teknologi: 'Electrical Lock'},
      ],
      spesifikasi_sistem: "Front-end menggunakan kotlin dan firebase digunakan sebagai backend-as-a-service. Untuk melatih model deep learning menggunakan bahasa pemrograman python dan menggunakan model SNN & One-shot encoding dengan TensorFlow",
      caraKerja: "Terdapat sensor infrared pada perangkat SmartLock yang digunakan untuk mengaktifkan face recognition. Kerika perangkat mendapatkan trigger dari sensor infrared, ESP32-CAM akan memulai capture objek di depannya, gambar yang telah dicapture akan dikirimkan ke server untuk proses face recognition. Apabila wajah dikenali maka kunci akan terbuka dan menampilkan pesan selamat datang di lcd oled. Apabila tidak dikenali maka kunci tidak terbuka dan akan menampilkan keterangan wajah tidak dikenali di lcd oled. Object yang ter capture akan disimpan di cloude storage agar bisa diakses melalui aplikasi android.",
      file:"KELOMPOK_2_SMARTLOCK.pdf"
    },
    {
      id: 2,
      judul: "Signature Verification System Website",
      github: "ok",
      jenis: "coding",
      img:"",
      fitur: [
        {fitur: "Multi-user"}, {fitur: 'Dapat digunakan untuk banyak tanda tangan'}, {fitur: 'Memverifikasi keaslian suatu tanda tangan'}
      ],
      teknologi: [
        {teknologi: 'Python'},
        {teknologi: 'Firebase'},
        {teknologi: 'TensorFlow'},
        {teknologi: 'Flask'},
        {teknologi: 'JavaScript'},
        {teknologi: 'HTML 5'},
        {teknologi: 'CSS'},
        {teknologi: 'Siamese neural network'},
      ],
      spesifikasi_sistem: "Front-end menggunakan HTML dan JavaScript. Firebase digunakan sebagai backend-as-a-service. Untuk melatih model deep learning, menggunakan bahasa pemrograman python dan menggunakan model SNN dengan TensorFlow",
      caraKerja: "Pengguna melakukan pendaftaran dan login pada website. Pengguna mendaftarkan tanda tangan asli yang akan digunakan untuk mengecek keaslian tanda tangan.",
      file:"Laporan_kelompok_4_signature_ver.pdf"
    },
    {
      id: 3,
      judul: "Desain Arsitektur Mobile Web dengan NEXT JS, REST API, dan Load Balancing",
      github: "ok",
      jenis: "coding",
      img:"",
      fitur: [
        {fitur: "Registrasi Pengguna"}, {fitur: 'Daftar Tiket'}, {fitur: 'Pemesanan Tiket'}
      ],
      teknologi: [
        {teknologi: 'Next.js'},
        {teknologi: 'Express.js'},
        {teknologi: 'Nginx'},
        {teknologi: 'mongoDb'},
        {teknologi: 'JavaScript'},
        {teknologi: 'vritual box'},
      ],
      spesifikasi_sistem: "Front-End menggunakan Next JS yang berfungsi sebagai antar muka pengguna. Dua instance Express.js berjalan di dua virtual device, masing masing menyajkan data dari mongoDb dan merespon REST API. MongoDb berjalan di device terpish untuk mensimulasikan sistem terdistribusi. Nginx bertugas sebagai reverse proxy dan load balancer, juga mengatur lalu listas request ke dua backend berdasarkan algoritma round-robin",
      caraKerja: "Pengguna mengakses website melalui IP front-end/Nginx, Nginx menerima request HTTP dan meneruskannya. Jika request berasal dari front-end maka akan diteruskan ke Next.js server di port 3002. Apabila menuju back-end, maka Nginx akan meneruskannya ke salah satu server Express yang berjalan di dua device berbeda. Misalnya, 192.168.100.11:3000 dan 192.168.100.12:3000 menggunakan mekanisme load balancing. Sistem mendistribusikan beban trafik ke server backend agar tidak overliad",
      file:"KELOMPOK_6_PROJECT_FINALPPT.pdf"
    },
    {
      id: 4,
      judul: "Implementasi Message Forwarder System",
      github: "ok",
      jenis: "networking",
      img:"",
      fitur: [
        {fitur: "Registrasi Pengguna"}, {fitur: 'Daftar Tiket'}, {fitur: 'Pemesanan Tiket'}
      ],
      teknologi: [
        {teknologi: 'Next.js'},
        {teknologi: 'Express.js'},
        {teknologi: 'Nginx'},
        {teknologi: 'mongoDb'},
        {teknologi: 'JavaScript'},
        {teknologi: 'vritual box'},
      ],
      spesifikasi_sistem: "",
      caraKerja: ""
    },
    {
      id: 5,
      judul: "Topologi Jaringan Kampus dan Rancangan IP Subnetting",
      github: "ok",
      jenis: "networking",
      img:"",
      fitur: [
        {fitur: "User Authorization Mobile Apps"}, {fitur: 'Fitur Message pada SmartLock'}, {fitur: 'Face Recognition'}, {fitur: 'Capture wajah anomali'}, {fitur: 'Cloud Storage'}, {fitur: 'Multi-user'}
      ],
      teknologi: [
        {teknologi: 'Kotlin'},
        {teknologi: 'Firebase'},
        {teknologi: 'Python'},
        {teknologi: 'TensorFlow'},
        {teknologi: 'ESP32-CAM'},
        {teknologi: 'Sensor Infrared'},
        {teknologi: 'LCD OLED'},
        {teknologi: 'Electrical Lock'},
      ],
      spesifikasi_sistem: "Front-end menggunakan kotlin dan firebase digunakan sebagai backend-as-a-service. Untuk melatih model deep learning menggunakan bahasa pemrograman python dan menggunakan library TensorFlow",
      caraKerja: "Terdapat sensor infrared pada perangkat SmartLock"
    },
    {
      id: 6,
      judul: "Simulasi Keamanan Jaringan dan Kriptografi",
      github: "ok",
      jenis: "networking",
      img:"",
      fitur: [
        {fitur: "Registrasi Pengguna"}, {fitur: 'Daftar Tiket'}, {fitur: 'Pemesanan Tiket'}
      ],
      teknologi: [
        {teknologi: 'Next.js'},
        {teknologi: 'Express.js'},
        {teknologi: 'Nginx'},
        {teknologi: 'mongoDb'},
        {teknologi: 'JavaScript'},
        {teknologi: 'vritual box'},
      ],
      spesifikasi_sistem: "Front-End menggunakan Next JS yang berfungsi sebagai antar muka pengguna. Dua instance Express.js berjalan di dua virtual device, masing masing menyajkan data dari mongoDb dan merespon REST API. MongoDb berjalan di device terpish untuk mensimulasikan sistem terdistribusi. Nginx bertugas sebagai reverse proxy dan load balancer, juga mengatur lalu listas request ke dua backend berdasarkan algoritma round-robin",
      caraKerja: "Pengguna mengakses website melalui IP front-end/Nginx, Nginx menerima request HTTP dan meneruskannya. Jika request berasal dari front-end maka akan diteruskan ke Next.js server di port 3002. Apabila menuju back-end, maka Nginx akan meneruskannya ke salah satu server Express yang berjalan di dua device berbeda. Misalnya, 192.168.100.11:3000 dan 192.168.100.12:3000 menggunakan mekanisme load balancing. Sistem mendistribusikan beban trafik ke server backend agar tidak overliad"
    },
  ]

export const skills = [
    {
        id:1,
        jenis:'coding',
        bahasa: [{
            bahasa: 'HTML 5',
            persen: '288',
            persen1: '95%'
        }, {
            bahasa: 'JavaScript',
            persen: '272',
            persen1: '90%'
        }, {
            bahasa: 'CSS',
            persen: '240',
            persen1: '85%'
        }, {bahasa: 'Tailwind',
            persen: '240',
            persen1: '85%'
        }, {bahasa: 'NextJS',
            persen: '240',
            persen1: '85%'
        }, {bahasa: 'ReactJS',
            persen: '240',
            persen1: '85%'
        }, {bahasa: 'PHP',
            persen: '224',
            persen1: '80%'
        }, {bahasa: 'Python',
            persen: '224',
            persen1: '80%'
        }, {bahasa: 'ExpressJS',
            persen: '240',
            persen1: '85%'
        }, {bahasa: 'NodeJS',
            persen: '240',
            persen1: '85%'
        }, {bahasa: 'Machine Learning',
            persen: '230',
            persen1: '75%'
        }, {bahasa: 'Deep Learning',
            persen: '210',
            persen1: '70%'
        }, {bahasa: 'IOT',
            persen: '240',
            persen1: '85%'
        }]
    },
    {
        id:2,
        jenis:'networking',
        bahasa: [{
            bahasa: 'IP Subnettig',
            persen: '272',
            persen1: '90%'
        }, {
            bahasa: 'CIDR',
            persen: '240',
            persen1: '85%'
        }, {
            bahasa: 'VLSM',
            persen: '224',
            persen1: '80%'
        }, {bahasa: 'Static Routing',
            persen: '224',
            persen1: '80%'
        }, {bahasa: 'RIP',
            persen: '224',
            persen1: '80%'
        }, {bahasa: 'OSPF',
            persen: '224',
            persen1: '80%'
        }, {bahasa: 'EIGPR',
            persen: '230',
            persen1: '75%'
        }, {bahasa: 'VLAN',
            persen: '230',
            persen1: '75%'
        }, {bahasa: 'LAN',
            persen: '272',
            persen1: '90%'
        }, {bahasa: 'DHCP',
            persen: '240',
            persen1: '85%'
        }, {bahasa: 'Cloud Computing',
            persen: '230',
            persen1: '75%'
        }]
    }
]