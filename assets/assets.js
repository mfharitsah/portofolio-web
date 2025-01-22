import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-image.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import android_studio from './android-studio.png';
import github from './github.png';
import halfamanage_prev from './halfamanage-prev.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import harris_circle from './harris-profile.png'
import harris_rectangle from './harris-profile2.png'
import ime_prev from './ime-prev.png'
import jbus_prev from './jbus-prev.png'

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  android_studio,
  github,
  instagram,
  linkedin,
  harris_circle,
  harris_rectangle,
  ime_prev,
  jbus_prev
};

export const navbarMenu = [
  {
    name: 'Home',
    link: '#top'
  },
  {
    name: 'Profile',
    link: '#profile'
  },
  {
    name: 'My Works',
    link: '#my-works'
  },
  {
    name: 'Contact Me',
    link: '#contact'
  }
]

export const workData = [
  {
    title: 'Employee Tracker',
    description: 'Fullstack Web',
    bgImage: halfamanage_prev.src,
    full_desc: 'Employee Tracker is a web-based application that helps companies manage their employees, track their attendance, and monitor their performance.', 
    github: 'https://github.com/mfharitsah/Technoskill-AdminDashboard'
  },
  {
    title: 'IME FTUI Web',
    description: 'Frontend Web',
    bgImage: ime_prev.src,
    full_desc: "This website serves as a platform to deliver IME FTUI's services and information effectively to its audience. It ensures streamlined communication and access to essential resources for the DTE students.",
    github: 'https://github.com/mfharitsah/Website-IMEFTUI2024'
  },
  {
    title: 'JBus',
    description: 'Fullstack Mobile App',
    bgImage: jbus_prev.src,
    full_desc: 'JBus is a mobile Android application designed for bus ticket booking. It features an intuitive search functionality allowing users to find tickets based on bus name (argo), destination, and departure date.',
    github: 'https://github.com/mfharitsah/JBus'
  },
  {
    title: 'RentLab',
    description: 'Fullstack Web',
    bgImage: jbus_prev.src,
    full_desc: 'RentLab is a web application for streamlining laboratory equipment loans at FTUI, allowing users to request items with time limits and receive approvals. It also includes an admin dashboard to manage availability and loan requests.',
    github: 'https://github.com/mfharitsah/JBus'
  },
  {
    title: 'Exercise FTUI Web',
    description: 'Frontend Web',
    bgImage: jbus_prev.src,
    full_desc: 'Employee Tracker is a web-based application that helps companies manage their employees, track their attendance, and monitor their performance.',
    github: 'https://github.com/mfharitsah/JBus'
  },
  {
    title: 'UIHelp',
    description: 'Fullstack Web',
    bgImage: jbus_prev.src,
    full_desc: 'Employee Tracker is a web-based application that helps companies manage their employees, track their attendance, and monitor their performance.',
    github: 'https://github.com/mfharitsah/JBus'
  },
  
]

// export const serviceData = [
//   { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
//   { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
//   { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
//   { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
// ]

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Tech Stacks',
    description: 'HTML, CSS, Javascript, React JS, Next JS, Express JS, PostgreSQL'
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'Penultimate student of Computer Science at the University of Indonesia'
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Up to 10 web and mobile app projects'
  },
]

export const toolsData = [
  {
    icon: assets.vscode,
    title: 'VS Code',
  },
  {
    icon: assets.github,
    title: 'Github',
  },
  {
    icon: assets.mongodb,
    title: 'MongoDB',
  },
  {
    icon: assets.android_studio,
    title: 'Android Studio',
  },
  {
    icon: assets.figma,
    title: 'Figma',
  },
]

export const socialMediaData = [
  {
    icon: assets.github,
    link: 'https://github.com/mfharitsah',
    name: 'Github'
  },
  {
    icon: assets.linkedin,
    link: 'https://www.linkedin.com/in/mfharitsah/',
    name: 'LinkedIn'
  },
  {
    icon: assets.instagram,
    link: 'https://www.instagram.com/harristsah/',
    name: 'Instagram'
  },
]