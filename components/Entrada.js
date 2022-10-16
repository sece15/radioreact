// import React, { useEffect } from 'react'
// import styles from "../styles/AudioPlayer.module.css";

// const Entrada = () => {

//     // references
//     const title = useRef();   // reference our audio component
//     const bracket = useRef();
//     const img = useRef();
//     const loadingSection = useRef();
//     const loadingImagesContainer = useRef();
//     const bottomLine = useRef();
//     const loadingScreen = useRef();
//     const wS = useRef();

//     const [allIsLoaded, setAllIsLoaded] = useState(false)
//     const [progressValue, setProgressValue] = useState(0)

//     useEffect(() => {

//     }, [third])

//     useEffect(() => {

//     }, [allIsLoaded])


//     const tl = gsap.timeline();
//     const welcomeScreen = gsap.timeline({
//         paused: "true",
//     });
//     tl.from(`.${title}`, {
//         duration: 0.5,
//         opacity: 0,
//         y: 10,
//     });
//     tl.from(`.${bracket}`, {
//         duration: 0.3,
//         scale: 0,
//         margin: 0,
//     });
//     tl.from("#loader", {
//         duration: 0.2,
//         scale: 0,
//     });
//     tl.from(`${img}`, {
//         duration: 0.8,
//         y: 150,
//         opacity: 0,
//         stagger: {
//             amount: 01,
//         },
//     });
//     tl.from(
//         `.${bottomLine}`,
//         {
//             duration: 0.5,
//             y: 50,
//             opacity: 0,
//             stagger: {
//                 amount: 0.1,
//             },
//         },
//         "-=.5"
//     );


//     // initializing loader
//     let id,
//         i = 0;
//     function loader() {
//         id = setInterval(frame, 45);
//     }
//     function frame() {
//         if (i >= 100) {
//             clearInterval(id);
//             welcomeScreen.play();
//         } else {
//             i++;
//             document.getElementById("loader").innerHTML = i + "%";
//         }
//     }
//     window.onload = function () {
//         loader();
//     };

//     // welcome screen
//     welcomeScreen.to(`.${loadingSection}, .${loadingImagesContainer}`, {
//         y: -10,
//         opacity: 0,
//     });
//     welcomeScreen.to(
//         `.${loadingScreen}`, {
//         duration: 0.8,
//         y: -2000,
//         ease: "Power4.out",
//     });
//     welcomeScreen.from(
//         `.${wS} h1`,
//         {
//             y: 200,
//             duration: 0.5,
//             stagger: {
//                 amount: 0.2,
//             },
//         },
//         "-=.8"
//     );

//     return (
//         <div className={styles.loadingScreen} useRef={loadingScreen}>
//             <div className={styles.loadingSection} useRef={loadingSection}>
//                 <div className={styles.title} useRef={title}>Taimoor</div>
//                 <div className={styles.bracket && styles.bracket1} useRef={bracket}>(</div>
//                 <div id='loader'></div>
//                 <div className={styles.bracket && styles.bracket2} useRef={bracket}>)</div>
//                 <div className={styles.title} useRef={title}>Shahzada</div>
//             </div>
//             <div className={styles.loadingImagesContainer} useRef={loadingImagesContainer}>
//                 <div className={styles.loadingimages} useRef={loadingimages}>
//                     <img useRef={img} src="/images/1.jpg" alt="" /><img useRef={img} src="/images/2.jpg" alt="" /><img
//                         src="/images/3.jpg"
//                         alt=""
//                     /><img useRef={img} src="/images/4.jpg" alt="" /><img useRef={img} src="/images/5.jpg" alt="" /><img
//                         src="/images/6.jpg"
//                         alt=""
//                     /><img useRef={img} src="/images/7.jpg" alt="" /><img useRef={img} src="/images/8.jpg" alt="" /><img
//                         src="/images/9.jpg"
//                         alt=""
//                     /><img useRef={img} src="/images/10.jpg" alt="" /><img useRef={img} src="/images/11.jpg" alt="" /><img
//                         src="/images/12.jpg"
//                         alt=""
//                     /><img useRef={img} src="/images/13.jpg" alt="" /><img useRef={img} src="/images/14.jpg" alt="" /><img
//                         src="/images/15.jpg"
//                         alt=""
//                     /><img useRef={img} src="/images/16.jpg" alt="" /><img useRef={img} src="/images/17.jpg" alt="" />
//                 </div>
//                 <div className={styles.bottomSection}>
//                     <div className={styles.bottomLine} useRef={bottomLine}>An aesthete design studio</div>
//                     <div className={styles.bottomLine} useRef={bottomLine}>2022 &#169;</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Entrada