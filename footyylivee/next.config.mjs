import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'crests.football-data.org',
                port: '',
                pathname: '/*'
            },
            {
                protocol: 'https',
                hostname: 'upload.wikipedia.org',
                port: '',
                pathname: '/*/**'
            },
            {
                protocol: 'https',
                hostname: 'media.wired.com',
                port: '',
                pathname: '/*/**'
            },
            {
                protocol: 'https',
                hostname: 's.yimg.com',
                port: '',
                pathname: '/*/**'
                
            },
            {
                protocol: 'https',
                hostname: 'gizmodo.com',
                port: '',
                pathname: '/*/**'
            },
            {
                protocol: 'https',
                hostname: 'www.cnet.com',
                port: '',
                pathname: '/a/img/resize/**'

            },
            {
                protocol: 'https',
                hostname: 'media.npr.org',
                port: '',
                pathname: '/include/images/**'
            },
            {
                protocol: 'https',
                hostname: 'a57.foxsports.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'ichef.bbci.co.uk',
                port: '',
                pathname: '/**', 
            },
            {
                protocol: 'https',
                hostname: 'npr.brightspotcdn.com',
                port: '',
                pathname: '/dims3/**', 
            },
            {
                protocol: 'https',
                hostname: 'readwrite.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'a3.espncdn.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'api.time.com',
                port: '',
                pathname: '/wp-content/uploads/**'
            },
            {
                protocol: 'https',
                hostname: 'i.insider.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;
