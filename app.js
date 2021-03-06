const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// header focus on inputelement and click information
const headerInputElement = $('.header__search-wrap input')
const rootElement = $('.app__wrap')
const bellBtn = $('.header__information-notify')
const boxNotify = $('.header__information-notify-box');
const inforImg = $('.header__information-img');
const boxUser = $('.header__information-user-box')


bellBtn.onclick = function() {
    boxNotify.classList.toggle('isopen')
}

bellBtn.addEventListener('click',function(e) {
    e.stopPropagation()
})

boxNotify.addEventListener('click', function(e) {
    e.stopPropagation()
})

headerInputElement.onfocus = function () {
    $('.header__search-wrap').style.border = '1px solid var(--primary-color)';
    
}
rootElement.onclick = function () {
    $('.header__search-wrap').style.border = '1px solid rgba(0, 0, 0, 0.1)'
    // Close boxNotify when click app
    boxNotify.classList.remove('isopen')
    // Close userBox when click app
    boxUser.classList.remove('isopen')
    // Close addBox
    addIcon.classList.remove('isrotate');
    boxAdd.classList.remove('isopen')
}

headerInputElement.addEventListener('click', function(e) {
    e.stopPropagation()
})

// Click infor
inforImg.onclick = function() {
    boxUser.classList.toggle('isopen')
}

inforImg.addEventListener('click', function(e) {
    e.stopPropagation()
})

boxUser.addEventListener('click', function(e) {
    e.stopPropagation()
})


// Add js

const addBtn = $('.page__sidebar-add-item-link')
const addIcon = $('.page__sidebar-add-item-icon')
const boxAdd = $('.page__sidebar-add-box')

addBtn.onclick = function() {
    addIcon.classList.toggle('isrotate');
    boxAdd.classList.toggle('isopen')
}

addBtn.addEventListener('click', function(e) {
    e.stopPropagation()
})

boxAdd.addEventListener('click', function(e) {
    e.stopPropagation()
})

// Sidebar active

// Slider render

const sliderList = $('.page__content-slider-list')

const sliderContent = [
    {
        heading: 'Th??nh qu??? c???a h???c vi??n',
        description: '????? ?????t ???????c k???t qu??? t???t trong m???i vi???c ta c???n x??c ?????nh m???c ti??u r?? r??ng cho vi???c ????. H???c ?????i h???c c??ng kh??ng l?? ngo???i l???.',
        link: './question.html',
        img: 'https://cdn.fullstack.edu.vn/f8-learning/banners/Banner_01_2.png',
        button: 'Xem th??nh qu???',
        background: 'linear-gradient(to right, rgb(118, 18, 255), rgb(5, 178, 255));',
        hover: 'background-color: var(--white-color);',
        colorText: '#7612ff'
    },
    {
        heading: 'C??c kh??a h???c tr???c tuy???n',
        description: 'V???i mong mu???n mang ?????n ch???t l?????ng h???c t???p t???t h??n, T4 s??? mang ?????n cho c??c b???n c??c kh??a h???c tr???c tuy???n ch???t l?????ng',
        link: './question.html',
        img: 'https://cdn.fullstack.edu.vn/f8-learning/banners/Banner_03_youtube.png',
        button: 'Truy c???p k??nh',
        background: 'linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2));',
        hover: 'background-color: var(--white-color);',
        colorText: '#fe215e'
    },
    {
        heading: 'Li??n h??? ????ng g??p kh??a h???c',
        description: 'C??c b???n c?? th??? li??n h??? ????? ????ng g??p kh??a h???c v???i admin th??ng qua k??nh facebook',
        link: 'https://www.facebook.com/profile.php?id=100008368776171',
        img: 'https://cdn.fullstack.edu.vn/f8-learning/banners/Banner_04_2.png',
        button: 'Li??n h??? v???i admin',
        background: 'linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254));',
        hover: 'background-color: var(--white-color);',
        colorText: '#007efe'
    }
]

const htmlsSlider = sliderContent.map(function(content, index) {
    return `
        <div class="page__content-slider-item" style="background: ${content.background};" data-index="${index}">
            <div class="page__content-slider-item-content">
                <h2 class="page__content-slider-item-heading">${content.heading}</h2>
                <p class="page__content-slider-item-description">${content.description}</p>
                <a href="${content.link}" class="page__content-slider-item-link" onpointerover="this.style.color= '${content.colorText}'" onpointerout="this.style.color='white'">${content.button}</a>
            </div>
            <div class="page__content-slider-img-wrap">
                <img src="${content.img}" alt="" class="page__content-slider-img">
            </div>
        </div>
    `
})

sliderList.innerHTML = htmlsSlider.join('')


// Slider handle

const nextBtn = $('.page__content-slider-btn-next')
const prevBtn = $('.page__content-slider-btn-prev')
const slide = $('.page__content-slider-item')

let sliderItemElement = $$('.page__content-slider-item')
let index = 0;
let slideId;

const firstClone = sliderItemElement[0].cloneNode(true);
const lastClone = sliderItemElement[sliderItemElement.length - 1].cloneNode(true);

firstClone.id = 'slider__first-clone'
lastClone.id = 'slider__last-clone'

sliderList.append(firstClone)
// sliderList.append(lastClone)


const sliderWidth = 100;
const slicks = $$('.page__content-slider-slickdot li')

// Slider slickdot

const slickHandle = function() {
    for(let i = 0; i < slicks.length; i++ ) {
        if(i === index) {
            slicks[i].classList.add('slideractive')
        } else if (index === 3 || index === 0) {
            slicks[0].classList.add('slideractive')
            slicks[slicks.length - 1].classList.remove('slideractive')
        } else {
            slicks[i].classList.remove('slideractive')
        }
    }
}

const startSlider = () => {
    slideId = setInterval(() => {
        index++;
        sliderList.style.transform = `translateX(${-sliderWidth * index}px)`
        sliderList.style.transition = '1s'
        slickHandle()
    },8000)
    
}

// startSlider()

sliderList.addEventListener('transitionend', () => {
    sliderItemElement = $$('.page__content-slider-item')
    if(sliderItemElement[index].id === firstClone.id) {
        sliderList.style.transition = 'none';
        index = 0;
        sliderList.style.transform = `translateX(${-sliderWidth * index}%)`
    }
})


const getSliderItem = () => {
    return sliderItemElement = $$('.page__content-slider-item')
}


const moveToNextSlide = () => {
    sliderItemElement = getSliderItem()
    if(index >= sliderItemElement.length - 1) return;
    index++;
    sliderList.style.transform = `translateX(${-sliderWidth * index }%)`
    sliderList.style.transition = '1s'
}

const moveToPrevSlide = () => {
    if(index <= 0) return;
    index--;
    sliderList.style.transform = `translateX(${-sliderWidth * index }%)`
    sliderList.style.transition = '1s'
}

nextBtn.addEventListener('click', () => {
    moveToNextSlide();
    slickHandle()

})
prevBtn.addEventListener('click', () => {
    moveToPrevSlide();
    for(let i = 0; i < slicks.length; i++ ) {
        if(i === index) {
            slicks[i].classList.add('slideractive')
        } else if (index === 3 || index === 0) {
            slicks[0].classList.add('slideractive')
            slicks[slicks.length - 1].classList.remove('slideractive')
            slicks[1].classList.remove('slideractive')
        } else {
            slicks[i].classList.remove('slideractive')
        }
    }

})

// nextBtn.addEventListener('pointerover', () => {
//     clearInterval(slideId)
// })
// nextBtn.addEventListener('pointerout', startSlider, slickHandle())

// prevBtn.addEventListener('pointerover', () => {
//     clearInterval(slideId)
// })
// prevBtn.addEventListener('pointerout', startSlider)




// Courses section
const courseList = $('.page__content-home-courses-list-wrap');
const courseNextBtn = $('.course-next-btn')
const coursePrevBtn = $('.course-prev-btn')
let indexCourses = 0;
const testScroll = $('.page__content-home-courses-list-cover')
const inputScroll = $('.testWidthScroll')



const coursesApp = {
    coursesWidth: 50,
    index: 0,
    courses: [
        {
            name: 'Gi???i T??ch 1',
            img: './img/GiaiTich1.png',
            link: './giaitich1.html'
        },
        {
            name: '??i???n t??? s???',
            img: './img/dts.png',
            link: './dts.html'
        },
        {
            name: 'Anten v?? truy???n s??ng',
            img: './img/anten.png',
            link: './anten.html'
        },
        {
            name: '??i???n t??? t????ng t??? 1',
            img: './img/dttt1.png',
            link: './dttt1.html'
        },
        {
            name: '??i???n t??? t????ng t??? 2',
            img: './img/dttt2.png',
            link: './dttt2.html'
        },
    
        {
            name: 'L?? thuy???t m???ch',
            img: './img/ltm.png',
            link: './ltm.html'
        },
        {
            name: 'L?? thuy???t th??ng tin',
            img: './img/lttt.png',
            link: './lttt.html'
        },
        {
            name: 'T??i li???u Toeic',
            img: './img/toeic.png',
            link: './toeic.html'
        },
    ],

    
    
    // Render course
    render: function() {
        const htmlsCourse = this.courses.map((data) => {
            return `
            <div class="page__content-home-courses-item">
                <div class="grid__column">
                    <a href="${data.link}" class="page__content-home-courses-link">
                        <img src="${data.img}" alt="" class="page__content-home-courses-img">
                    </a>
                    <a href="" class="page__content-home-courses-description">
                        <h3 class="page__content-home-courses-description-text">${data.name}</h3>
                    </a>
                </div>
            </div>
            `
        })
        
        courseList.innerHTML = htmlsCourse.join('') 
        
    },
    
    
    handleEvent: function () {
        const _this = this;
        // Click button next courses

        courseNextBtn.onclick = function() {
            _this.nextBtnClick()
            _this.nextBtnDisable()
            _this.prevBtnDisable()
        }
        // Click button prev courses

        coursePrevBtn.onclick = function() {
            _this.prevBtnClick()
            _this.prevBtnDisable()
            _this.nextBtnDisable()
        }
    },

    // Transform sourses list
    
    nextBtnClick: function () {
        const coursesWidth = $('.page__content-home-courses-item').clientWidth;
        const courseItems = $$('.page__content-home-courses-item')
        if(indexCourses <= (courseItems.length / 3) - 1) {
            indexCourses++
            courseList.style.transform = `translateX(${-coursesWidth * indexCourses * 2}px)`
        }
    },
    
    prevBtnClick: function () {
        const coursesWidth = $('.page__content-home-courses-item').clientWidth;
        if(indexCourses > 0 ) {
            indexCourses--
            courseList.style.transform = `translateX(${-coursesWidth * indexCourses * 2}px)`
        }
    },

    // Disable Next and Prev button
    
    nextBtnDisable: function() {
        const courseItems = $$('.page__content-home-courses-item')
        if(indexCourses === (courseItems.length / 3)) {
            courseNextBtn.style.opacity = '0'
        } else if (indexCourses < (courseItems.length / 3)) {
            courseNextBtn.style.opacity = '1'
        }
    },
    
    prevBtnDisable: function() {
        if(indexCourses === 0) {
            coursePrevBtn.style.opacity = '0'
        } else if (indexCourses != 0) {
            coursePrevBtn.style.opacity = '1'
        }
        
    },
        start: function () {
            this.render()
            this.handleEvent()
            this.prevBtnDisable()
        }
    }
    
    coursesApp.start()


// Featured-post 

const featuredPostList = $('.page__content-home-featured-post-list-wrap');
const featuredPostNextBtn = $('.featured-post-next-btn')
const featuredPostPrevBtn = $('.featured-post-prev-btn')
let indexfeaturedPost = 0;


const featuredPostApp = {
    featuredPostWidth: 50,
    index: 0,
    featuredPost: [
        {
            name: 'Th???i gian v?? ?????ng l???c',
            img: 'https://cdn.fullstack.edu.vn/f8-production/blog_posts/1671/61b6368a3a089.jpg',
            avatar: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            link: 'https://fullstack.edu.vn/blog/thoi-gian-va-dong-luc.html',
            user: 'S??u t???m',
            date: '2 ng??y tr?????c',
        },
        {
            name: 'L???p tr??nh h?????ng ?????i t?????ng',
            img: 'https://cdn.fullstack.edu.vn/f8-production/blog_posts/1021/6173be68944ad.jpg',
            avatar: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            link: 'https://fullstack.edu.vn/blog/lap-trinh-huong-doi-tuong-oop.html',
            user: 'S??u t???m',
            date: '6 ng??y tr?????c',
        },
        {
            name: 'B???n l?? sinh vi??n th?? bolg n??y l?? d??nh cho b???n P2',
            img: 'https://cdn.fullstack.edu.vn/f8-production/blog_posts/621/6150aa8cb42b3.jpg',
            avatar: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            link: 'https://fullstack.edu.vn/blog/ban-la-sinh-vien-bai-blog-nay-la-danh-cho-ban-p2.html',
            user: 'S??u t???m',
            date: '10 ng??y tr?????c',
        },
        {
            name: 'GenZ theo ng??nh IT v?? suy ngh?? h??i h??i sai l???ch ????',
            img: 'https://cdn.fullstack.edu.vn/f8-production/blog_posts/707/6155ed6c19af9.png',
            avatar: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            link: 'https://fullstack.edu.vn/blog/genz-theo-nganh-it-va-suy-nghi-hoi-hoi-sai-lech.html',
            user: 'S??u t???m',
            date: '10 ng??y tr?????c',
        },
        {
            name: 'B???n l?? sinh vi??n th?? bolg n??y l?? d??nh cho b???n P1',
            img: 'https://cdn.fullstack.edu.vn/f8-production/blog_posts/621/6150aa8cb42b3.jpg',
            avatar: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            link: 'https://fullstack.edu.vn/blog/ban-la-sinh-vien-bai-blog-nay-la-danh-cho-ban-p1.html',
            user: 'S??u t???m',
            date: '11 ng??y tr?????c',
        },
        {
            name: 'T??m s??? - chia s??? - kinh nghi???m t??? h???c - Tu???i 22.',
            img: 'https://cdn.fullstack.edu.vn/f8-production/blog_posts/261/613f00e0a3f74.png',
            avatar: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            link: 'https://fullstack.edu.vn/blog/tam-su-chia-se-kinh-nghiem-tu-hoc-tuoi-22.html',
            user: 'S??u t???m',
            date: '12 ng??y tr?????c',
        },
        {
            name: 'Chia s??? c??c trang web icon, h??nh ???nh ch???t l?????ng cao mi???n ph??',
            img: 'https://f40-zpg.zdn.vn/6414417963368895323/8af558e3d88910d74998.jpg',
            avatar: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            link: 'https://fullstack.edu.vn/blog/chia-se-cac-trang-web-icon-hinh-anh-chat-luong-cao-mien-phi.html',
            user: 'S??u t???m',
            date: '15 ng??y tr?????c',
        },
        {
            name: 'B???n nguy??n t???c khi h???c code',
            img: 'https://cdn.fullstack.edu.vn/f8-production/blog_posts/1385/6197a09e60b56.png',
            avatar: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
            link: 'https://fullstack.edu.vn/blog/bon-nguyen-tac-khi-hoc-code.html',
            user: 'S??u t???m',
            date: '16 ng??y tr?????c',
        },
        
    ],

    
    
    // Render featuredPost
    render: function() {
        const htmlsFeaturedPost = this.featuredPost.map((data) => {
            return `
            <div class="page__content-home-featured-post-item">
                <div class="grid__column">
                    <a href="${data.link}" class="page__content-home-featured-post-link">
                        <img src="${data.img}" alt="" class="page__content-home-featured-post-img">
                    </a>
                    <a href="${data.link}" class="page__content-home-featured-post-description">
                        <h3 class="page__content-home-featured-post-description-text">${data.name}</h3>
                    </a>
                    <div class="page__content-home-featured-post-information">
                        <img src="${data.avatar}" class="page__content-home-featured-post-information-avatar"></img>
                        <p class="page__content-home-featured-post-information-name">${data.user}</p>
                        <span class="page__content-home-featured-post-information-date">${data.date}</span>
                    </div>
                </div>
            </div>
            `
        })
        
        featuredPostList.innerHTML = htmlsFeaturedPost.join('') 
        
    },
    
    
    handleEvent: function () {
        const _this = this;
        // Click button next featuredPost

        featuredPostNextBtn.onclick = function() {
            _this.nextBtnClick()
            _this.nextBtnDisable()
            _this.prevBtnDisable()
        }
        // Click button prev featuredPost

        featuredPostPrevBtn.onclick = function() {
            _this.prevBtnClick()
            _this.prevBtnDisable()
            _this.nextBtnDisable()
        }
    },

    // Transform featuredPost list
    
    nextBtnClick: function () {
        const featuredPostWidth = $('.page__content-home-featured-post-item').clientWidth;
        const featuredPostItems = $$('.page__content-home-featured-post-item')
        if(indexfeaturedPost <= (featuredPostItems.length / 3)) {
            indexfeaturedPost++
            featuredPostList.style.transform = `translateX(${-featuredPostWidth * indexfeaturedPost * 2}px)`
        }
    },
    
    prevBtnClick: function () {
        const featuredPostWidth = $('.page__content-home-featured-post-item').clientWidth;
        if(indexfeaturedPost > 0 ) {
            indexfeaturedPost--
            featuredPostList.style.transform = `translateX(${-featuredPostWidth * indexfeaturedPost * 2}px)`
        }
    },

    // Disable Next and Prev button
    
    nextBtnDisable: function() {
        const featuredPostItems = $$('.page__content-home-featured-post-item')
        if(indexfeaturedPost === Math.ceil((featuredPostItems.length / 3))) {
            featuredPostNextBtn.style.opacity = '0'
        } else if (indexCourses < (featuredPostItems.length / 3)) {
            featuredPostNextBtn.style.opacity = '1'
        }
    },
    
    prevBtnDisable: function() {
        if(indexfeaturedPost === 0) {
            featuredPostPrevBtn.style.opacity = '0'
        } else if (indexfeaturedPost != 0) {
            featuredPostPrevBtn.style.opacity = '1'
        }
        
    },
        start: function () {
            this.render()
            this.handleEvent()
            this.prevBtnDisable()
        }
    }
    
    featuredPostApp.start()






