import React from "react";
export const HouseIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="23"
      viewBox="0 0 28 23"
      fill="none"
    >
      <path
        d="M1.32275 21.75H26.6772"
        stroke={props.color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.52612 21.75L2.58951 9.08356C2.58951 8.44129 2.95715 7.83066 3.56566 7.43055L12.4398 1.69222C13.3526 1.10259 14.6328 1.10259 15.5583 1.69222L24.4325 7.42001C25.0537 7.82012 25.4086 8.43076 25.4086 9.08356V21.75"
        stroke={props.color}
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M15.2681 16.4856H12.7326C11.6804 16.4856 10.8311 17.191 10.8311 18.065V21.7501H17.1697V18.065C17.1697 17.191 16.3203 16.4856 15.2681 16.4856Z"
        stroke={props.color}
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M10.831 13.0633H8.29556C7.59831 13.0633 7.02783 12.5895 7.02783 12.0104V10.4311C7.02783 9.85198 7.59831 9.37817 8.29556 9.37817H10.831C11.5283 9.37817 12.0987 9.85198 12.0987 10.4311V12.0104C12.0987 12.5895 11.5283 13.0633 10.831 13.0633Z"
        stroke={props.color}
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M19.705 13.0633H17.1696C16.4723 13.0633 15.9019 12.5895 15.9019 12.0104V10.4311C15.9019 9.85198 16.4723 9.37817 17.1696 9.37817H19.705C20.4023 9.37817 20.9728 9.85198 20.9728 10.4311V12.0104C20.9728 12.5895 20.4023 13.0633 19.705 13.0633Z"
        stroke={props.color}
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M22.8748 5.95656L22.8368 2.79785H17.2588"
        stroke={props.color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DifficultyIcon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke={props.color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="css-i6dzq1"
    >
      <line x1="12" y1="20" x2="12" y2="10"></line>
      <line x1="18" y1="20" x2="18" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  );
};

export const PeopleIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={props.color}
      width="24px"
      height="24px"
      viewBox="0 0 640 512"
    >
      <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
    </svg>
  );
};
export const MoneyIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 576 512"
      fill={props.color}
      className="min-w-[24px] min-h-[24px]"
    >
      <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </svg>
  );
};

export const ImageIcon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="css-i6dzq1"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  );
};
