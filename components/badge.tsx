import Link from "next/link"
import { cn } from "@/lib/utils"

interface Props {
    link: string
};

export const Badge = (props: Props) => {
    const { link } = props
    return (

        <Link href={link} target="_blank" rel="noopener noreferrer" title="Product Hunt link"
            className="product-hunt-badge"

        >

            <svg width="122" height="37" viewBox="0 0 122 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4_2)">
                    <path d="M104.953 36.286C100.733 37.92 99.017 36.372 99.017 35.395C100.512 35.269 104.084 35.064 104.953 36.286ZM110.309 34.95C109.261 35.7202 107.974 36.093 106.676 36.0019C105.379 35.9109 104.156 35.3619 103.226 34.453C104.666 34.053 108.598 33.579 110.309 34.95ZM103.17 31.774C103.33 33.807 101.248 34.95 99 35.115C99.41 33.07 101.509 32.157 103.17 31.774ZM107.202 29.9C107.44 30.769 107.113 33.128 103.879 34.064C104.018 32.471 104.865 30.397 107.202 29.9ZM113.615 32.265C112.786 33.0923 111.693 33.6025 110.526 33.7069C109.359 33.8112 108.193 33.503 107.23 32.836C108.526 32.168 111.638 31.266 113.615 32.265ZM110.198 27.559C110.641 28.415 110.735 30.854 107.872 32.322C107.706 30.752 108.337 28.067 110.198 27.559ZM117.281 28.507C117.011 29.0373 116.637 29.5073 116.18 29.8884C115.723 30.2695 115.194 30.5538 114.624 30.724C114.059 30.8898 113.466 30.9363 112.883 30.8605C112.299 30.7848 111.738 30.5884 111.234 30.284C113.039 28.587 115.919 27.936 117.281 28.507ZM113.001 23.96C114.285 26.2 112.928 28.758 111.516 29.809C110.888 27.727 111.465 25.458 113.001 23.96ZM119.663 23.863C119.818 27.342 116.185 27.153 114.479 27.176C115.016 26.445 118.001 23.795 119.663 23.863ZM115.183 20.613C115.858 21.356 116.871 24.212 114.628 26.542C113.925 24.857 113.771 22.27 115.183 20.613ZM121.568 19.071C121.684 21.881 119.319 23.303 117.038 23.281C117.724 21.927 119.558 19.317 121.568 19.071ZM116.783 17.135C118.295 18.025 118.123 20.899 117.231 22.395C116.229 21.002 115.481 19.271 116.783 17.135ZM121.667 14.502C122.415 17.061 120.217 18.792 118.898 18.94C119.236 17.718 119.678 15.553 121.667 14.502ZM117.06 13.651C118.727 14.486 119.517 16.483 118.893 18.283C117.73 17.346 116.329 15.364 117.06 13.651ZM121.745 10.555C122.775 13.668 120.41 14.685 119.53 14.935C119.635 13.611 120.477 10.972 121.745 10.555ZM117.126 9.738C117.802 9.933 119.729 11.515 119.38 14.348C118.112 13.634 116.572 12.274 117.126 9.738ZM121.047 5.838C122.199 9.664 120.277 11.235 119.646 11.548C119.546 10.338 119.424 7.511 121.047 5.838ZM116.783 5.934C117.99 6.271 119.513 8.487 119.441 10.618C118.245 10.07 116.456 7.791 116.783 5.934ZM117.143 0C119.945 2.896 120.338 5.18 119.519 7.996C118.25 6.854 117.237 3.427 117.143 0ZM17.047 36.286C21.267 37.92 22.983 36.372 22.983 35.395C21.488 35.269 17.916 35.064 17.047 36.286ZM11.69 34.95C12.738 35.7202 14.0254 36.093 15.3228 36.0019C16.6201 35.9109 17.8429 35.3619 18.773 34.453C17.333 34.053 13.401 33.579 11.69 34.95ZM18.829 31.774C18.669 33.807 20.751 34.95 22.999 35.115C22.589 33.07 20.49 32.157 18.829 31.774ZM14.798 29.9C14.56 30.769 14.887 33.128 18.121 34.064C17.982 32.471 17.135 30.397 14.798 29.9ZM8.38501 32.265C9.21426 33.0923 10.3074 33.6025 11.4741 33.7069C12.6408 33.8112 13.8071 33.503 14.77 32.836C13.474 32.168 10.362 31.266 8.38501 32.265ZM11.802 27.559C11.359 28.415 11.265 30.854 14.128 32.322C14.294 30.752 13.663 28.067 11.802 27.559ZM4.71901 28.507C4.98853 29.0373 5.36304 29.5073 5.81979 29.8884C6.27655 30.2695 6.80601 30.5538 7.37601 30.724C7.94069 30.8898 8.53367 30.9363 9.11728 30.8605C9.70089 30.7848 10.2624 30.5884 10.766 30.284C8.96101 28.587 6.08101 27.936 4.71901 28.507ZM8.99901 23.96C7.71501 26.2 9.07201 28.758 10.484 29.809C11.112 27.727 10.536 25.458 9.00001 23.96H8.99901ZM2.33701 23.863C2.18201 27.342 5.81501 27.153 7.52101 27.176C6.98401 26.445 3.99901 23.795 2.33701 23.863ZM6.81701 20.613C6.14201 21.356 5.12901 24.212 7.37201 26.542C8.07501 24.857 8.22901 22.27 6.81701 20.613ZM0.433011 19.071C0.317011 21.881 2.68201 23.303 4.96301 23.281C4.27701 21.927 2.44301 19.317 0.433011 19.071ZM5.21801 17.135C3.70601 18.025 3.87801 20.899 4.77001 22.395C5.77201 21.002 6.52001 19.271 5.21801 17.135ZM0.333011 14.502C-0.414989 17.061 1.78301 18.792 3.10201 18.94C2.76401 17.718 2.32101 15.553 0.332011 14.502H0.333011ZM4.94001 13.651C3.27301 14.486 2.48301 16.483 3.10701 18.283C4.27001 17.346 5.67101 15.364 4.94001 13.651ZM0.255011 10.555C-0.774989 13.668 1.59001 14.685 2.47001 14.935C2.36501 13.611 1.52301 10.972 0.255011 10.555ZM4.87401 9.738C4.19801 9.933 2.27101 11.515 2.62001 14.348C3.88801 13.634 5.42801 12.274 4.87401 9.738ZM0.953011 5.838C-0.198989 9.664 1.72301 11.235 2.35401 11.548C2.45401 10.338 2.57601 7.511 0.953011 5.838ZM5.21701 5.934C4.01001 6.271 2.48701 8.487 2.55901 10.618C3.75501 10.07 5.54401 7.791 5.21701 5.934ZM4.85701 0C2.05501 2.896 1.66201 5.18 2.48101 7.996C3.75001 6.854 4.76301 3.427 4.85701 0Z" fill="currentColor" />
                    <path d="M17.2641 8.15625V11H15.968V3.15781H18.3469C19.2474 3.15781 19.9456 3.36745 20.4414 3.78672C20.9372 4.20599 21.1852 4.79661 21.1852 5.55859C21.1852 6.32057 20.9263 6.94401 20.4086 7.42891C19.8909 7.9138 19.1909 8.15625 18.3086 8.15625H17.2641ZM17.2641 4.22969V7.09531H18.1062C18.6641 7.09531 19.0888 6.96589 19.3805 6.70703C19.6721 6.44818 19.818 6.08359 19.818 5.61328C19.818 4.69089 19.282 4.22969 18.2102 4.22969H17.2641ZM25.6258 6.60859C25.4727 6.48828 25.2521 6.42813 24.9641 6.42813C24.5885 6.42813 24.275 6.59766 24.0234 6.93672C23.7719 7.27578 23.6461 7.73698 23.6461 8.32031V11H22.3773V5.4H23.6461V6.55391H23.668C23.7919 6.16016 23.9815 5.85391 24.2367 5.63516C24.4956 5.41276 24.7836 5.30156 25.1008 5.30156C25.3305 5.30156 25.5055 5.3362 25.6258 5.40547V6.60859ZM28.907 11.1312C28.043 11.1312 27.3521 10.8706 26.8344 10.3492C26.3203 9.82422 26.0633 9.12969 26.0633 8.26563C26.0633 7.325 26.3312 6.59036 26.8672 6.06172C27.4068 5.53307 28.1323 5.26875 29.0437 5.26875C29.9187 5.26875 30.6005 5.52578 31.0891 6.03984C31.5776 6.55391 31.8219 7.26667 31.8219 8.17813C31.8219 9.07135 31.5576 9.78776 31.0289 10.3273C30.5039 10.8633 29.7966 11.1312 28.907 11.1312ZM28.9672 6.28047C28.4714 6.28047 28.0794 6.45365 27.7914 6.8C27.5034 7.14635 27.3594 7.62396 27.3594 8.23281C27.3594 8.81979 27.5052 9.28281 27.7969 9.62188C28.0885 9.95729 28.4786 10.125 28.9672 10.125C29.4667 10.125 29.8495 9.95911 30.1156 9.62734C30.3854 9.29557 30.5203 8.82344 30.5203 8.21094C30.5203 7.59479 30.3854 7.11901 30.1156 6.78359C29.8495 6.44818 29.4667 6.28047 28.9672 6.28047ZM38.2094 11H36.9406V10.0484H36.9187C36.5104 10.7703 35.8815 11.1312 35.032 11.1312C34.343 11.1312 33.7906 10.8815 33.375 10.382C32.963 9.87891 32.757 9.19531 32.757 8.33125C32.757 7.40521 32.9849 6.66328 33.4406 6.10547C33.9 5.54766 34.5107 5.26875 35.2727 5.26875C36.0273 5.26875 36.576 5.57135 36.9187 6.17656H36.9406V2.70938H38.2094V11ZM36.957 8.44063V7.70781C36.957 7.31042 36.8276 6.97318 36.5687 6.69609C36.3099 6.41901 35.9799 6.28047 35.5789 6.28047C35.1049 6.28047 34.7312 6.45729 34.4578 6.81094C34.188 7.16458 34.0531 7.65495 34.0531 8.28203C34.0531 8.85078 34.1826 9.30104 34.4414 9.63281C34.7039 9.96094 35.0557 10.125 35.4969 10.125C35.9307 10.125 36.2826 9.96641 36.5523 9.64922C36.8221 9.32839 36.957 8.92552 36.957 8.44063ZM44.75 11H43.4812V10.1141H43.4594C43.0911 10.7922 42.5187 11.1312 41.7422 11.1312C40.4187 11.1312 39.757 10.3365 39.757 8.74688V5.4H41.0258V8.61563C41.0258 9.62188 41.4141 10.125 42.1906 10.125C42.5661 10.125 42.8742 9.98646 43.1148 9.70938C43.3591 9.43229 43.4812 9.06953 43.4812 8.62109V5.4H44.75V11ZM50.4156 10.743C49.9672 11.0018 49.4367 11.1312 48.8242 11.1312C47.993 11.1312 47.3221 10.8724 46.8117 10.3547C46.3013 9.83333 46.0461 9.15885 46.0461 8.33125C46.0461 7.40885 46.3195 6.66875 46.8664 6.11094C47.4169 5.54948 48.1516 5.26875 49.0703 5.26875C49.5807 5.26875 50.031 5.35807 50.4211 5.53672V6.71797C50.031 6.4263 49.6154 6.28047 49.1742 6.28047C48.6383 6.28047 48.199 6.46276 47.8562 6.82734C47.5135 7.18828 47.3422 7.66224 47.3422 8.24922C47.3422 8.82891 47.5026 9.28646 47.8234 9.62188C48.1479 9.95729 48.5818 10.125 49.125 10.125C49.5807 10.125 50.0109 9.96276 50.4156 9.63828V10.743ZM54.632 10.9398C54.3841 11.0638 54.0578 11.1258 53.6531 11.1258C52.5667 11.1258 52.0234 10.6044 52.0234 9.56172V6.39531H51.0883V5.4H52.0234V4.10391L53.2922 3.74297V5.4H54.632V6.39531H53.2922V9.19531C53.2922 9.52708 53.3523 9.76406 53.4727 9.90625C53.593 10.0484 53.7935 10.1195 54.0742 10.1195C54.2893 10.1195 54.4753 10.0576 54.632 9.93359V10.9398ZM61.293 11.1312C60.4289 11.1312 59.738 10.8706 59.2203 10.3492C58.7062 9.82422 58.4492 9.12969 58.4492 8.26563C58.4492 7.325 58.7172 6.59036 59.2531 6.06172C59.7927 5.53307 60.5182 5.26875 61.4297 5.26875C62.3047 5.26875 62.9865 5.52578 63.475 6.03984C63.9635 6.55391 64.2078 7.26667 64.2078 8.17813C64.2078 9.07135 63.9435 9.78776 63.4148 10.3273C62.8898 10.8633 62.1826 11.1312 61.293 11.1312ZM61.3531 6.28047C60.8573 6.28047 60.4654 6.45365 60.1773 6.8C59.8893 7.14635 59.7453 7.62396 59.7453 8.23281C59.7453 8.81979 59.8911 9.28281 60.1828 9.62188C60.4745 9.95729 60.8646 10.125 61.3531 10.125C61.8526 10.125 62.2354 9.95911 62.5016 9.62734C62.7714 9.29557 62.9062 8.82344 62.9062 8.21094C62.9062 7.59479 62.7714 7.11901 62.5016 6.78359C62.2354 6.44818 61.8526 6.28047 61.3531 6.28047ZM68.4844 3.74297C68.313 3.64453 68.118 3.59531 67.8992 3.59531C67.2831 3.59531 66.975 3.94349 66.975 4.63984V5.4H68.2766V6.39531H66.9805V11H65.7117V6.39531H64.7547V5.4H65.7117V4.49219C65.7117 3.90156 65.9049 3.43672 66.2914 3.09766C66.6779 2.75495 67.1609 2.58359 67.7406 2.58359C68.0542 2.58359 68.3021 2.61823 68.4844 2.6875V3.74297ZM75.2164 10.9398C74.9685 11.0638 74.6422 11.1258 74.2375 11.1258C73.151 11.1258 72.6078 10.6044 72.6078 9.56172V6.39531H71.6727V5.4H72.6078V4.10391L73.8766 3.74297V5.4H75.2164V6.39531H73.8766V9.19531C73.8766 9.52708 73.9367 9.76406 74.057 9.90625C74.1773 10.0484 74.3779 10.1195 74.6586 10.1195C74.8737 10.1195 75.0596 10.0576 75.2164 9.93359V10.9398ZM81.2867 11H80.018V7.9375C80.018 6.82917 79.6479 6.275 78.9078 6.275C78.5359 6.275 78.2224 6.43542 77.9672 6.75625C77.712 7.07708 77.5844 7.48724 77.5844 7.98672V11H76.3102V2.70938H77.5844V6.32969H77.6062C78.0292 5.6224 78.6344 5.26875 79.4219 5.26875C80.6651 5.26875 81.2867 6.02891 81.2867 7.54922V11ZM87.5703 8.54453H83.7531C83.7677 9.06224 83.9263 9.46146 84.2289 9.74219C84.5352 10.0229 84.9544 10.1633 85.4867 10.1633C86.0846 10.1633 86.6333 9.98464 87.1328 9.62734V10.65C86.6224 10.9708 85.9479 11.1312 85.1094 11.1312C84.2854 11.1312 83.6383 10.8779 83.168 10.3711C82.7013 9.86068 82.468 9.14427 82.468 8.22188C82.468 7.35052 82.725 6.64141 83.2391 6.09453C83.7568 5.54401 84.3984 5.26875 85.1641 5.26875C85.9297 5.26875 86.5221 5.51484 86.9414 6.00703C87.3607 6.49922 87.5703 7.18281 87.5703 8.05781V8.54453ZM86.3453 7.64766C86.3417 7.19193 86.2341 6.83828 86.0227 6.58672C85.8112 6.33151 85.5195 6.20391 85.1477 6.20391C84.7831 6.20391 84.4732 6.33698 84.218 6.60313C83.9664 6.86927 83.8115 7.21745 83.7531 7.64766H86.3453ZM96.9547 11H95.6859V10.0484H95.6641C95.2557 10.7703 94.6268 11.1312 93.7773 11.1312C93.0883 11.1312 92.5359 10.8815 92.1203 10.382C91.7083 9.87891 91.5023 9.19531 91.5023 8.33125C91.5023 7.40521 91.7302 6.66328 92.1859 6.10547C92.6453 5.54766 93.256 5.26875 94.018 5.26875C94.7727 5.26875 95.3214 5.57135 95.6641 6.17656H95.6859V2.70938H96.9547V11ZM95.7023 8.44063V7.70781C95.7023 7.31042 95.5729 6.97318 95.3141 6.69609C95.0552 6.41901 94.7253 6.28047 94.3242 6.28047C93.8503 6.28047 93.4766 6.45729 93.2031 6.81094C92.9333 7.16458 92.7984 7.65495 92.7984 8.28203C92.7984 8.85078 92.9279 9.30104 93.1867 9.63281C93.4492 9.96094 93.801 10.125 94.2422 10.125C94.676 10.125 95.0279 9.96641 95.2977 9.64922C95.5674 9.32839 95.7023 8.92552 95.7023 8.44063ZM102.91 11H101.68V10.125H101.658C101.271 10.7958 100.704 11.1312 99.957 11.1312C99.4065 11.1312 98.9745 10.9818 98.6609 10.6828C98.351 10.3839 98.1961 9.98828 98.1961 9.49609C98.1961 8.4388 98.8049 7.82266 100.023 7.64766L101.685 7.4125C101.685 6.61406 101.306 6.21484 100.548 6.21484C99.8805 6.21484 99.2789 6.44453 98.743 6.90391V5.79375C99.3336 5.44375 100.015 5.26875 100.788 5.26875C102.203 5.26875 102.91 5.9651 102.91 7.35781V11ZM101.685 8.24922L100.509 8.41328C100.145 8.46068 99.8695 8.55 99.6836 8.68125C99.5013 8.80885 99.4102 9.0349 99.4102 9.35938C99.4102 9.59635 99.494 9.79141 99.6617 9.94453C99.8331 10.094 100.061 10.1688 100.345 10.1688C100.732 10.1688 101.051 10.0339 101.302 9.76406C101.558 9.49063 101.685 9.14792 101.685 8.73594V8.24922ZM109.314 5.4L106.787 11.8969C106.262 13.0562 105.526 13.6359 104.578 13.6359C104.312 13.6359 104.09 13.6122 103.911 13.5648V12.5094C104.111 12.575 104.294 12.6078 104.458 12.6078C104.932 12.6078 105.285 12.3745 105.519 11.9078L105.896 10.9891L103.67 5.4H105.076L106.41 9.46875C106.425 9.51979 106.458 9.65469 106.509 9.87344H106.536C106.554 9.78958 106.587 9.65833 106.634 9.47969L108.034 5.4H109.314Z" fill="currentColor" />
                    <path d="M47.0059 21.6836V36H44.7402V24.457C44.3301 24.75 43.8874 25.0007 43.4121 25.209C42.9434 25.4108 42.4062 25.5898 41.8008 25.7461V23.8125C42.1784 23.6888 42.543 23.5586 42.8945 23.4219C43.2461 23.2852 43.5911 23.1322 43.9297 22.9629C44.2747 22.7936 44.6198 22.6048 44.9648 22.3965C45.3164 22.1882 45.6777 21.9505 46.0488 21.6836H47.0059ZM50.248 35.4824V33.3535C51.1595 34.0762 52.1882 34.4375 53.334 34.4375C54.265 34.4375 55.0072 34.2259 55.5605 33.8027C56.1204 33.3796 56.4004 32.8066 56.4004 32.084C56.4004 30.4954 55.1862 29.7012 52.7578 29.7012H51.6738V27.8848H52.709C54.8639 27.8848 55.9414 27.1361 55.9414 25.6387C55.9414 24.2585 55.1016 23.5684 53.4219 23.5684C52.4844 23.5684 51.6022 23.9036 50.7754 24.5742V22.5625C51.7259 22.0286 52.849 21.7617 54.1445 21.7617C55.388 21.7617 56.3841 22.0742 57.1328 22.6992C57.8815 23.3242 58.2559 24.125 58.2559 25.1016C58.2559 26.944 57.3184 28.1289 55.4434 28.6562V28.6953C56.4525 28.793 57.25 29.1478 57.8359 29.7598C58.4219 30.3652 58.7148 31.1237 58.7148 32.0352C58.7148 33.2917 58.2428 34.3073 57.2988 35.082C56.3548 35.8503 55.1113 36.2344 53.5684 36.2344C52.1816 36.2344 51.0749 35.9837 50.248 35.4824ZM66.9082 35.8926C66.4655 36.1139 65.8828 36.2246 65.1602 36.2246C63.2201 36.2246 62.25 35.2936 62.25 33.4316V27.7773H60.5801V26H62.25V23.6855L64.5156 23.041V26H66.9082V27.7773H64.5156V32.7773C64.5156 33.3698 64.623 33.793 64.8379 34.0469C65.0527 34.3008 65.4108 34.4277 65.9121 34.4277C66.2962 34.4277 66.6283 34.3171 66.9082 34.0957V35.8926ZM77.748 36H75.4824V30.5312C75.4824 28.5521 74.8216 27.5625 73.5 27.5625C72.8359 27.5625 72.276 27.849 71.8203 28.4219C71.3646 28.9948 71.1367 29.7272 71.1367 30.6191V36H68.8613V21.1953H71.1367V27.6602H71.1758C71.931 26.3971 73.0117 25.7656 74.418 25.7656C76.638 25.7656 77.748 27.123 77.748 29.8379V36Z" fill="currentColor" />
                </g>
                <defs>
                    <clipPath id="clip0_4_2">
                        <rect width="122" height="37" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </Link>
    )
}