// Featured-video 

const featuredVideoList = $('.page__content-home-featured-video-list-wrap');
const featuredVideoNextBtn = $('.featured-video-next-btn')
const featuredVideoPrevBtn = $('.featured-video-prev-btn')
let indexfeaturedVideo = 0;


const featuredVideoApp = {
    featuredVideoWidth: 50,
    index: 0,
    featuredVideo: [
        {
            name: 'Sinh vi??n IT ??i th???c t???p c???n bi???t nh???ng g??? | ??i th???c t???p c???n chu???n b??? nh???ng g??? | Th???c t???p IT',
            img: 'https://i.ytimg.com/vi/YH-E4Y3EaT4/hqdefault.jpg',
            view: 127.638,
            like: 3.609,
            comment: 194,
            link: 'https://www.youtube.com/watch?v=YH-E4Y3EaT4'
        },
        {
            name: '"Code Thi???u Nhi Battle" Tranh Gi??nh Tr?? S???a Size L',
            img: 'https://i.ytimg.com/vi/sgq7BH6WxL8/hqdefault.jpg',
            view: 112.326,
            like: 2.808,
            comment: 147,
            link: 'https://www.youtube.com/watch?v=sgq7BH6WxL8'
        },
        {
            name: 'Ph????ng ph??p & quan ??i???m h???c l???p tr??nh c???a S??n ?????ng',
            img: 'https://i.ytimg.com/vi/DpvYHLUiZpc/hqdefault.jpg',
            view: 37.807,
            like: 2.425,
            comment: 202,
            link: 'https://www.youtube.com/watch?v=DpvYHLUiZpc'
        },
        {
            name: 'L??m sao ????? c?? thu nh???p cao v?? ??i xa h??n trong ng??nh IT?',
            img: 'https://i.ytimg.com/vi/oF7isq9IjZM/hqdefault.jpg',
            view: 37.316,
            like: 1.934,
            comment: 196,
            link: 'https://www.youtube.com/watch?v=oF7isq9IjZM'
        },
        {
            name: 'L???n tr??? l???i n??y F8 s??? l??m g?? cho c??c b???n? H???c l???p tr??nh ????? ??i l??m t???i F8 n??o!',
            img: 'https://i.ytimg.com/vi/ZGmpvhqYSDU/hqdefault.jpg',
            view: 14.699,
            like: 1.818,
            comment: 399,
            link: 'https://www.youtube.com/watch?v=ZGmpvhqYSDU'
        },
        {
            name: 'ReactJS l?? g??? T???i sao n??n h???c ReactJS?',
            img: 'https://i.ytimg.com/vi/x0fSBAgBrOQ/hqdefault.jpg',
            view: 28.722,
            like: 1.648,
            comment: 316,
            link: 'https://www.youtube.com/watch?v=x0fSBAgBrOQ'
        },
        {
            name: 'L??m ???????c g?? sau kh??a h???c?',
            img: 'https://i.ytimg.com/vi/R6plN3FvzFY/hqdefault.jpg',
            view: 220.718,
            like: 1.511,
            comment: 91,
            link: 'https://www.youtube.com/watch?v=R6plN3FvzFY&feature=youtu.be'
        },
        {
            name: 'Ch???n ng??nh IT c?? sai l???m? Nh???ng tr???i nghi???m th???c t??? sau 2 th??ng l??m vi???c t???i doanh nghi???p?',
            img: 'https://i.ytimg.com/vi/2sg1yNl1WvE/hqdefault.jpg',
            view: 37.330,
            like: 1.451,
            comment: 159,
            link: 'https://www.youtube.com/watch?v=2sg1yNl1WvE&feature=youtu.be'
        },
        {
            name: 'Javascript c?? th??? l??m ???????c g??? Gi???i thi???u qua v??? trang F8 | H???c l???p tr??nh Javascript c?? b???n',
            img: 'https://i.ytimg.com/vi/0SJE9dYdpps/hqdefault.jpg',
            view: 212.258,
            like: 1.351,
            comment: 80,
            link: 'https://www.youtube.com/watch?v=0SJE9dYdpps&feature=youtu.be'
        },
        {
            name: 'H???c Flexbox qua v?? d???',
            img: 'https://i.ytimg.com/vi/G19jZzK5FWI/hqdefault.jpg',
            view: 60.416,
            like: 1.094,
            comment: 94,
            link: 'https://www.youtube.com/watch?v=YH-E4Y3EaT4'
        },
        {
            name: 'L??m sao ????? c?? thu nh???p cao v?? ??i xa h??n trong ng??nh IT?',
            img: 'https://i.ytimg.com/vi/oF7isq9IjZM/hqdefault.jpg',
            view: 37.316,
            like: 1.934,
            comment: 196,
            link: 'https://www.youtube.com/watch?v=G19jZzK5FWI&feature=youtu.be'
        },
    ],

    
    
    // Render featuredVideo
    render: function() {
        const htmlsFeaturedPost = this.featuredVideo.map((data) => {
            return `
            <div class="page__content-home-featured-video-item">
                <div class="grid__column">
                    <a href="${data.link}" target="_blank" class="page__content-home-featured-video-link">
                        <img src="${data.img}" alt="" class="page__content-home-featured-video-img">
                    </a>
                    <a href="${data.link}" target="_blank" class="page__content-home-featured-video-description">
                        <h3 class="page__content-home-featured-video-description-text">${data.name}</h3>
                    </a>
                    <div class="page__content-home-featured-video-information">
                        <div class="page__content-home-featured-video-view">
                            <i class="fas fa-eye"></i>
                            <strong>${data.view}</strong>
                        </div>
                        <div class="page__content-home-featured-video-like">
                            <i class="fas fa-thumbs-up"></i>
                            <strong>${data.like}</strong>
                        </div>
                        <div class="page__content-home-featured-video-comment">
                            <i class="fas fa-comment"></i>
                            <strong>${data.comment}</strong>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        
        featuredVideoList.innerHTML = htmlsFeaturedPost.join('') 
        
    },
    
    
    handleEvent: function () {
        const _this = this;
        // Click button next featuredVideo

        featuredVideoNextBtn.onclick = function() {
            _this.nextBtnClick()
            _this.nextBtnDisable()
            _this.prevBtnDisable()
        }
        // Click button prev featuredVideo

        featuredVideoPrevBtn.onclick = function() {
            _this.prevBtnClick()
            _this.prevBtnDisable()
            _this.nextBtnDisable()
        }
    },

    // Transform featuredVideo list
    
    nextBtnClick: function () {
        const featuredVideoWidth = $('.page__content-home-featured-video-item').clientWidth;
        const featuredVideoItems = $$('.page__content-home-featured-video-item')
        if(indexfeaturedVideo <= (featuredVideoItems.length / 3)) {
            indexfeaturedVideo++
            featuredVideoList.style.transform = `translateX(${-featuredVideoWidth * indexfeaturedVideo * 2}px)`
        }
    },
    
    prevBtnClick: function () {
        const featuredVideoWidth = $('.page__content-home-featured-video-item').clientWidth;
        if(indexfeaturedVideo > 0 ) {
            indexfeaturedVideo--
            featuredVideoList.style.transform = `translateX(${-featuredVideoWidth * indexfeaturedVideo * 2}px)`
        }
    },

    // Disable Next and Prev button
    
    nextBtnDisable: function() {
        const featuredVideoItems = $$('.page__content-home-featured-video-item')
        if(indexfeaturedVideo === Math.ceil((featuredVideoItems.length / 3))) {
            featuredVideoNextBtn.style.opacity = '0'
        } else if (indexCourses < (featuredVideoItems.length / 3)) {
            featuredVideoNextBtn.style.opacity = '1'
        }
    },
    
    prevBtnDisable: function() {
        if(indexfeaturedVideo === 0) {
            featuredVideoPrevBtn.style.opacity = '0'
        } else if (indexfeaturedVideo != 0) {
            featuredVideoPrevBtn.style.opacity = '1'
        }
        
    },
        start: function () {
            this.render()
            this.handleEvent()
            this.prevBtnDisable()
        }
    }
    
    featuredVideoApp.start()
    
    
const pageContent = document.querySelector('.page__content')
var testLink = pageContent.getElementsByTagName('a')

const noticeWarn = document.querySelector('#notice')
for(let i = 0; i < testLink.length; i++) {
    const testLinks = testLink[i]
    if(testLinks.getAttribute('href') === "undefined" || testLinks.getAttribute('href') === "") {
        testLinks.setAttribute("href", "#")
        testLinks.addEventListener('click', function(e) {
            e.preventDefault()
        })
    }

    testLinks.onclick = function() {
        if(testLinks.getAttribute('href') === '#') {
            const warning = document.createElement('div')
            warning.classList.add('notice__warn');
            warning.innerHTML = `
                <div class="notice__warn-icon">
                    <i class="fas fa-exclamation-circle"></i>
                </div>
                <div class="notice__warn-content">
                    <h3 class="notice__warn-heading">Th??ng b??o</h3>
                    <span class="notice__warn-message">N???i dung ??ang trong qu?? tr??nh ho??n thi???n !</span>
                </div>
            `
            noticeWarn.appendChild(warning)

            setTimeout(function() {
                noticeWarn.removeChild(warning)
            },2500)
        }
    }
}
    

const menuRespon = document.querySelector('.header__icon-menu')
const sidebarRespon = document.querySelector('.side__bar-respon')
const sidebarLeft = document.querySelector('.side__bar-respon-left')
const exitSibar = document.querySelector('.side__bar-respon-right')

menuRespon.onclick = function() {
    sidebarRespon.classList.add('iscover-fill');
    sidebarLeft.classList.add('isopen-sidebar-respon')
}

exitSibar.onclick = function() {
    sidebarRespon.classList.remove('iscover-fill');
    sidebarLeft.classList.remove('isopen-sidebar-respon')
}


