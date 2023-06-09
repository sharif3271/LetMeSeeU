import React, { useCallback } from 'react';
import { AppButton, GText, RouterContainer } from 'src/components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { AppRoutes } from 'appRoot/src/models';

export function Greeting() {
  const navigate = useNavigate();
  const onGetStarted = useCallback(() => navigate(AppRoutes.userEntry), []);
  return (
    <RouterContainer>
      <div className={'fill flex-col-start'}>
        <div className='greeting-hero'>
          <motion.div
            className='item'
            initial={{x: '100%'}}
            animate={{x: 0, opacity: [0, 0.4, 1]}}
            transition={{delay: 0.4, duration: 0.4}}
          >
            <GreetingWoman />
          </motion.div>
          <motion.div
            initial={{x: '-200%'}}
            animate={{x: '-100%', opacity: [0, 0.4, 1]}}
            transition={{delay: 0.4, duration: 0.4}}
            className='item'
          >
            <GreetingMan />
          </motion.div>
        </div>
        <div className='greeting-title [&>*:not(:first-child)]:ml-4'>
          <motion.p variants={GText} initial='initial' animate='animate' custom={1}>Let</motion.p>
          <motion.p variants={GText} initial='initial' animate='animate' custom={2}>Me</motion.p>
          <motion.p variants={GText} initial='initial' animate='animate' custom={3}>See</motion.p>
          <motion.p variants={GText} initial='initial' animate='animate' custom={4}>you</motion.p>
        </div>
        <motion.div
          whileTap={{ scale: 0.97 }}
          animate={{
            opacity: [0, 0.2, 1],
            y: [200, 150, 50],
            transition: {
              delay: 1.6,
              ease: 'linear',
              duration: 0.7,
              type: 'spring'
            }
          }}
        >
          <AppButton onClick={onGetStarted}>Getting Started</AppButton>
        </motion.div>
      </div>
    </RouterContainer>
  );
}

