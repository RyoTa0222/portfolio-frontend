interface Props {
  /**
   * 幅
   */
  width?: number
  /**
   * 高さ
   */
  height?: number
}

const SvgArchiveGradient: React.FC<Props> = ({ width, height }) => {
  return (
    <svg
      width={width ?? 18}
      height={height ?? 18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 2.8125V6.1875H2.8125V15.1875H15.1875V6.1875H15.75V2.8125H2.25ZM3.375 3.9375H14.625V5.0625H3.375V3.9375ZM3.9375 6.1875H14.0625V14.0625H3.9375V6.1875ZM7.20703 7.3125C6.89722 7.34106 6.6687 7.61792 6.69727 7.92773C6.72583 8.23755 7.00269 8.46606 7.3125 8.4375H10.6875C10.8896 8.4397 11.0786 8.33423 11.1819 8.15845C11.283 7.98267 11.283 7.76733 11.1819 7.59155C11.0786 7.41577 10.8896 7.3103 10.6875 7.3125H7.3125C7.29492 7.3125 7.27734 7.3125 7.25977 7.3125C7.24219 7.3125 7.22461 7.3125 7.20703 7.3125Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M2.25 2.8125V6.1875H2.8125V15.1875H15.1875V6.1875H15.75V2.8125H2.25ZM3.375 3.9375H14.625V5.0625H3.375V3.9375ZM3.9375 6.1875H14.0625V14.0625H3.9375V6.1875ZM7.20703 7.3125C6.89722 7.34106 6.6687 7.61792 6.69727 7.92773C6.72583 8.23755 7.00269 8.46606 7.3125 8.4375H10.6875C10.8896 8.4397 11.0786 8.33423 11.1819 8.15845C11.283 7.98267 11.283 7.76733 11.1819 7.59155C11.0786 7.41577 10.8896 7.3103 10.6875 7.3125H7.3125C7.29492 7.3125 7.27734 7.3125 7.25977 7.3125C7.24219 7.3125 7.22461 7.3125 7.20703 7.3125Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M2.25 2.8125V6.1875H2.8125V15.1875H15.1875V6.1875H15.75V2.8125H2.25ZM3.375 3.9375H14.625V5.0625H3.375V3.9375ZM3.9375 6.1875H14.0625V14.0625H3.9375V6.1875ZM7.20703 7.3125C6.89722 7.34106 6.6687 7.61792 6.69727 7.92773C6.72583 8.23755 7.00269 8.46606 7.3125 8.4375H10.6875C10.8896 8.4397 11.0786 8.33423 11.1819 8.15845C11.283 7.98267 11.283 7.76733 11.1819 7.59155C11.0786 7.41577 10.8896 7.3103 10.6875 7.3125H7.3125C7.29492 7.3125 7.27734 7.3125 7.25977 7.3125C7.24219 7.3125 7.22461 7.3125 7.20703 7.3125Z"
        fill="url(#paint2_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="5.02941"
          y1="0.3375"
          x2="10.8663"
          y2="16.3186"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0000" />
          <stop offset="0.505208" stopColor="#FF9A2B" />
          <stop offset="1" stopColor="#FAFF00" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="21.7059"
          y1="6.83438"
          x2="10.6641"
          y2="11.398"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFE0" stopOpacity="0.79" />
          <stop offset="0.528699" stopColor="#A2FF59" stopOpacity="0.79" />
          <stop offset="1" stopColor="#FFD600" stopOpacity="0.11" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="1.65441"
          y1="15.1875"
          x2="12.1299"
          y2="0.796183"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9E00FF" />
          <stop offset="0.1875" stopColor="#FF66D4" stopOpacity="0.984375" />
          <stop offset="0.519907" stopColor="#E9ACFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgArchiveGradient
