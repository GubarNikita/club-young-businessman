import React, { useCallback, useRef, useState } from "react";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import headerCube from "assets/images/landingClub/headerCube.webp";
import arrowButton from "assets/images/landingClub/arrowButton.svg";
import arrowEvent from "assets/images/landingClub/arrowEvent.svg";
import arrowItem from "assets/images/landingClub/arrowItem.svg";
import arrowMission from "assets/images/landingClub/arrowMission.svg";
import arrowSlider from "assets/images/landingClub/arrowSlider.svg";
import bgBlack from "assets/images/landingClub/bgBlack.webp";
import bgOrange from "assets/images/landingClub/bgOrange.webp";
import bgWhite from "assets/images/landingClub/bgWhite.webp";
import bgYellow from "assets/images/landingClub/bgYellow.webp";
import blackWhiteCube from "assets/images/landingClub/blackWhiteCube.webp";
import blackYellowCube from "assets/images/landingClub/blackYellowCube.webp";
import elementBg2 from "assets/images/landingClub/elementBg2.webp";
import event from "assets/images/landingClub/event.png";
import headerLogo2 from "assets/images/landingClub/headerLogoClub2.svg";
import headerLogo1 from "assets/images/landingClub/headerLogoClub.svg";
import headerText from "assets/images/landingClub/headerText.svg";
import human from "assets/images/landingClub/human.png";
import humanShadow from "assets/images/landingClub/humanShadow.png";
import iconCalendar from "assets/images/landingClub/iconCalendar.svg";
import iconPosition from "assets/images/landingClub/iconPosition.svg";
import iconTg from "assets/images/landingClub/iconTg.svg";
import iconVk from "assets/images/landingClub/iconVk.svg";
import menu from "assets/images/landingClub/menu.svg";
import newsImg from "assets/images/landingClub/news.png";
import orangeBlackCube from "assets/images/landingClub/orangeBlackCube.webp";
import questionMark from "assets/images/landingClub/questionMark.webp";
import slider2 from "assets/images/landingClub/slider2.png";
import slider from "assets/images/landingClub/slider.png";

import "./landingClub.scss";

export const LandingClub = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);

    const handleMenu = () => {
        setActiveMenu((prevState) => !prevState);
    };

    const handlePrev = useCallback((ref) => {
        if (!ref.current) return;
        ref.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback((ref) => {
        if (!ref.current) return;
        ref.current.swiper.slideNext();
    }, []);

    const subjects = [
        "сообщество единомышленников",
        "наставничество",
        "поддержка молодых предпринимателей",
        "советы бывалых",
        "государственная поддержка",
        "развитие бизнеса в регионе",
        "партнерство",
        "бизнес встречи",
    ];

    const missionSubjects = [
        "необходимые <br /><span>мероприятия</span>",
        "<span>нетворкинг</span> и новые <br />знакомства",
        "информационную <br /><span>поддержку</span>",
        "<span>консультации</span> опытных <br />предпринимателей и наставников",
        "<span>возможность</span> получить финансирование <br />в собственные бизнес-проекты",
    ];

    const members = [
        {
            name: "Кирилл Бойко",
            position: "Донецк",
            avatar: slider,
            content: "Основатель и глава всего что можно придумать! Бог основания и создания! Великий всея кода и управления тупых и не очень людей! Владыка терпения и мудрости!",
            id: 11,
        },
        {
            name: "Виктор Батищев",
            position: "Донецк",
            avatar: slider2,
            content: "Великий ответственности и креативности! Наблюдатель за стадом неразумным. Альтруистический деятель! Активатор и мотиватор великих процессов!",
            id: 12,
        },
        {
            name: "Кирилл Бойко",
            position: "Донецк",
            avatar: slider,
            content: "Основатель и глава всего что можно придумать! Бог основания и создания! Великий всея кода и управления тупых и не очень людей! Владыка терпения и мудрости!",
            id: 13,
        },
        {
            name: "Виктор Батищев",
            position: "Донецк",
            avatar: slider2,
            content: "Великий ответственности и креативности! Наблюдатель за стадом неразумным. Альтруистический деятель! Активатор и мотиватор великих процессов!",
            id: 14,
        },
    ];

    const news = [
        {
            title: "6 окружных мероприятий клуба",
            img: newsImg,
            content:
                "Встречи предпринимателей с представителями региональных сетевых торговых площадок в формате круглых столов. Стратегические сессии и лекции на тему ведения предпринимательской деятельности с учётом территориальных особенностей федерального округа.<br /><br />Встречи предпринимателей с представителями региональных сетевых торговых площадок в формате круглых столов Стратегические сессии и лекции на тему ведения предпринимательской деятельности с учётом",
            id: 15,
        },
        {
            title: "6 окружных мероприятий клуба",
            img: newsImg,
            content:
                "Встречи предпринимателей с представителями региональных сетевых торговых площадок в формате круглых столов. Стратегические сессии и лекции на тему ведения предпринимательской деятельности с учётом территориальных особенностей федерального округа.<br /><br />Встречи предпринимателей с представителями региональных сетевых торговых площадок в формате круглых столов Стратегические сессии и лекции на тему ведения предпринимательской деятельности с учётом",
            id: 16,
        },
        {
            title: "6 окружных мероприятий клуба",
            img: newsImg,
            content:
                "Встречи предпринимателей с представителями региональных сетевых торговых площадок в формате круглых столов. Стратегические сессии и лекции на тему ведения предпринимательской деятельности с учётом территориальных особенностей федерального округа.<br /><br />Встречи предпринимателей с представителями региональных сетевых торговых площадок в формате круглых столов Стратегические сессии и лекции на тему ведения предпринимательской деятельности с учётом",
            id: 17,
        },
        {
            title: "6 окружных мероприятий клуба",
            img: newsImg,
            content:
                "Встречи предпринимателей с представителями региональных сетевых торговых площадок в формате круглых столов. Стратегические сессии и лекции на тему ведения предпринимательской деятельности с учётом территориальных особенностей федерального округа.<br /><br />Встречи предпринимателей с представителями региональных сетевых торговых площадок в формате круглых столов Стратегические сессии и лекции на тему ведения предпринимательской деятельности с учётом",
            id: 18,
        },
    ];

    return (
        <section className="club">
            <section className={`club-mobile-menu ${activeMenu ? "club-mobile-menu-active" : ""}`}>
                <div className="menu-container">
                    <div className="menu__img">
                        <SVG src={menu} />
                    </div>

                    <nav className="menu-nav">
                        <Link to="#">о клубе</Link>
                        <Link to="#">ценности</Link>
                        <Link to="#">клуб в лицах</Link>
                        <Link to="#">мероприятия</Link>
                        <Link to="#">новости клуба</Link>
                        <Link to="#">контакты</Link>
                    </nav>
                    <div className="menu-burger" onClick={() => handleMenu()}>
                        <div className="menu-burger__line"></div>
                        <div className="menu-burger__line"></div>
                        <div className="menu-burger__line"></div>
                    </div>
                </div>
            </section>
            <section className="club-header">
                <div className="header-container">
                    <img className="header-cube" src={headerCube} alt="" />
                    <div className="header__logo">
                        <img src={headerLogo1} alt="" />
                        <img src={headerText} alt="" />
                        <img src={headerLogo2} alt="" />
                    </div>
                    <nav className="header-nav">
                        <Link to="#">о клубе</Link>
                        <Link to="#">ценности</Link>
                        <Link to="#">клуб в лицах</Link>
                        <Link to="#">мероприятия</Link>
                        <Link to="#">новости клуба</Link>
                        <Link to="#">контакты</Link>
                    </nav>
                </div>
            </section>

            <section className="club-title">
                <img className="title-bg--bottom" src={bgWhite} alt="" />
                <div className="title-container">
                    <div className="title-bg--top">
                        <img src={bgWhite} alt="" />
                    </div>

                    <h3 className="title__name">
                        <span>клуб</span> молодых <p>предпринимателей</p>
                    </h3>
                    <h1 className="title__header">
                        <span>ДОН</span>
                        <img src={human} alt="" className="header__human" />
                        <img src={humanShadow} alt="" className="header__human-shadow" />
                        <img src={orangeBlackCube} alt="" className="header__human-cube" />
                        ЕЦК
                    </h1>
                </div>
            </section>

            <section className="club-description">
                <div className="description-container">
                    <img className="description-bg" src={bgBlack} alt="" />
                    <div className="description-subtitle">
                        <p>сообщество сильного окружения</p>
                    </div>

                    <button className="club__button">
                        Вступить в клуб
                        <div>
                            <img src={arrowButton} alt="" />
                        </div>
                    </button>

                    <div className="description-content">
                        <img className="description-content__cube" src={blackYellowCube} alt="" />
                        <h3 className="description-content__title">
                            клуб - <br />
                            <span>это:</span>
                        </h3>

                        <div className="description-content__text">
                            <p>
                                Сообщество предпринимателей, в котором каждый может найти бизнес-партнёров и наставников, повысить узнаваемость своей компании и развить своё дело на региональном и
                                федеральном уровнях <br /> <br /> Сообщество предпринимателей, в котором каждый может найти бизнес-партнёров и наставников, повысить узнаваемость своей компании и
                                развить своё дело на региональном и федеральном уровнях
                            </p>
                            <div className="description-content__subjects">
                                {subjects.map((subject) => {
                                    return (
                                        <span className="subject" key={subject}>
                                            {subject}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="club-mission">
                <img className="mission-bg-element" src={elementBg2} alt="" />
                <div className="mission-container">
                    <div className="mission-mobile-cube">
                        <img src={blackYellowCube} alt="" />
                    </div>
                    <img className="mission-cube" src={blackWhiteCube} alt="" />
                    <div className="mission-bg">
                        <img src={bgOrange} alt="" />
                    </div>

                    <div className="mission-header">
                        <h3 className="mission-header__title">
                            наша
                            <br />
                            <span>миссия:</span>
                        </h3>

                        <div className="mission-header__text">
                            <p>
                                <span>вдохновлять</span> молодых людей делать бизнес в России,
                                <span>брать ответственность за себя</span>, за своё окружение, за свой регион и будущее страны!
                            </p>
                        </div>
                    </div>
                    <h4 className="mission__subtitle">
                        поэтому мы создали уникальную среду,
                        <br />
                        где ты получишь:
                    </h4>
                    <div className="mission-content">
                        <div className="mission-content__subjects">
                            {missionSubjects.map((subject) => {
                                return (
                                    <div key={subject} className="subject">
                                        <div className="subject__img">
                                            <img src={arrowMission} alt="" />
                                        </div>
                                        <span
                                            className="subject__text"
                                            dangerouslySetInnerHTML={{
                                                __html: subject,
                                            }}
                                        ></span>
                                    </div>
                                );
                            })}
                        </div>
                        <button className="club__button">
                            Вступить в клуб
                            <div>
                                <img src={arrowButton} alt="" />
                            </div>
                        </button>
                        <button className="mission-content__button">
                            Вступить в клуб
                            <div>
                                <img src={arrowButton} alt="" />
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <section className="club-members">
                <div className="members-container">
                    <img className="members-cube" src={blackYellowCube} alt="" />
                    <div className="members-bg">
                        <img src={bgYellow} alt="" />
                    </div>

                    <div className="members-header">
                        <span className="members-header__subtitle">донецкий</span>
                        <h3 className="members-header__title">клуб в лицах:</h3>
                    </div>

                    <div className="members-content">
                        <button onClick={() => handlePrev(sliderRef1)} className="members-content__button members-content__button--left">
                            <img src={arrowSlider} alt="" />
                        </button>
                        <div className="members-content-slider">
                            <Swiper
                                ref={sliderRef1}
                                modules={[Navigation]}
                                spaceBetween={30}
                                breakpoints={{
                                    430: {
                                        slidesPerView: 1.3,
                                        centeredSlides: true,
                                    },
                                    1000: {
                                        slidesPerView: 3,
                                        centeredSlides: false,
                                    },
                                }}
                            >
                                {members.map((member) => (
                                    <SwiperSlide key={member.id}>
                                        <div className="slider-item">
                                            <img className="slider-item__img" src={member.avatar} alt="" />
                                            <div className="slider-item-info">
                                                <span className="slider-item__title">{member.name}</span>
                                                <span className="slider-item__subtitle">{member.position}</span>
                                            </div>
                                            <p className="slider-item__text">{member.content}</p>
                                            <div className="slider-item__arrow">
                                                <img src={arrowItem} alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <SwiperSlide>
                                    <div className="slider-item--end">
                                        <img className="slider-item--end__img" src={questionMark} alt="" />
                                        <span className="slider-item--end__title">Может это место для тебя?</span>
                                        <button className="slider-item--end__button">Вступить в клуб</button>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <button onClick={() => handleNext(sliderRef1)} className="members-content__button members-content__button--right">
                            <img src={arrowSlider} alt="" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="club-event">
                <div className="event-container">
                    <div className="event-cube">
                        <img src={blackWhiteCube} alt="" />
                    </div>

                    <div className="event-header">
                        <span className="event-header__subtitle">Спеши посетить</span>
                        <h3 className="event-header__title">
                            Мероприятия <br />в Донецке
                        </h3>
                    </div>

                    <div className="event-content">
                        <div className="content-tomorrow">
                            <h4 className="content__title">
                                16.08 <br />
                                <span>Завтра</span>
                            </h4>
                            <div className="tomorrow-item">
                                <img className="tomorrow-item__img" src={event} alt="" />
                                <div className="tomorrow-item-info">
                                    <span className="tomorrow-item__title">Гульки гуляльные</span>
                                    <span className="tomorrow-item__subtitle">Донецк</span>
                                </div>
                                <p className="tomorrow-item__text">
                                    мероприятие бла бла бла бла бла мероприятие бла бла бла бла бла мероприятие бла бла бла бла бла мероприятие бла бла бла бла бла мероприятие бла бла бла бла бла
                                    мероприятие бла бламероприятие бла
                                </p>
                                <div className="tomorrow-item__arrow">
                                    <img src={arrowEvent} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="content-month">
                            <h4 className="content__title">
                                Август
                                <img src={iconCalendar} alt="" /> <br />
                                <span>месяц</span>
                            </h4>
                            <div className="month-container">
                                <div className="month-item">
                                    <img className="month-item__img" src={event} alt="" />
                                    <div className="month-item-container">
                                        <div className="month-item-info">
                                            <span className="month-item__date">
                                                <img src={iconCalendar} alt="" />
                                                17.08.2024
                                            </span>
                                            <span className="month-item__position">
                                                <img src={iconPosition} alt="" />
                                                Рамада
                                            </span>
                                        </div>
                                        <h5 className="month-item__title">6 окружных мероприятий клуба</h5>
                                        <p className="month-item__text">
                                            <br />
                                            Встречи предпринимателей с представителями региональных сетевых торговых площадок в формате круглых...
                                        </p>
                                    </div>
                                </div>
                                <div className="month-item">
                                    <img className="month-item__img" src={event} alt="" />
                                    <div className="month-item-container">
                                        <div className="month-item-info">
                                            <span className="month-item__date">
                                                <img src={iconCalendar} alt="" />
                                                17.08.2024
                                            </span>
                                            <span className="month-item__position">
                                                <img src={iconPosition} alt="" />
                                                Рамада
                                            </span>
                                        </div>
                                        <h5 className="month-item__title">6 окружных мероприятий клуба</h5>
                                        <p className="month-item__text">
                                            <br />
                                            Встречи предпринимателей с представителями региональных сетевых торговых площадок в формате круглых...
                                        </p>
                                    </div>
                                </div>
                                <div className="month-item">
                                    <img className="month-item__img" src={event} alt="" />
                                    <div className="month-item-container">
                                        <div className="month-item-info">
                                            <span className="month-item__date">
                                                <img src={iconCalendar} alt="" />
                                                17.08.2024
                                            </span>
                                            <span className="month-item__position">
                                                <img src={iconPosition} alt="" />
                                                Рамада
                                            </span>
                                        </div>
                                        <h5 className="month-item__title">6 окружных мероприятий клуба</h5>
                                        <p className="month-item__text">
                                            <br />
                                            Встречи предпринимателей с представителями региональных сетевых торговых площадок в формате круглых...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="event-text">
                        Чтобы <span>быть в курсе</span> всех мероприятий клуба
                    </p>
                    <button className="club__button">
                        Вступить в клуб
                        <div>
                            <img src={arrowButton} alt="" />
                        </div>
                    </button>
                </div>
            </section>

            <section className="club-news">
                <img src={blackYellowCube} alt="" className="news-cube" />
                <div className="news-container">
                    <div className="news-bg">
                        <img src={bgBlack} alt="" />
                    </div>
                    <div className="news-header">
                        <span className="news-header__subtitle">интересно посмотреть</span>
                        <h3 className="news-header__title">новости клуба</h3>
                    </div>

                    <div className="news-content">
                        <button className="news-content__button news-content__button--left" onClick={() => handlePrev(sliderRef2)}>
                            <img src={arrowSlider} alt="" />
                        </button>
                        <div className="news-content-slider">
                            <Swiper
                                ref={sliderRef2}
                                modules={[Navigation]}
                                spaceBetween={10}
                                breakpoints={{
                                    430: {
                                        slidesPerView: 1.1,
                                        centeredSlides: true,
                                    },
                                    1000: {
                                        slidesPerView: 2,
                                        centeredSlides: false,
                                    },
                                }}
                            >
                                {news.map((news) => (
                                    <SwiperSlide key={news.id}>
                                        <div className="slider-item">
                                            <img className="slider-item__img" src={news.img} alt="" />
                                            <h5 className="slider-item__title">{news.title}</h5>
                                            <p
                                                className="slider-item__text"
                                                dangerouslySetInnerHTML={{
                                                    __html: news.content,
                                                }}
                                            ></p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <button onClick={() => handleNext(sliderRef2)} className="news-content__button news-content__button--right">
                            <img src={arrowSlider} alt="" />
                        </button>
                    </div>
                    <h4 className="news__subtitle">Донецк город герой</h4>
                </div>
            </section>

            <section className="club-footer">
                <div className="footer-container">
                    <div className="footer-cube">
                        <img src={orangeBlackCube} alt="" />
                    </div>
                    <div className="footer-bg">
                        <img src={bgWhite} alt="" />
                    </div>
                    <div className="footer-logo">
                        <img src={headerLogo1} alt="" />
                        <div className="footer-logo--sub">
                            <img src={headerText} alt="" />
                            <img src={headerLogo2} alt="" />
                        </div>
                    </div>
                    <div className="footer-nav">
                        <Link to="#">мероприятия</Link>
                        <Link to="#">новости клуба</Link>
                        <Link to="#">контакты</Link>
                        <Link to="#">о клубе</Link>
                        <Link to="#">ценности</Link>
                        <Link to="#">клуб в лицах</Link>
                    </div>
                    <div className="footer-content">
                        <span>
                            Подпишись. чтобы быть
                            <br />в курсе новостей
                        </span>
                        <div className="content__social-icons">
                            <Link to="#">
                                <div className="social-icon">
                                    <img src={iconTg} alt="" />
                                </div>
                            </Link>
                            <Link to="#">
                                <div className="social-icon">
                                    <img src={iconVk} alt="" />
                                </div>
                            </Link>
                        </div>
                        <Link className="content__link" to="#">
                            Политика конфиденциальности
                        </Link>
                        <Link className="content__link" to="#">
                            Согласие на обработку данных
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
};
