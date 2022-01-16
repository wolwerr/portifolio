import { UserInfo } from '../interfaces';

/**
 * In this area, you can define your personal settings, like Github, stacks and more informations
 * 
 * check the @UserInfo interface for more details about this settings
 */

const UserInformation: UserInfo = {
    github: {
        user: 'wolwerr',
        url: 'https://github.com/wolwerr',
    },
    info: {
        name: 'Ricardo Luis Machado',
        role: 'Fullstack Developer',
        bio: '"O meu sonho é criar aplicativos que resolvam nossos problemas do dia a dia"',
        short_bio: '"O meu sonho é criar aplicativos que resolvam nossos problemas do dia a dia" Atualmente sou Desenvolvedor Full Stack na TCS, uma das maiores empresas de TI do mundo.',
        avatar: 'https://avatars.githubusercontent.com/u/86207761?s…00&u=9ec0bc5b96d2b08864e0185508897619849bd7a1&v=4',
        // here stay your resume url
        curriculum: "https://1drv.ms/b/s!Aj3hbRL6FHIVgeFwSPY-IP2KgwQRZQ"
    },
    stacks: [
        'typescript', 
        'javascript',
        'reactjs', 
        
        'nodejs',
        'mongodb',
        
        'mysql',
        'php'
    ],
    social: {
        github: 'https://github.com/wolwerr',
        insta: 'https://www.instagram.com/wolwer/',
        linkedin: 'https://www.linkedin.com/in/ricardolmachado/',
        email: 'ricardo@dtmm.com.br'
    },
    /**
     * parse your Google Analytics ID if you want to do data monitor or
     * remove @ReactGA from index.tsx 
     */
    analyticsID: 'UA-107769128-2'
}

export default UserInformation