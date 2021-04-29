import React from 'react';

interface SVGRProps {
  icon: string;
  color?: string;
  height?: number;
  width?: number;
  style?: any;
}

const ICONS: any = {
  love: {
    viewBox: '0 0 10 10',
    fill: 'FF5C5C',
    path:
      'M7.25 0C6.38 0 5.545 0.405 5 1.045C4.455 0.405 3.62 0 2.75 0C1.21 0 0 1.21 0 2.75C0 4.64 1.7 6.18 4.275 8.52L5 9.175L5.725 8.515C8.3 6.18 10 4.64 10 2.75C10 1.21 8.79 0 7.25 0L7.25 0Z',
  },
  unlove: {
    viewBox: '0 0 10 10',
    fill: '#AC8EC9',
    path:
      'M5 1.045C5.545 0.405 6.38 0 7.25 0C8.79 0 10 1.21 10 2.75C10 4.64 8.3 6.18 5.725 8.515L5 9.175L4.275 8.52C1.7 6.18 0 4.64 0 2.75C0 1.21 1.21 0 2.75 0C3.62 0 4.455 0.405 5 1.045ZM5 7.825L5.05 7.775C7.43 5.62 9 4.195 9 2.75C9 1.75 8.25 1 7.25 1C6.48 1 5.73 1.495 5.47 2.18L4.535 2.18C4.27 1.495 3.52 1 2.75 1C1.75 1 1 1.75 1 2.75C1 4.195 2.57 5.62 4.95 7.775L5 7.825Z',
  },
  tick: {
    viewBox: '0 0 12 10',
    fill: '#AECB4F',
    path:
      'M11.8887 2.46456L4.89558 9.64545C4.74715 9.79013 4.50614 9.79013 4.35771 9.64545L0.111323 5.86759C-0.0371076 5.72329 -0.0371076 5.48827 0.111323 5.34434L1.72532 3.77308C1.87375 3.62914 2.48958 3.62914 2.63764 3.77308L4.34834 5.44779L9.46806 0.108793C9.61649 -0.0362643 9.8575 -0.0362643 10.0059 0.108793L11.8887 1.94168C12.0371 2.08562 12.0371 2.32026 11.8887 2.46456L11.8887 2.46456Z',
  },
  untick: {
    viewBox: '0 0 12 10',
    fill: '#AC8EC9',
    path:
      'M4.89558 9.64545L11.8887 2.46456C12.0371 2.32026 12.0371 2.08562 11.8887 1.94168L10.0059 0.108793C9.8575 -0.0362643 9.61649 -0.0362643 9.46806 0.108793L4.34834 5.44779L2.63764 3.77308C2.48958 3.62914 1.87375 3.62914 1.72532 3.77308L0.111323 5.34434C-0.0371076 5.48827 -0.0371076 5.72329 0.111323 5.86759L4.35771 9.64545C4.50614 9.79013 4.74715 9.79013 4.89558 9.64545ZM4.62646 6.24242L9.74618 0.903045L11.0888 2.20968L4.61933 8.85307L0.91832 5.60559L1.99407 4.55871L4.08858 6.24242C4.23739 6.3871 4.47803 6.3871 4.62646 6.24242Z',
  },
  email: {
    viewBox: '0 0 16 14',
    fill: '#8560A9',
    path:
      'M15.9534 1.54153C15.9584 1.56408 15.9609 1.58712 15.9649 1.61017C15.9775 1.67981 15.995 1.74794 16 1.82008L16 11.0683C16 12.1494 15.1238 13.0256 14.0426 13.0256L1.95735 13.0256C0.876225 13.0256 0 12.1494 0 11.0683L0 1.82008C0.00500986 1.74794 0.0220434 1.67981 0.0345681 1.61017C0.0390769 1.58712 0.0415819 1.56408 0.0460907 1.54153C0.0696371 1.43382 0.102702 1.33062 0.142781 1.23042C0.148793 1.21489 0.153302 1.19886 0.159815 1.18383C0.207408 1.07411 0.26402 0.970411 0.329148 0.871716C0.331653 0.868209 0.333657 0.864702 0.335661 0.861196C0.685349 0.343677 1.2705 0.000500986 1.94282 0L14.0572 0C14.7295 0.000500986 15.3147 0.343677 15.6638 0.861196C15.6663 0.864702 15.6683 0.868209 15.6704 0.871716C15.736 0.970411 15.7926 1.07411 15.8397 1.18383C15.8462 1.19886 15.8507 1.21489 15.8572 1.23042C15.8973 1.33062 15.9304 1.43382 15.9534 1.54153ZM2.4563 1.00247L13.5436 1.00247C13.6989 1.00247 13.8457 1.03303 13.9865 1.07812L8.1435 5.76635L7.99971 5.88158L7.85593 5.76635L2.01343 1.07812C2.1537 1.03303 2.30099 1.00247 2.4563 1.00247ZM15.0001 10.5673L15.0001 2.45883C15.0001 2.17877 14.9169 1.91926 14.7801 1.69733L14.69 1.76947L12.6935 3.37112L8.36951 6.83945C8.363 6.84696 8.366 6.85799 8.35849 6.8655C8.2658 6.95868 8.14557 6.99876 8.02383 7.00177C8.0201 7.00177 8.01648 7.00264 8.01282 7.00351C8.00861 7.00452 8.00434 7.00555 7.99978 7.00528C7.99555 7.00554 7.99145 7.00455 7.98734 7.00355C7.98368 7.00266 7.98001 7.00177 7.97623 7.00177C7.8545 6.99876 7.73376 6.95868 7.64158 6.8655C7.63406 6.85799 7.63707 6.84696 7.63055 6.83945L3.30654 3.37112L1.30961 1.76947L1.21993 1.69733C1.08266 1.91926 1 2.17877 1 2.45883L1 10.5673C1 11.3714 1.65178 12.0237 2.45637 12.0237L13.5437 12.0237C14.3478 12.0237 15.0001 11.3714 15.0001 10.5673Z',
  },
  past: {
    viewBox: '0 0 17 15',
    fill: 'AECB4F',
    path:
      'M11.0915 0.0333289C10.0821 -0.209968 8.97013 0.904902 8.60809 2.52349C8.24605 4.14208 8.77088 5.65148 9.78217 5.89471C10.7907 6.13795 11.9036 5.02314 12.2657 3.40651C12.6287 1.78798 12.101 0.278522 11.0915 0.0333289ZM7.19162 2.52349C7.55451 4.14202 7.02877 5.65142 6.01833 5.89471C5.00886 6.13801 3.89693 5.0232 3.53398 3.40651C3.17389 1.78791 3.69872 0.278522 4.70819 0.0333289C5.71863 -0.209906 6.83148 0.904902 7.19162 2.52349ZM12.9131 6.1169C12.2398 7.07278 12.1977 8.22875 12.8183 8.69999C13.4379 9.16921 14.4857 8.78032 15.1581 7.82365C15.8303 6.86973 15.8725 5.71473 15.2529 5.24258C14.6332 4.77226 13.5845 5.16397 12.9131 6.1169ZM0.679876 8.24123C-0.076686 7.3562 -0.224242 6.21081 0.350444 5.68023C0.923172 5.14959 2.00158 5.43693 2.7582 6.32001C3.51483 7.20308 3.66232 8.35031 3.08862 8.87912C2.51491 9.41159 1.4365 9.12516 0.679876 8.24123ZM3.62874 12.3691C3.62874 11.1 5.43697 7.26438 7.84571 7.26438C10.2555 7.26438 12.0627 11.1 12.0627 12.3691C12.0627 14.2237 11.4242 13.8388 10.4002 13.2213C9.70144 12.8 8.82315 12.2704 7.84571 12.2704C6.86885 12.2704 5.99075 12.7998 5.29198 13.2211C4.26772 13.8387 3.62874 14.2239 3.62874 12.3691Z',
  },
  unpast: {
    viewBox: '0 0 17 15',
    stroke: '#BABABA',
    fill: 'none',
    path:
      'M7.19157 2.52348C7.55447 4.14201 7.02872 5.6514 6.01828 5.8947C5.00882 6.13799 3.89689 5.02319 3.53393 3.40649C3.17385 1.7879 3.69868 0.278508 4.70814 0.0333149C5.71858 -0.20992 6.83143 0.904888 7.19157 2.52348ZM11.0916 0.0333289C10.0822 -0.209968 8.9702 0.904902 8.60816 2.52349C8.24612 4.14208 8.77095 5.65148 9.78225 5.89471C10.7908 6.13795 11.9037 5.02314 12.2657 3.40651C12.6288 1.78798 12.1011 0.278522 11.0916 0.0333289ZM12.9129 6.11692C12.2396 7.07279 12.1975 8.22877 12.8181 8.70001C13.4377 9.16923 14.4855 8.78033 15.1578 7.82366C15.8301 6.86975 15.8723 5.71475 15.2527 5.24259C14.633 4.77227 13.5843 5.16398 12.9129 6.11692ZM0.679876 8.24123C-0.076686 7.3562 -0.224242 6.2108 0.350444 5.68022C0.923172 5.14958 2.00158 5.43692 2.7582 6.32C3.51483 7.20307 3.66232 8.3503 3.08862 8.87911C2.51491 9.41158 1.4365 9.12516 0.679876 8.24123ZM3.62891 12.3691C3.62891 11.1 5.43714 7.26437 7.84588 7.26437C10.2557 7.26437 12.0629 11.1 12.0629 12.3691C12.0629 14.2237 11.4244 13.8387 10.4004 13.2213C9.70161 12.8 8.82331 12.2704 7.84588 12.2704C6.86902 12.2704 5.99092 12.7998 5.29215 13.2211C4.26789 13.8387 3.62891 14.2239 3.62891 12.3691Z',
  },
  detail: {
    viewBox: '0 0 17 17',
    fill: '#AECB4F',
    path:
      'M8.33333 0C3.73333 0 0 3.73333 0 8.33333C0 12.9333 3.73333 16.6667 8.33333 16.6667C12.9333 16.6667 16.6667 12.9333 16.6667 8.33333C16.6667 3.73333 12.9333 0 8.33333 0ZM9.16667 4.16667L9.16667 5.83333L7.5 5.83333L7.5 4.16667L9.16667 4.16667ZM7.5 12.5L7.5 7.5L9.16667 7.5L9.16667 12.5L7.5 12.5Z',
  },
  undetail: {
    viewBox: '0 0 17 17',
    fill: '#BABABA',
    path:
      'M0 8.335C0 3.73171 3.73171 0 8.335 0C12.9369 0.00344838 16.6666 3.73314 16.67 8.335C16.67 12.9383 12.9383 16.67 8.335 16.67C3.73171 16.67 0 12.9383 0 8.335ZM8.335 15.0068C4.65029 15.0068 1.66325 12.0197 1.66325 8.335C1.66325 4.65029 4.65029 1.66325 8.335 1.66325C12.0197 1.66325 15.0068 4.65029 15.0068 8.335C15.0033 12.0183 12.0183 15.0033 8.335 15.0068ZM9.17288 5.83387L7.50338 5.83387L7.50338 4.16437L9.17288 4.16437L9.17288 5.83387ZM7.50338 12.5056L9.17288 12.5056L9.17288 7.50338L7.50338 7.50338L7.50338 12.5056Z',
  },
  participant: {
    viewBox: '0 0 19 12',
    fill: '#AECB4F',
    path:
      'M8.32784 2.49898C8.32784 3.87704 7.21239 4.99458 5.83511 4.99795C5.17126 4.99961 4.53403 4.73706 4.06403 4.26823C3.59403 3.7994 3.32989 3.16283 3.32989 2.49898C3.32989 1.11883 4.44872 0 5.82887 0C7.20901 0 8.32784 1.11883 8.32784 2.49898ZM12.4949 4.99795C13.875 4.99795 14.9939 3.87912 14.9939 2.49898C14.9939 1.11883 13.875 0 12.4949 0C11.1147 0 9.99591 1.11883 9.99591 2.49898C9.99591 3.87912 11.1147 4.99795 12.4949 4.99795ZM5.82887 6.66602C3.88591 6.66602 0 7.64062 0 9.58358L0 11.664L11.664 11.664L11.664 9.57733C11.664 7.63438 7.77182 6.65978 5.83511 6.65978L5.82887 6.66602ZM11.689 6.70975C11.9763 6.66602 12.2512 6.66602 12.4949 6.66602L12.4949 6.65978C14.4378 6.65978 18.33 7.63438 18.33 9.57733L18.33 11.6577L13.332 11.6577L13.332 9.57733C13.2955 8.40766 12.6796 7.33276 11.689 6.70975Z',
  },
  unparticipant: {
    viewBox: '0 0 19 12',
    fill: '#BABABA',
    path:
      'M5.41667 5.83333C7.025 5.83333 8.33333 4.525 8.33333 2.91667C8.33333 1.30833 7.025 0 5.41667 0C3.80833 0 2.5 1.30833 2.5 2.91667C2.5 4.525 3.80833 5.83333 5.41667 5.83333ZM12.9167 5.83333C14.525 5.83333 15.8333 4.525 15.8333 2.91667C15.8333 1.30833 14.525 0 12.9167 0C11.3083 0 10 1.30833 10 2.91667C10 4.525 11.3083 5.83333 12.9167 5.83333ZM7.08333 2.91667C7.08333 2 6.33333 1.25 5.41667 1.25C4.5 1.25 3.75 2 3.75 2.91667C3.75 3.83333 4.5 4.58333 5.41667 4.58333C6.33333 4.58333 7.08333 3.83333 7.08333 2.91667ZM14.5833 2.91667C14.5833 2 13.8333 1.25 12.9167 1.25C12 1.25 11.25 2 11.25 2.91667C11.25 3.83333 12 4.58333 12.9167 4.58333C13.8333 4.58333 14.5833 3.83333 14.5833 2.91667ZM9.16667 7.5C10.3583 6.95 11.9167 6.66667 12.9167 6.66667C14.725 6.66667 18.3333 7.56667 18.3333 9.375L18.3333 11.6667L0 11.6667L0 9.375C0 7.56667 3.60833 6.66667 5.41667 6.66667C6.41667 6.66667 7.975 6.94167 9.16667 7.5ZM1.25 10.4167L1.25 9.375C1.25 8.925 3.38333 7.91667 5.41667 7.91667C7.45 7.91667 9.58333 8.925 9.58333 9.375L9.58333 10.4167L1.25 10.4167ZM10.8333 10.4167L17.0833 10.4167L17.0833 9.375C17.0833 8.925 14.95 7.91667 12.9167 7.91667C12.0333 7.91667 11.1333 8.10833 10.4 8.35833C10.6667 8.65833 10.8333 8.99167 10.8333 9.375L10.8333 10.4167Z',
  },
  comment: {
    viewBox: '0 0 18 18',
    fill: '#AECB4F',
    path:
      'M7.22501 0C11.2156 0 14.45 2.98596 14.45 6.66907C14.45 10.3527 11.2156 13.3387 7.22501 13.3387C6.46615 13.3387 5.74843 13.2014 5.06129 13.0007L2.33829 14.9103L2.33829 11.5547C0.90952 10.3361 0 8.60708 0 6.66907C0 2.98596 3.23502 0 7.22501 0ZM15.3277 5.14551C15.1476 4.3255 14.8207 3.55163 14.3693 2.84503C16.4163 4.07032 17.7778 6.19124 17.7778 8.61403C17.7778 10.8078 16.647 12.7391 14.918 13.9983L14.918 17.7743L11.5095 15.3832C11.1271 15.4393 10.7429 15.4921 10.3443 15.4921C8.80489 15.4921 7.37556 15.0591 6.18863 14.318C6.3354 14.3241 6.47938 14.3374 6.62671 14.3374C7.34498 14.3374 8.03991 14.2546 8.70871 14.1145C9.23352 14.2429 9.77445 14.3341 10.3443 14.3341C10.7924 14.3341 11.2293 14.288 11.6513 14.2068L13.775 15.4827L13.775 13.3857C15.4923 12.3655 16.6337 10.6121 16.6337 8.60458C16.6337 7.29867 16.1355 6.10952 15.3277 5.14551Z',
  },
  uncomment: {
    viewBox: '0 0 18 18',
    fill: '#BABABA',
    path:
      'M14.45 6.66907C14.45 2.98596 11.2156 0 7.22501 0C3.23502 0 0 2.98596 0 6.66907C0 8.60708 0.90952 10.3361 2.33829 11.5547L2.33829 14.9103L5.06129 13.0007C5.74843 13.2014 6.46615 13.3387 7.22501 13.3387C11.2156 13.3387 14.45 10.3527 14.45 6.66907ZM3.48186 12.6182L4.86727 11.786C5.59332 12.0623 6.38888 12.2163 7.22501 12.2163C10.6029 12.2163 13.3415 9.72897 13.3415 6.66184C13.3415 3.59249 10.6029 1.10577 7.22501 1.10577C3.84711 1.10577 1.10855 3.59249 1.10855 6.66184C1.10855 8.44141 2.04753 10.0081 3.48186 11.0249L3.48186 12.6182ZM15.3277 5.14551C15.1476 4.3255 14.8207 3.55163 14.3693 2.84503C16.4163 4.07032 17.7778 6.19124 17.7778 8.61403C17.7778 10.8078 16.647 12.7391 14.918 13.9983L14.918 17.7743L11.5095 15.3832C11.1271 15.4393 10.7429 15.4921 10.3443 15.4921C8.80489 15.4921 7.37556 15.0591 6.18863 14.318C6.3354 14.3241 6.47938 14.3374 6.62671 14.3374C7.34498 14.3374 8.03991 14.2546 8.70871 14.1145C9.23352 14.2429 9.77445 14.3341 10.3443 14.3341C10.7924 14.3341 11.2293 14.288 11.6513 14.2068L13.775 15.4827L13.775 13.3857C15.4923 12.3655 16.6337 10.6121 16.6337 8.60458C16.6337 7.29867 16.1355 6.10952 15.3277 5.14551Z',
  },
  reply: {
    viewBox: '0 0 16 14',
    fill: '#D5EF7F',
    path:
      'M15.4523 13.009C15.4583 13.0095 15.4638 13.0095 15.4693 13.0095C15.7162 13.0095 15.8957 12.8355 15.9322 12.598C15.9577 12.4356 16.4877 8.53037 14.1139 5.84309C12.655 4.19172 10.3892 3.28779 7.4839 3.1983L7.4839 0.483014C7.4839 0.296528 7.37241 0.127542 7.19793 0.0465484C7.02344 -0.0329453 6.81746 -0.00944717 6.66797 0.108043L0.183985 5.25563C0.0679946 5.34763 0.00049996 5.48462 0 5.6296C0 5.77559 0.0669947 5.91258 0.182985 6.00457L6.66647 11.2012C6.81546 11.3202 7.02344 11.3451 7.19743 11.2647C7.37241 11.1852 7.4839 11.0147 7.4839 10.8272L7.4839 8.05091C14.4878 8.04641 15.0013 12.3881 15.0178 12.5671C15.0398 12.811 15.1993 13.0015 15.4523 13.009ZM6.98444 7.07649L6.98394 7.07649C6.85145 7.07649 6.72446 7.12799 6.63097 7.21748C6.53598 7.30847 6.48398 7.43146 6.48398 7.55995L6.48398 9.80327L1.2894 5.6326L6.48398 1.50193L6.48398 3.67476C6.48398 3.94174 6.70747 4.15822 6.98394 4.15822C9.82872 4.15822 12.002 4.95566 13.3509 6.46804C14.3659 7.60695 14.8318 9.00134 14.9913 10.1572C13.8994 8.71336 11.988 7.07949 6.98444 7.07649Z',
  },
  plus: {
    viewBox: '0 0 17 17',
    fill: '#D5EF7F',
    path:
      'M16.3929 9.10775L9.10714 9.10775L9.10714 16.3935C9.10714 16.7292 8.83514 17 8.5 17C8.16425 17 7.89286 16.7292 7.89286 16.3935L7.89286 9.10775L0.607143 9.10775C0.271393 9.10775 0 8.83636 0 8.5C0 8.16486 0.271393 7.89286 0.607143 7.89286L7.89286 7.89286L7.89286 0.607143C7.89286 0.272 8.16425 0 8.5 0C8.83514 0 9.10714 0.272 9.10714 0.607143L9.10714 7.89286L16.3929 7.89286C16.728 7.89286 17 8.16486 17 8.5C17 8.83636 16.728 9.10775 16.3929 9.10775',
  },
  send: {
    viewBox: '0 0 28 24',
    fill: '#8560A9',
    path:
      'M4.44089e-16 24L28 12L6.97083 2.9875L4.44089e-16 0L4.44089e-16 9.33L20 12L0 14.67L0 24L4.44089e-16 24Z',
  },
  chat: {
    viewBox: '0 0 21 21',
    fill: '#453257',
    path:
      'M20.7849 9.13721C20.7849 14.1748 16.1224 18.2737 10.3921 18.2737C10.0531 18.2737 9.70226 18.2571 9.32371 18.2217L3.76679 20.9998L3.76679 16.1709C1.37069 14.4258 0 11.8723 0 9.13721C0 4.09888 4.66186 0 10.3921 0C16.1224 0 20.7849 4.09888 20.7849 9.13721ZM10.3921 1.94891C15.0484 1.94891 18.8359 5.17352 18.8359 9.13721C18.8359 13.1002 15.0484 16.3248 10.3921 16.3248C10.017 16.3248 9.72994 16.3248 9.50877 16.329L9.13438 16.3255L9.13368 16.3463C9.07475 16.3526 9.02553 16.3595 8.98462 16.3678L8.98185 16.3616L8.9562 16.3747C8.89726 16.3893 8.85844 16.4101 8.83279 16.4364L5.71633 17.9943L5.71633 15.0831L5.54716 14.9819C3.29389 13.6313 1.94885 11.4466 1.94885 9.13721C1.94885 5.17352 5.73644 1.94891 10.3921 1.94891ZM5.36979 7.53496C4.48581 7.53496 3.76685 8.25393 3.76685 9.13721C3.76685 10.0205 4.48581 10.7395 5.36979 10.7395C6.25308 10.7395 6.97205 10.0205 6.97205 9.13721C6.97205 8.25393 6.25308 7.53496 5.36979 7.53496ZM10.3922 10.7395C11.2761 10.7395 11.9951 10.0205 11.9951 9.13721C11.9951 8.25393 11.2761 7.53496 10.3922 7.53496C9.50889 7.53496 8.78992 8.25393 8.78992 9.13721C8.78992 10.0205 9.50889 10.7395 10.3922 10.7395ZM13.813 9.13721C13.813 8.25393 14.532 7.53496 15.4152 7.53496C16.2992 7.53496 17.0175 8.25393 17.0175 9.13721C17.0175 10.0205 16.2992 10.7395 15.4152 10.7395C14.532 10.7395 13.813 10.0205 13.813 9.13721Z',
  },
};

function Icon({ icon, color, height = 12, width = 12, style }: SVGRProps) {
  return (
    <svg
      style={style}
      width={width}
      height={height}
      viewBox={ICONS[icon].viewBox}
    >
      <path
        d={ICONS[icon].path}
        fill={color ? color : ICONS[icon].fill}
        stroke={ICONS[icon].stroke ? ICONS[icon].stroke : 'none'}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Icon;