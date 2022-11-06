import React from 'react';
import { SvgXml } from 'react-native-svg';
export default function FiltersSvg() {
  const svgMarkup = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="3.5" fill="white"/>
<path d="M20.6668 9.33333H11.3335C10.8031 9.33333 10.2944 9.54405 9.91928 9.91912C9.54421 10.2942 9.3335 10.8029 9.3335 11.3333V12.1133C9.3334 12.3886 9.39014 12.661 9.50016 12.9133V12.9533C9.59435 13.1673 9.72776 13.3618 9.8935 13.5267L14.0002 17.6067V22C13.9999 22.1133 14.0286 22.2248 14.0834 22.3239C14.1382 22.4231 14.2174 22.5066 14.3135 22.5667C14.4196 22.6324 14.542 22.6671 14.6668 22.6667C14.7712 22.666 14.8739 22.6409 14.9668 22.5933L17.6335 21.26C17.7434 21.2046 17.8359 21.1198 17.9006 21.0151C17.9653 20.9104 17.9998 20.7898 18.0002 20.6667V17.6067L22.0802 13.5267C22.2459 13.3618 22.3793 13.1673 22.4735 12.9533V12.9133C22.5927 12.663 22.6585 12.3905 22.6668 12.1133V11.3333C22.6668 10.8029 22.4561 10.2942 22.081 9.91912C21.706 9.54405 21.1973 9.33333 20.6668 9.33333ZM16.8602 16.86C16.7984 16.9223 16.7495 16.9962 16.7163 17.0774C16.6831 17.1586 16.6663 17.2456 16.6668 17.3333V20.2533L15.3335 20.92V17.3333C15.334 17.2456 15.3172 17.1586 15.284 17.0774C15.2508 16.9962 15.202 16.9223 15.1402 16.86L11.6068 13.3333H20.3935L16.8602 16.86ZM21.3335 12H10.6668V11.3333C10.6668 11.1565 10.7371 10.987 10.8621 10.8619C10.9871 10.7369 11.1567 10.6667 11.3335 10.6667H20.6668C20.8436 10.6667 21.0132 10.7369 21.1382 10.8619C21.2633 10.987 21.3335 11.1565 21.3335 11.3333V12Z" fill="#5A46DE"/>
<rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#5A46DE"/>
</svg>
`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width='80px' />;

  return <SvgImage />;
}