import p1 from '../assets/Projects/p1.png';
import p2 from '../assets/Projects/p2.png';
import p3 from '../assets/Projects/p3.png';
import p4 from '../assets/Projects/p4.png';
import p5 from '../assets/Projects/p5.png';

const Projects = [
    {
        id: 1,
        title:"Featured Project (freelance)",
        name: "Sreemedisystems – Medical Equipment Web App (MERN Stack)",
        image: p1,
        description:"Designed and developed a web application for a biomedical equipment company using the MERN stack. Key features include product listings, online store functionality, a hospital login portal for service requests, an engineer dashboard for managing on-site services, and a comprehensive admin panel for inventory management and business card creation. The platform improved operational efficiency and digitalized the service request workflow.",
        github:"https://github.com/vishwas-thangella/SMSMD.git"
    },
    {
        id: 2,
        title:"Featured Project (freelance)",
        name: "ChaseYourDreamsIndia Platform – MERN + React Native",
        image: p2,
        description:"Built a complete mental health and counseling platform with both web and mobile applications. The web app was created using the MERN stack and the mobile app with React Native. Features include counselor profiles, session booking, membership plans, coupon integration, and automated emails using Nodemailer. Integrated PhonePe SDK for secure payment processing and automatic invoice generation for a professional client experience.",
        github:"https://github.com/vishwas-thangella/ChaseYourDreamsIndia.git",
        live:"https://chaseyourdreamsindia.com/",
        playstore:"https://play.google.com/store/apps/details?id=com.company.chaseyourdreamsindia&hl=en"
    },
    {
        id: 3,
        title:"Personal Project",
        name: "Real-time Chat App – MERN + Socket.io",
        image: p3,
        description:"Developed a real-time chat application supporting private messaging, online status indicators, and typing notifications. Used the MERN stack along with Socket.io for real-time, bi-directional communication. Designed for smooth user experience and scalability, the app simulates the core features of popular messaging platforms.",
        github:"https://github.com/vishwas-thangella/Chat-App-MERN.git",
        live:"",
        playstore:""
    },
    {
        id:4,
        title:"Time Table Generator",
        name:"College Time Table Generator – MERN Stack",
        image:p4,
        description:"Developed a web-based timetable generator for colleges using the MERN stack. The system automates the generation of conflict-free class schedules based on faculty availability, subjects, and room constraints. Included a user-friendly admin dashboard for managing departments, faculties, and classes. The tool reduces manual workload and eliminates scheduling conflicts.",
        github:"https://github.com/vishwas-thangella/TTKITSW.git",
        live:"",
        playstore:""
    },
    {
        id:5,
        title:"Featured Project (freelance)",
        name:"College Website – React + Firebase",
        image:p5,
        description:"I developed a fully responsive and dynamic website for a college using React and Firebase. The site includes modules for college information, gallery, placement statistics, announcements, and career opportunities. Firebase Firestore was used to manage and update data in real-time. The goal was to provide students and parents with a seamless digital experience that works across devices.",
        github:"",
        live:"https://mjptbcwrdcwomenwargal.ac.in/home",
        playstore:"",
    }
]

export default Projects;