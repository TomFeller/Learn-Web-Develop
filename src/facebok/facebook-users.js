const facebookUsers = [

    {
        name: 'Tom',
        last_name: 'Feller',
        email: 'tomfeller@gmail.com',
        password: '12345',
        data_of_birth: '14.10.1984',
        data_of_register: '24.2.2009',
        thumbnail: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/p240x240/58381601_10158561438183782_5618823323552055296_n.jpg?_nc_cat=101&_nc_oc=AQnPGLzehnArgDCYJvlshvTWjHIzR_cZTa8S7Gf_MkEA-934eGq1h9pQwLuMgmd9dwM&_nc_ht=scontent.fhfa2-2.fna&oh=de9d816fc9615d48c33d02f8235c8f62&oe=5DB9DBE9',
        cover: 'https://ipiccy.com/res/LP/data/images/facebook-cover-maker-b0i.jpg',
        friends: ['Moshe Feller', 'Tal Feller', 'Chen Finkelman', 'Nurit Malki'],
        friends_requests: [
            {
                user_name: 'David shay',
                mutual_friend: 14
            },
            {
                user_name: 'Moris Nachum',
                mutual_friend: 33
            },
            {
                user_name: 'Yuri Badelbayev',
                mutual_friend: 2
            },
        ],
        messages: [
            {
                name: 'Chen Finkelman',
                message: 'Hello how are you?',
                thumbnail: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/p80x80/64731217_10156514976157857_7471493428442824704_n.jpg?_nc_cat=101&_nc_oc=AQnNl23Fz2uw3fJQLwmb3dlURnr-ib81RUa1NLswOMBM9tRbkWS7e3cE4-PZujJFgIo&_nc_ht=scontent.fhfa2-2.fna&oh=158a1e3f52bd9e211f8e105d8f026a5b&oe=5DB017B6'
            },
            {
                name: 'Arie Levin',
                message: 'Happy Birthday!',
                thumbnail: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/p80x80/13015466_113005945769725_8622548318211797619_n.jpg?_nc_cat=107&_nc_oc=AQmgOPPKYZksJpZBFRXLZq_5MA4NJYD0e54rZMsW0480G-L7KhlV1zgRG4O2guVCNg8&_nc_ht=scontent.fhfa2-2.fna&oh=f53bfc6ac88f26724900e3e93ea070d6&oe=5DA1F1BF'
            },
            {
                name: 'Michal sharon',
                message: 'Please call me back asap',
                thumbnail: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/c0.5.80.80a/p80x80/167761_185129084847284_1210604_n.jpg?_nc_cat=105&_nc_oc=AQkqGenlT_TlKYDbhDrCsvKfyDwQtx-00RH1tCmUsE0zPHZFbVbNjV6ZnzpEcTKpq7c&_nc_ht=scontent.fhfa2-2.fna&oh=d55fae3334020e7e97c3326d174361ca&oe=5DBF26EF'
            }
        ],
        notifications: [
            {
                name: 'Chen Finkelman',
                days: 2,
                thumbnail: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/p80x80/64731217_10156514976157857_7471493428442824704_n.jpg?_nc_cat=101&_nc_oc=AQnNl23Fz2uw3fJQLwmb3dlURnr-ib81RUa1NLswOMBM9tRbkWS7e3cE4-PZujJFgIo&_nc_ht=scontent.fhfa2-2.fna&oh=158a1e3f52bd9e211f8e105d8f026a5b&oe=5DB017B6'
            },
            {
                name: 'Arie Levin',
                days: 13,
                thumbnail: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/p80x80/13015466_113005945769725_8622548318211797619_n.jpg?_nc_cat=107&_nc_oc=AQmgOPPKYZksJpZBFRXLZq_5MA4NJYD0e54rZMsW0480G-L7KhlV1zgRG4O2guVCNg8&_nc_ht=scontent.fhfa2-2.fna&oh=f53bfc6ac88f26724900e3e93ea070d6&oe=5DA1F1BF'
            },
            {
                name: 'Michal sharon',
                days: 20,
                thumbnail: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/c0.5.80.80a/p80x80/167761_185129084847284_1210604_n.jpg?_nc_cat=105&_nc_oc=AQkqGenlT_TlKYDbhDrCsvKfyDwQtx-00RH1tCmUsE0zPHZFbVbNjV6ZnzpEcTKpq7c&_nc_ht=scontent.fhfa2-2.fna&oh=d55fae3334020e7e97c3326d174361ca&oe=5DBF26EF'
            }
        ],
        posts: [
            {
                thumbnail: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/c0.5.80.80a/p80x80/167761_185129084847284_1210604_n.jpg?_nc_cat=105&_nc_oc=AQkqGenlT_TlKYDbhDrCsvKfyDwQtx-00RH1tCmUsE0zPHZFbVbNjV6ZnzpEcTKpq7c&_nc_ht=scontent.fhfa2-2.fna&oh=d55fae3334020e7e97c3326d174361ca&oe=5DBF26EF',
                name: 'Lea Doron',
                content: 'Hello',
                image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
                comments: [
                    {
                        name: 'Moshe',
                        thumbnail: 'https://www.facebook.com/search/async/profile_picture/?fbid=100000639065643&width=72&height=72',
                        content: 'Wonderful'
                    },
                    {
                        name: 'Tal',
                        thumbnail: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/p100x100/59745638_10156676091787950_1913445601526153216_n.jpg?_nc_cat=105&_nc_oc=AQnOUL-zApBo0UhYNN9WF8y_24yx4AfE3FeKJXYajesU820HXobDEsKrsik6aGkUPs8&_nc_ht=scontent.fhfa2-2.fna&oh=65d4c09a064bfd7ead9072e3ee3d2312&oe=5DAA6840',
                        content: 'I love nature!'
                    },
                ],
                shares: ['Moshe', 'Tal', 'Idan', 'Nurit'],
                likes: ['Moshe', 'Tal', 'Idan'],
                date_created: 'June 14'
            },
            {
                thumbnail: 'https://www.facebook.com/search/async/profile_picture/?fbid=100000639065643&width=72&height=72',
                name: 'Moshe Feller',
                content: 'Hello',
                image: 'http://www.gratuit-en-ligne.com/telecharger-gratuit-en-ligne/telecharger-image-wallpaper-gratuit/image-wallpaper-animaux/img/images/image-wallpaper-animaux-autruche.jpg',
                comments: [
                    {
                        name: 'Tom',
                        thumbnail: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/p40x40/58381601_10158561438183782_5618823323552055296_n.jpg?_nc_cat=101&_nc_oc=AQnPGLzehnArgDCYJvlshvTWjHIzR_cZTa8S7Gf_MkEA-934eGq1h9pQwLuMgmd9dwM&_nc_ht=scontent.fhfa2-2.fna&oh=03c511aae77667d618954f759ab4536e&oe=5DC3BF72',
                        content: 'Say what?'
                    },
                    {
                        name: 'Tal',
                        thumbnail: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-1/p100x100/59745638_10156676091787950_1913445601526153216_n.jpg?_nc_cat=105&_nc_oc=AQnOUL-zApBo0UhYNN9WF8y_24yx4AfE3FeKJXYajesU820HXobDEsKrsik6aGkUPs8&_nc_ht=scontent.fhfa2-2.fna&oh=65d4c09a064bfd7ead9072e3ee3d2312&oe=5DAA6840',
                        content: 'ha ha ha'
                    },
                ],
                shares: ['Moshe', 'Tal', 'Idan', 'Nurit'],
                likes: ['Moshe', 'Tal', 'Idan'],
                date_created: 'June 14'
            },
        ],
        images: [
            {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg',
                likes: 4
            },
            {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyBS49JKtYQ-_nqCJ-ISZNTmipfdChJeWcTKf5AjzKoHWXU8d',
                likes: 7
            },
            {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkjCJFQeu815mzmbqATBx1qIB3Gnxwdp6DPTTYgVkAVLjBUMl',
                likes: 42
            },
        ]
    },

    {
        name: 'Chen',
        last_name: 'Finkelman',
        email: 'finkelman@gmail.com',
        friends: [],
        messages: [
            {
                name: 'Amir Muchtari',
                message: 'Hello how are you?',
                thumbnail: 'https://www.bla.com'
            },
            {
                name: 'Doron Shalev',
                message: 'Hello how are you?',
                thumbnail: 'https://www.bla.com'
            },
            {
                name: 'Michal sharon',
                message: 'Please call me back asap?',
                thumbnail: 'https://www.bla.com'
            }
        ],
        posts: [
            {
                content: '',
                image: '',
                comments: ['', ''],
                shares: 4,
                likes: 4,
            },
            {
                content: '',
                image: '',
                comments: ['', ''],
                shares: 4,
                likes: 4,
            },
            {
                content: '',
                image: '',
                comments: ['', ''],
                shares: 4,
                likes: 4,
            },
        ],
        images: [
            {
                url: '',
                likes: '',
                comment: ''
            },
            {
                url: '',
                likes: '',
                comment: ''
            },
            {
                url: '',
                likes: '',
                comment: ''
            },
        ]
    },

    {
        name: 'Guy',
        last_name: 'Hirsch',
        email: 'guyhirsh@gmail.com',
        friends: [],
        messages: [
            {
                name: 'Amir Muchtari',
                message: 'Hello how are you?',
                thumbnail: 'https://www.bla.com'
            },
            {
                name: 'Doron Shalev',
                message: 'Hello how are you?',
                thumbnail: 'https://www.bla.com'
            },
            {
                name: 'Michal sharon',
                message: 'Please call me back asap?',
                thumbnail: 'https://www.bla.com'
            }
        ],
        posts: [
            {
                content: '',
                image: '',
                comments: ['', ''],
                shares: 4,
                likes: 4,
            },
            {
                content: '',
                image: '',
                comments: ['', ''],
                shares: 4,
                likes: 4,
            },
            {
                content: '',
                image: '',
                comments: ['', ''],
                shares: 4,
                likes: 4,
            },
        ],
        images: [
            {
                url: '',
                likes: '',
                comment: ''
            },
            {
                url: '',
                likes: '',
                comment: ''
            },
            {
                url: '',
                likes: '',
                comment: ''
            },
        ]
    }
];

export {facebookUsers};