function GreetingMan() {
  return (
    <svg width='306' height='275' viewBox='0 0 306 275' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M56.7185 25.2265C64.8086 25.2282 72.6097 28.2533 78.6083 33.7149C84.6068 39.1766 88.3752 46.6854 89.1822 54.7845C89.9906 62.8837 87.7799 70.9962 82.9789 77.5479C78.178 84.0996 71.1292 88.6234 63.2004 90.2413C61.3084 90.6451 48.2584 93.4153 43.4735 90.8899C33.337 85.5468 24.0875 70.6961 24.0875 58.0577C24.0875 49.3503 27.5254 40.9996 33.6449 34.8426C39.7644 28.6855 48.0642 25.2265 56.7185 25.2265Z'
        fill='#B58478' />
      <path
        d='M49.7788 72.8507C49.7788 72.8507 61.2766 71.3509 68.5417 68.8648C67.9699 78.1308 68.0982 76.1683 68.0982 76.1683C68.0982 76.1683 57.6671 77.9046 49.7788 72.8507Z'
        fill='white' />
      <path
        d='M32.4151 70.9254L33.2836 75.1168L37.3027 74.2234L36.2155 68.1779C36.2155 68.1779 34.6346 59.5823 42.3514 59.0813C43.5002 47.8384 46.8376 42.4137 56.7421 39.8098C66.6466 37.2059 92.4087 34.4915 89.2838 15.5051C87.8815 6.99929 83.7977 3.91509 79.0077 2.95141C73.7896 1.89271 67.5685 4.3582 63.9528 7.36802C60.9665 9.85417 57.8446 12.989 54.0719 15.5061C50.4971 17.8943 46.53 19.6264 42.3545 20.622C36.3675 21.8697 24.2671 26.1179 25.7588 42.4158C10.0346 53.449 22.0764 69.7872 22.0764 69.7872L32.4151 70.9254Z'
        fill='#1F1950' />
      <path
        d='M26.7648 66.2898C28.3244 66.2898 29.82 66.9131 30.9228 68.0226C32.0256 69.1322 32.6451 70.637 32.6451 72.2061C32.6451 75.4742 34.5607 76.7508 29.3877 78.0605C24.2148 79.3702 20.8845 75.4742 20.8845 72.2061C20.8845 70.637 21.5041 69.1322 22.6068 68.0226C23.7096 66.9131 25.2053 66.2898 26.7648 66.2898Z'
        fill='#B58478' />
      <path
        d='M142.568 274.763C142.568 274.763 145.038 218.057 123.583 99.7614C122.043 91.2618 119.887 88.0826 108.807 87.1117C97.7275 86.1408 38.1578 87.8977 14.9652 96.9633C-0.0454855 102.831 -0.918081 110.336 0.633089 126.567C2.18426 142.797 11.5488 271.11 11.5488 271.11L142.568 274.763Z'
        fill='url(#paint9_linear_1_67)' />
      <path
        d='M116.793 112.527H159.338C159.338 112.527 166.871 112.473 162.888 121.849C158.905 131.224 141.388 173.193 141.388 173.193C141.388 173.193 138.654 179.606 130.274 179.689C121.894 179.772 100.986 179.689 100.986 179.689H83.6858L82.3759 178.243L105.919 119.059C105.919 119.059 107.52 112.527 116.793 112.527Z'
        fill='#A9A9A9' />
      <path
        d='M91.7292 172.096C100.349 163.617 108.422 154.593 115.9 145.08C118.702 141.418 120.622 139.825 121.416 139.929C122.284 140.044 118.144 148.295 117.419 149.741C116.835 150.917 115.442 154.516 124.242 151.394C135.011 147.578 154.81 139.39 156.39 143.717C157.97 148.043 129.792 164.006 97.5817 179.162C65.3716 194.317 91.7292 172.096 91.7292 172.096Z'
        fill='#B58478' />
      <path
        d='M25.2024 120.48C26.3603 132.708 31.2377 172.662 45.7566 182.276C63.0423 193.722 93.9928 162.167 93.9928 162.167L109.276 180.976C109.276 180.976 52.916 250.53 14.2949 200.957C-2.074 179.942 0.142397 116.043 0.142397 116.043C0.142397 116.043 0.861003 112.662 7.67547 108.356C10.5335 106.548 17.465 106.146 19.6588 105.87C26.4004 105.025 24.9457 117.78 25.2024 120.48Z'
        fill='url(#paint10_linear_1_67)' />
      <path d='M154.554 143.362L132.859 152.284M154.924 145.585L134.929 156.181' stroke='#77493E' strokeWidth='0.5'
        strokeLinecap='round' />
      <ellipse cx='114.5' cy='122' rx='2.5' ry='3' transform='rotate(30 114.5 122)' fill='#2C2727' fillOpacity='0.57' />
      <ellipse cx='114.549' cy='161.75' rx='0.933013' ry='1.48205' transform='rotate(30 114.549 161.75)' fill='#2C2727'
        fillOpacity='0.57' />
      <defs>
        <linearGradient id='paint9_linear_1_67' x1='40.0047' y1='151.508' x2='53.0531' y2='263.791'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#1CA86D' />
          <stop offset='1' stopColor='#81E0C1' />
        </linearGradient>
        <linearGradient id='paint10_linear_1_67' x1='9.98221' y1='116.448' x2='63.4982' y2='218.739'
          gradientUnits='userSpaceOnUse'>
          <stop offset='0.17403' stopColor='#1CA86A' />
          <stop offset='1' stopColor='#81E0C1' />
        </linearGradient>
      </defs>
    </svg>
  );
}
function GreetingWoman() {
  return (
    <svg width='306' height='275' viewBox='0 0 306 275' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M168.158 90.0415C168.158 90.0415 122.954 167.882 70.027 168.199C17.1004 168.516 127.045 183.014 128.006 184.312C128.968 185.609 149.434 170.241 162.851 152.107C176.267 133.974 168.158 90.0415 168.158 90.0415Z'
        fill='#0059B0' />
      <path
        d='M216.617 93.9266C216.617 93.9266 205.206 96.2942 200.268 89.9584C195.33 83.6225 199.478 78.5697 199.478 78.5697C199.478 78.5697 192.397 73.9432 193.491 67.0594C193.979 64.1804 195.588 61.6166 197.969 59.9259C200.35 58.2353 203.309 57.5547 206.203 58.0324C206.992 52.1766 211.562 45.4012 223.572 49.5889C235.582 53.7765 256.615 59.3644 265.435 72.2385C274.255 85.1125 216.617 93.9266 216.617 93.9266Z'
        fill='url(#paint0_linear_1_67)' />
      <path
        d='M211.617 75.9267C211.617 75.9267 200.206 78.2943 195.268 71.9584C190.33 65.6225 194.478 60.5697 194.478 60.5697C194.478 60.5697 187.397 55.9432 188.491 49.0594C188.979 46.1805 190.588 43.6166 192.969 41.926C195.35 40.2353 198.309 39.5548 201.203 40.0325C201.992 34.1767 206.562 27.4013 218.572 31.5889C230.582 35.7765 251.615 41.3645 260.435 54.2385C269.255 67.1125 211.617 75.9267 211.617 75.9267Z'
        fill='url(#paint1_linear_1_67)' />
      <path
        d='M270.962 53.3544C270.962 53.3544 282.615 53.2075 286.253 60.3692C289.892 67.5309 284.856 71.6995 284.856 71.6995C284.856 71.6995 290.924 77.592 288.537 84.1407C287.509 86.8736 285.439 89.0832 282.78 90.2885C280.12 91.4938 277.085 91.5972 274.336 90.5762C272.444 96.1738 266.665 101.953 255.675 95.5504C244.685 89.1482 225.105 79.6496 218.903 65.3291C212.701 51.0086 270.962 53.3544 270.962 53.3544Z'
        fill='url(#paint2_linear_1_67)' />
      <path
        d='M251.145 26.4847C251.145 26.4847 260.109 19.0373 267.443 22.3133C274.778 25.5893 273.488 31.9978 273.488 31.9978C273.488 31.9978 281.912 32.7587 284.178 39.35C285.099 42.1211 284.881 45.1405 283.573 47.751C282.264 50.3615 279.971 52.3517 277.192 53.2883C279.244 58.8294 278.39 66.9571 265.82 68.8979C253.25 70.8386 232.055 75.7791 218.223 68.553C204.392 61.3268 251.145 26.4847 251.145 26.4847Z'
        fill='url(#paint3_linear_1_67)' />
      <path
        d='M219.157 37.9803C219.157 37.9803 211.102 29.5582 213.859 22.013C216.615 14.4678 223.098 15.3075 223.098 15.3075C223.098 15.3075 223.27 6.85128 229.687 4.13067C232.387 3.01893 235.414 3.02533 238.109 4.14849C240.805 5.27165 242.95 7.42062 244.078 10.1276C249.463 7.69411 257.63 7.97919 260.443 20.3831C263.256 32.7869 269.663 53.5851 263.419 67.8874C257.176 82.1897 219.157 37.9803 219.157 37.9803Z'
        fill='url(#paint4_linear_1_67)' />
      <path
        d='M141.241 235.11C141.241 235.11 145.163 173.911 163.761 100.062C167.546 85.0285 172.619 81.5508 190.734 82.0001C207.6 82.4133 260.027 88.0642 284.415 92.8526C309.812 97.8404 301.647 142.281 301.647 142.281L290.504 194.563L247 273.407H210.5H181.5H143.5L141.241 235.11Z'
        fill='url(#paint5_linear_1_67)' />
      <path
        d='M236.001 87.6661C251.876 87.6661 264.746 74.7179 264.746 58.7454C264.746 42.7729 251.876 29.8247 236.001 29.8247C220.126 29.8247 207.257 42.7729 207.257 58.7454C207.257 74.7179 220.126 87.6661 236.001 87.6661Z'
        fill='#FFBFA1' />
      <path
        d='M248.224 62.414C248.224 62.414 236.908 64.9601 229.232 65.1233C232.919 73.6363 233.452 75.0555 233.452 75.0555C233.452 75.0555 240.173 74.0783 248.224 62.414Z'
        fill='white' />
      <path
        d='M229.231 170.238C229.231 170.238 258.899 201.172 268.622 172.613C278.345 144.054 285.283 104.408 285.283 104.408L289.925 96.7181C289.925 96.7181 304.677 101.041 305.549 124.574C306.422 148.107 291.712 221.473 266.561 220.306C241.409 219.138 234.634 211.081 212.509 191.141C229.078 169.9 229.231 170.238 229.231 170.238Z'
        fill='url(#paint6_linear_1_67)' />
      <path d='M165.559 161.133L193.164 160.12M166.335 163.668L191.869 165.218' stroke='#B47E6D' strokeWidth='0.5'
        strokeLinecap='round' />
      <path
        d='M270.78 62.382C271.154 63.8818 270.909 65.4705 270.1 66.7988C269.291 68.127 267.983 69.086 266.464 69.4646C263.301 70.2532 262.525 72.4034 260.017 67.7447C257.509 63.0859 260.482 58.9431 263.644 58.1546C265.163 57.7759 266.768 58.0086 268.106 58.8014C269.444 59.5942 270.406 60.8822 270.78 62.382Z'
        fill='#FFBFA1' />
      <rect x='161.089' y='133.72' width='31.2631' height='63' rx='5' transform='rotate(-15 161.089 133.72)'
        fill='#504A4A' />
      <path
        d='M229.586 171.292C229.586 171.292 202.116 144.173 194.477 143.756C192.584 143.653 202.841 152.609 202.341 153.887C201.842 155.165 203.138 154.528 172.347 158.344C166.22 159.103 160.849 161.774 167.128 164.627C170.17 166.014 179.157 167.312 188.306 168.862C213.934 173.188 236.874 190.907 236.874 190.907L229.586 171.292Z'
        fill='#FFBFA1' />
      <path
        d='M79 176C79 176 43.2953 175.881 37.5995 180.988C36.1879 182.253 49.774 181.333 50.324 182.59C50.8739 183.847 51.3408 182.48 32.266 206.951C28.4706 211.82 26.5614 217.506 33.0182 215.084C36.1507 213.913 43.4233 208.477 50.9881 203.103C72.1691 188.041 106 180.5 106 180.5L79 176Z'
        fill='#FFBFA1' />
      <rect x='166.942' y='136.313' width='10.2099' height='10.0396' rx='2' transform='rotate(-15 166.942 136.313)'
        fill='#07051A' fillOpacity='0.9' />
      <path
        d='M276.095 47.9891C276.095 47.9891 273.612 53.1964 270.045 55.6616C266.478 58.1269 262.355 55.5498 262.355 55.5498C262.355 55.5498 260.3 59.3023 255.404 58.3519C253.351 57.9371 251.337 56.9075 249.801 55.4872C248.265 54.0669 247.33 52.3709 247.201 50.7684C243.058 50.0389 237.687 47.1403 238.663 40.5967C239.638 34.0531 246.06 23.8276 253.5 19.5001C260.94 15.1726 276.095 47.9891 276.095 47.9891Z'
        fill='url(#paint7_linear_1_67)' />
      <path
        d='M246 25.5001C246 25.5001 243.871 30.3597 241.5 37.5001C238.472 40.1186 235.497 38.1396 235.497 38.1396C235.497 38.1396 233.527 42.7635 229.79 42.3597C228.224 42.1753 226.749 40.4559 225.685 39.2942C222.5 39.5001 225 36.5001 224.107 35.1927C221.5 34.0001 223 54 213.421 30.8841C214.816 24.754 214.5 7.50002 232.5 6.50006C258.188 10.525 246 25.5001 246 25.5001Z'
        fill='url(#paint8_linear_1_67)' />
      <defs>
        <linearGradient id='paint0_linear_1_67' x1='111.925' y1='248.109' x2='177.628' y2='289.164'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#7A2D4C' />
          <stop offset='1' stopColor='#3D1726' />
        </linearGradient>
        <linearGradient id='paint1_linear_1_67' x1='106.925' y1='230.109' x2='172.628' y2='271.164'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#7A2D4C' />
          <stop offset='1' stopColor='#3D1726' />
        </linearGradient>
        <linearGradient id='paint2_linear_1_67' x1='403.149' y1='-78.0188' x2='346.488' y2='-130.856'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#7A2D4C' />
          <stop offset='1' stopColor='#3D1726' />
        </linearGradient>
        <linearGradient id='paint3_linear_1_67' x1='271.198' y1='-158.8' x2='193.913' y2='-164.204'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#7A2D4C' />
          <stop offset='1' stopColor='#3D1726' />
        </linearGradient>
        <linearGradient id='paint4_linear_1_67' x1='32.9253' y1='30.9009' x2='32.9253' y2='108.375'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#7A2D4C' />
          <stop offset='1' stopColor='#3D1726' />
        </linearGradient>
        <linearGradient id='paint5_linear_1_67' x1='226.11' y1='134.733' x2='251.119' y2='397.445'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#0069D1' />
          <stop offset='1' stopColor='#003569' />
        </linearGradient>
        <linearGradient id='paint6_linear_1_67' x1='278.222' y1='116.247' x2='211.163' y2='165.943'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#0069D1' />
          <stop offset='1' stopColor='#1879D9' />
        </linearGradient>
        <linearGradient id='paint7_linear_1_67' x1='392.521' y1='113.021' x2='410.31' y2='78.1087'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#7A2D4C' />
          <stop offset='1' stopColor='#3D1726' />
        </linearGradient>
        <linearGradient id='paint8_linear_1_67' x1='334.448' y1='77.4138' x2='351.731' y2='43.4926'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#7A2D4C' />
          <stop offset='1' stopColor='#3D1726' />
        </linearGradient>
      </defs>
    </svg>
  );
}