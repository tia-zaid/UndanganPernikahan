export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Setia Agkasa S.Pi',
            child: 'anak perempuan',
            father: 'Ahmadin (Alm)',
            mother: 'Almuaini',
            image: './src/assets/images/cewe.png'
        },
        P: {
            id: 2,
            name: 'Ahmad Ramadhan Zaid Al Khairi S.T',
            child: 'anak laki-laki',
            father: 'Sarbaini',
            mother: 'Lilis Nawati',
            image: './src/assets/images/cowo.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Oktober',
            date: '18',
            day: 'Sabtu',
            hours: {
                start: '09.00',
                finish: '10.30'
            }
        },
        reception: {
            year: '2025',
            month: 'Oktober',
            date: '18',
            day: 'Kamis',
            hours: {
                start: '10.30',
                finish: '12.00'
            }
        },
        address: 'Jalan Tanjung Jati No. 25, Desa Tanjung Jati, Kecamatan Pesisir Selatan, Kabupaten Pesisir Barat, Provinsi Lampung'
    },

    link: {
        calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9',
        map: 'https://maps.app.goo.gl/q1Ask2Jgd4ekiiKBA',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Lorem Ipsum',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Ipsum Lorem',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
